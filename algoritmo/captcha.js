

        // Cria uma lista de dados para gerar um código aleatório
export function gerarCaptcha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    const captchaLength = 6;
    let captchaCode = "";

    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        captchaCode += caracteres.charAt(randomIndex);
    }

    document.getElementById("captchaOutput").textContent = captchaCode;
    document.getElementById("captchaInput").value = "";
    document.getElementById("result").textContent = "";
}

 export function checarCaptcha() {
    // Obtém o código inserido e o código CAPTCHA gerado
    const enteredCode = document.getElementById("captchaInput").value;
    const generatedCode = document.getElementById("captchaOutput").textContent;
    const resultParagraph = document.getElementById("result");
    const loader = document.getElementById("load")
    
  
   
   
    // Verifica se o código digitado está correto
    if (enteredCode === generatedCode) {
        
        
        resultParagraph.textContent = "Deu certo, o código é válido!";
        resultParagraph.classList.remove("text-red-500"); // Remova a classe vermelha, se existir
        resultParagraph.classList.add("text-green-500"); // Adicione a classe verde
        
     
     // Código correto. Aplica a animação de Loading e redireciona a próxima pagina.
        setTimeout(function() {
            resultParagraph.textContent = "";
            loader.classList.remove("hidden");
            
            setTimeout(function() {
                window.location.href = "./cv.html";
            }, 3000);
            
            
            
        },2000);


    } else {
        resultParagraph.textContent = "Algo deu errado, tente novamente!";
        resultParagraph.classList.remove("text-green-500"); // Remova a classe verde, se existir
        resultParagraph.classList.add("text-red-500"); // Adicione a classe vermelha
    }
    
   
    
   
}




