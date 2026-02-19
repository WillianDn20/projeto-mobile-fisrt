// Função para abrir e fechar o menu

const button = document.querySelector(".menuButton"); //Procura no documento a classe menuButton
const menu = document.querySelector(".listMenu");

button.addEventListener("click", () => { //Escuta o clique e executa a ação
        menu.classList.toggle("menuToggle")
    });