async function sendMessage(){
    const chatBox = Document.getElementById("chatbox");
    const userInput = Decument.getElementById("userInput");
    const userMessage = userInput.value;

    if (!userMessage) return;

    // Adicionar uma mensagem do usuário
    const userDiv = document.getElementById("div");
    userDiv.className = "user-Message message";
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    //limpar campo de entrada
    userInput.value = "";
    
    //fazer scrool automático para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;

    //configuração do endpoint e chave da API
    const endpoint = "https://ryan-m8ry49u2-eastus2.openai.azure.com";
    const apiKey = "EIoTTAYyrWK5UW4EFVVIc3hGIexGN9JjOWk2A4eI6iD99jZRUGEfJQQJ99BCACHYHv6XJ3w3AAAAACOGPAz3";
    const deploymentId = "gpt-4";//nome do deployment no azure openAI
    const apiVersion = "2024-05-01-preview"; //verifique a versão na documentação

    
}