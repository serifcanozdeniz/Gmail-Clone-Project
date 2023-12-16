import {ele, renderMails, toggleModal } from "./scripts/ui.js";
import { getDate } from "./scripts/helpers.js";

// * Local Storage'dan verileri al ve obje formatına çevir projede mail verisi olarak hep bunu kullan diziyi güncellediğinde localstorage'da da güncelle
const strMail = localStorage.getItem("mails") || [];
let mailData = JSON.parse(strMail);

// 1) Navbar için açılma ve kapanma özelliği
// Hamburger iconuna tıklanma olayını izle
// tıklanınca nav menüsüne hide class ı ekle
// zaten kapalıyken tıklanırsa hide class ını kaldır
ele.menu.addEventListener("click", () => {
    ele.nav.classList.toggle("hide");
});


// 2) Listeleme özelliği
// kullanıcı projeye girme anında mailleri listele
// DOMContentLoaded > tarayıcıdaki html'in yüklenmesinin bitmesi
// ekran boyutu 1200px altında ise navbar kapalı gelsin
document.addEventListener('DOMContentLoaded', () => {
    renderMails(mailData);

    if(window.innerWidth < 1200){
        ele.nav.classList.add('hide');
    }
});

// 3) Modal açma-kapama
// oluştur butonuna tıklanınca modal'ı göster (display:grid)
// X butonuna veya dışarıya tıklanınca modal'ı kapat (display:none)
ele.createBtn.addEventListener("click", () => toggleModal(true));
ele.closeBtn.addEventListener("click", () => toggleModal(false));

ele.modal.addEventListener('click', (e) =>{
    // eğer ki tıklanılan elemanın class'ında modal-wrapper varsa modal'ı kapatır.
    if(e.target.classList.contains("modal-wrapper")) {
        toggleModal(false);
    }
});

// 4) Mail atma özelliği
// açılan modal'daki formun gönderilme olayını izleyeceğiz
// eğer tüm inputlar doluysa yeni mail oluştur, değilse kullanıcıya uyarı ver

ele.modalForm.addEventListener("submit", (e) => {
    // sayfayı yenilemeyi engelle
    e.preventDefault();


    // formdaki inputların verilerine erişme
    const receiver = e.target[1].value
    const title = e.target[2].value
    const message = e.target[3].value
    
    // eğer ki inputlar boşsa uyarı gönder
    if(!receiver || !title || !message) {
        alert("Lütfen tüm alanları doldurunuz.")
    } else {

        // diziye eklemek için yeni mail objesi oluştur.
        const newMail = {
            id: new Date().getTime(),
            sender: "Okan",
            receiver: receiver,
            title: title,
            message: message,
            date: getDate(),
        };

        // yeni maili mailler dizisine ekledik
        mailData.unshift(newMail);
        
        // mailler dizisinin son halini locak-storage'a kaydettik
        localStorage.setItem("mails", JSON.stringify(mailData));

        // mailler dizisnin son halini ekrana bastık
        renderMails(mailData);

        // modal'ı kapat
        toggleModal(false);
    }
    
});

// 5) Mail silme özelliği
const handleClick = (e) => {
    const mail = e.target.closest('.mail');
    const mailId = mail.dataset.id;
    
    // tıklanılan elemanın id'si delete ise mail'i sil
    if (e.target.id === 'delete' && confirm("Mail'i silmek istiyor musunuz ?")) {
        // id'si sileceğimiz elemana eşit olmayan elemanları filtrele
        mailData = mailData.filter((mail) => mail.id !== Number(mailId));

        //local storage'ı güncelle
        localStorage.setItem('mails', JSON.stringify(mailData));
        
        
        // maili html'den kaldır
        mail.remove();
    }

    // tıklanılan eleman yıldız ise mail'i like'la
    if(e.target.id === 'star') {
        // 1) id'sini bildiğimiz mail'in bütün bilgilerini al
        const found = mailData.find((item) => item.id === Number(mailId));
        // 2) objenin is_stared "yıldızlı" değerini tersine çevir
        found.isStared = !found.isStared;
        // 3) local storage'ı güncelle
        localStorage.setItem('mails', JSON.stringify(mailData));
        // 4) arayüzü güncelle
        renderMails(mailData);
    }
};

ele.mailsArea.addEventListener("click", handleClick);

// 6) navigasyon menüsü aktifliği
ele.nav.addEventListener('click', (e) => {
    // eğer ki ikinci category'e yani "yıldızlı" kategorisine tıklanırsa burası çalışıyor.
    console.log(e.target.id);

    if(e.target.id === "category2") {
        // dizi içerisinden sadece yıldızlı olanları al ve ekrana bas
        const filtered = mailData.filter((mail) => mail.isStared === true);
        renderMails(filtered);
    } else{
        // bütün diziyi ekrana bas
        renderMails(mailData);
    }
});

// 7) aratma özelliği
// kullanıcının anlık olarak inputa her veri girdiğinde mailleri filtrele

// sayaç değişkeni
let timer;

ele.searchInp.addEventListener('input', (e) => {
    
    // yeni tuş vuruşunda nceki her sayımı sıfırla
    clearTimeout(timer);
    // fonksiyonu çalıştırmak için her sayım başlat
    timer = setTimeout (() => searchMail(e),1000);
});

function searchMail(e) {
    // arama terimine erişme
    const query = e.target.value;
    
    //mail'in içerisindeki en 1 değer arattığımız terimi içeriyorsa maili filtrele
    const filtred = mailData.filter((mail)=>
        // objeyi diziye çevir
        Object.values(mail) 
        // dizinin ihtiyacımız olan elemanlarını al
        .slice(1, 6)
        // objenin değerlerinden en az biri arattığımız terimi içeriyor mu kontrolü yaptık
        .some((value) => value.toLowerCase().includes(query.toLowerCase()))
    );

    if(filtred.length === 0) {
        // idizide eleman yoksa uyarı bas
        ele.mailsArea.innerHTML = '<div class="warn">Arattığınız terime uygun mail bulunamadı</div>'
    } else{
        // filtrelenenleri ekrana bas
        renderMails(filtred);
    }
}