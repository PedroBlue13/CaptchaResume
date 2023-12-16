// main.js
import { gerarCaptcha, checarCaptcha } from "./algoritmo/captcha";

// Adiciona  função após o carregamento 
document.addEventListener('DOMContentLoaded', () => {
    const verificarBotao = document.getElementById('verificarBotao');
    const gerarBotao = document.getElementById('gerarBotao');

    // Adiciona uma função ao "ouvir" o evento para o botão de verificar
    verificarBotao.addEventListener('click', checarCaptcha);

    // Adiciona uma função ao "ouvir" o evento para o botão de gerar
    gerarBotao.addEventListener('click', gerarCaptcha);
});

// Chama a função gerarCaptcha no carregamento inicial (opcional)
gerarCaptcha();
