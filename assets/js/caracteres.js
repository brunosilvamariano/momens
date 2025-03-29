// Função para limitar a quantidade de caracteres no título
document.getElementById('titulo').addEventListener('input', function() {
    const titulo = document.getElementById('titulo');
    if (titulo.value.length > 50) {
        titulo.value = titulo.value.substring(0, 50); // Limita o título a 50 caracteres
    }
    atualizarPreview(); // Atualiza a pré-visualização sempre que o título mudar
    atualizarContadorTitulo(); // Atualiza o contador de caracteres do título
});

// Função para limitar a quantidade de caracteres na mensagem
document.getElementById('mensagem').addEventListener('input', function() {
    const mensagem = document.getElementById('mensagem');
    if (mensagem.value.length > 750) {
        mensagem.value = mensagem.value.substring(0, 750); // Limita a mensagem a 750 caracteres
    }
    atualizarPreview(); // Atualiza a pré-visualização sempre que a mensagem mudar
    atualizarContadorMensagem(); // Atualiza o contador de caracteres da mensagem
});

// Função para atualizar o contador de caracteres do título
function atualizarContadorTitulo() {
    const titulo = document.getElementById('titulo');
    const tituloCount = document.getElementById('titulo-count');
    tituloCount.textContent = `${titulo.value.length}/50 caracteres`; // Atualiza o contador de caracteres
}

// Função para atualizar o contador de caracteres da mensagem
function atualizarContadorMensagem() {
    const mensagem = document.getElementById('mensagem');
    const mensagemCount = document.getElementById('mensagem-count');
    mensagemCount.textContent = `${mensagem.value.length}/750 caracteres`; // Atualiza o contador de caracteres
}

// Inicializa os contadores de caracteres ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    atualizarContadorTitulo(); // Atualiza o contador do título
    atualizarContadorMensagem(); // Atualiza o contador da mensagem
});
