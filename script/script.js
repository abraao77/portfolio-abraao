//Formulário

let form = document.querySelector("form");
form.addEventListener ("submit", function(event){
    event.preventDefault();
    alert("Mensagem enviada com sucesso!")
    form.reset()
});

//darkmode

const botaoTema = document.getElementById("tema-bt");

botaoTema.addEventListener("click", function () {
document.body.classList.toggle("dark");
});

//Botão menu - Aparece apenas no celular

const botaoMenu = document.getElementById("menu-bt");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function(){
    menu.classList.toggle("ativo");
});
