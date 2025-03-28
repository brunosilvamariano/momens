// Atualiza a prévia do título e da mensagem
function atualizarPreview() {
    // Atualiza o título
    const titulo = document.getElementById('titulo').value; // Obtém o valor do campo de input do título
    const tituloPreview = document.getElementById('titulo-preview'); // Obtém o elemento de pré-visualização do título
    tituloPreview.textContent = titulo ? titulo : "Seu Título Aparecerá Aqui 💖"; // Se o título não estiver vazio, atualiza a prévia

    // Atualiza a mensagem
    const mensagem = document.getElementById('mensagem').value; // Obtém o valor do campo de textarea
    const mensagemPreview = document.getElementById('mensagem-preview'); // Obtém o elemento de pré-visualização da mensagem
    mensagemPreview.textContent = mensagem ? mensagem : "Sua mensagem dedicada aparecerá aqui 🌸"; // Atualiza a prévia

    // Atualiza a contagem de caracteres da mensagem
    const charCount = document.getElementById('char-count'); // Obtém o contador de caracteres
    charCount.textContent = mensagem.length; // Mostra a quantidade de caracteres digitados na mensagem
}

// Ação do botão "Próxima Etapa" para avançar do título para a mensagem
document.getElementById('next-btn-1').addEventListener('click', function () {
    document.getElementById('step-titulo').style.display = 'none'; // Esconde a etapa do título
    document.getElementById('step-mensagem').style.display = 'block'; // Mostra a etapa da mensagem
    document.getElementById('progress-bar').style.width = '33%'; // Atualiza a barra de progresso para 33%
    atualizarPreview(); // Atualiza a prévia
});

// Ação do botão "Próxima Etapa" para avançar da mensagem para a etapa final
document.getElementById('next-btn-2').addEventListener('click', function () {
    document.getElementById('step-mensagem').style.display = 'none'; // Esconde a etapa da mensagem
    document.getElementById('progress-bar').style.width = '66%'; // Atualiza a barra de progresso para 66%
    atualizarPreview(); // Atualiza a prévia
});

// Ação do botão "Finalizar"
document.getElementById('finish-btn').addEventListener('click', function () {
    alert('Álbum finalizado com sucesso!'); // Exibe uma mensagem de confirmação
    document.getElementById('progress-bar').style.width = '100%'; // Atualiza a barra de progresso para 100%
    atualizarPreview(); // Atualiza a prévia
});

// Ação do botão "Voltar" para retornar da mensagem para o título
document.getElementById('back-btn-1').addEventListener('click', function () {
    document.getElementById('step-titulo').style.display = 'block'; // Mostra a etapa do título
    document.getElementById('step-mensagem').style.display = 'none'; // Esconde a etapa da mensagem
    document.getElementById('progress-bar').style.width = '0%'; // Reseta a barra de progresso
});

// Ação do botão "Voltar" para retornar da etapa final para a mensagem
document.getElementById('back-btn-2').addEventListener('click', function () {
    document.getElementById('step-mensagem').style.display = 'block'; // Mostra a etapa da mensagem
    document.getElementById('progress-bar').style.width = '33%'; // Atualiza a barra de progresso para 33%
});
