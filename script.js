// Preloader - fica por 3 segundos antes de desaparecer
window.onload = () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 3000);
};

// Array com frases inspiradas na série
const frases = [
    "Aqui pelo menos tenho uma chance. Mas lá fora? Não tenho nada lá fora.",
    "Não importa o quanto sejamos fortes, não podemos vencer aqui sozinhos.",
    "Nós só criamos o jogo. Participar foi escolha de vocês.",
    "Você também acha que pode mudar o mundo?",
    "Seja bem-vindo de volta ao jogo."
];

// Função que exibe uma frase aleatória durante o carregamento
const preloaderMessage = document.querySelector('#preloader p');
preloaderMessage.textContent = frases[Math.floor(Math.random() * frases.length)];
