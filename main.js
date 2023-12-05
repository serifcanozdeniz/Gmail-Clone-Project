import {mailData} from "./scripts/constant.js";
import {ele, renderMails} from "./scripts/ui.js";

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
document.addEventListener('DOMContentLoaded', () => {
    renderMails(mailData);
});