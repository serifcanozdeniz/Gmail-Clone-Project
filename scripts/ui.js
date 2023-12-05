//arayüz işlemlerini ve html den aldığımız elemanları çağırdığımız dosya
// ! HTML den çağrılan elemanlar
export const ele = {
    menu: document.querySelector("#menu"),
    nav: document.querySelector("nav"),
    mailsArea: document.querySelector(".mails"),
};

//! ekrana mailleri basa
// mailData: ekrana basılacak mailler
export const renderMails = (mailData) => {
    // mailData dizisindeki her bir mail için bir mail
    // mail htmi'i oluştur ve mail html dizisine aktar
 const mail_html = mailData.map((mail) => {
    
    return `
        <div class="mail">
                    <div class="info">
                        <input type="checkbox">
                        <i class="bi bi-star-fill"></i>
                        <b>${mail.sender}</b>
                    </div>
                    <div class="content">
                        <p class="title">${mail.title}</p>
                        <p class="desc">${mail.message}</p>
                    </div>
                    <p class="time">${mail.date}</p>
                    <button>Sil</button>
        </div>
        
        `;
    });

    // join: dizi olarak tanımlanmış olan html değişkenini stringe çevirdi   
    //  console.log(mail_html.join(' '));

    // html deki mail alanına oluşturduğumuz stringi gönder
    ele.mailsArea.innerHTML = mail_html.join(' ');
};