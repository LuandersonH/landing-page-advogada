function menu_view() {
    if (menu_lista.style.display == "flex") {
        menu_lista.style.display = "none";
    } else {    
        menu_lista.style.display = "flex";
}
}

function contratos_el(btn) {
    console.log(btn);
    area_texto = btn.parentNode.lastElementChild;
    
    if (btn.previousElementSibling.nodeName =="SPAN" ) {
            if (btn.style.display=="block") {
            btn.style.display="none";
            btn.previousElementSibling.style.display="block";
            area_texto.style.display="block";
        }
    } else {
        if (btn.style.display=="block") {
            btn.style.display="none";
            btn.nextElementSibling.style.display="block";
            area_texto.style.display="none";
        }
    }
}



// redirecionamento para o WhatsApp: https://api.whatsapp.com/send/?phone=5515997614296&text=Oi!%20tenho%20interesse%20em%20conversar%20com%20a%20advogada%20Sabrina&type=phone_number&app_absent=0