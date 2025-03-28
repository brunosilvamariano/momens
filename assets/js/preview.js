// Função para atualizar a pré-visualização do título e da mensagem
function atualizarPreview() {
    const titulo = document.getElementById('titulo').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Atualiza o título na pré-visualização
    const tituloPreview = document.getElementById('titulo-preview');
    tituloPreview.textContent = titulo ? titulo : "Seu Título Aparecerá Aqui 💖";

    // Atualiza a mensagem na pré-visualização
    const mensagemPreview = document.getElementById('mensagem-preview');
    mensagemPreview.textContent = mensagem ? mensagem : "Sua mensagem dedicada aparecerá aqui 🌸";

    // Atualiza a contagem de caracteres do título
    const tituloCount = document.getElementById('titulo-count');
    tituloCount.textContent = `${titulo.length}/50 caracteres`;

    // Atualiza a contagem de caracteres da mensagem
    const mensagemCount = document.getElementById('mensagem-count');
    mensagemCount.textContent = `${mensagem.length}/750 caracteres`;
}

// Inicializa a pré-visualização ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    atualizarPreview(); // Carrega a pré-visualização inicial
});
