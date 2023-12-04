import {ele} from "./scripts/ui.js";

//Navbar için açılma ve kapanma özelliği
//Hamburger iconuna tıklanma olayını izle
//tıklanınca nav menüsüne hide class ı ekle
//zaten kapalıyken tıklanırsa hide class ını kaldır
ele.menu.addEventListener("click", () => {
    ele.nav.classList.toggle("hide");
});
