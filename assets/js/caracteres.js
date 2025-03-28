// Função para limitar a quantidade de caracteres no título
document.getElementById('titulo').addEventListener('input', function() {
    const titulo = document.getElementById('titulo');
    if (titulo.value.length > 50) {
        titulo.value = titulo.value.substring(0, 50); // Limita o título a 50 caracteres
    }
    atualizarPreview(); // Atualiza a pré-visualização sempre que o título mudar
});

// Função para limitar a quantidade de caracteres na mensagem
document.getElementById('mensagem').addEventListener('input', function() {
    const mensagem = document.getElementById('mensagem');
    if (mensagem.value.length > 750) {
        mensagem.value = mensagem.value.substring(0, 750); // Limita a mensagem a 750 caracteres
    }
    atualizarPreview(); // Atualiza a pré-visualização sempre que a mensagem mudar
});
