// Função para atualizar o conteúdo do preview
function atualizarPreview() {
    const titulo = document.getElementById('titulo').value;
    const mensagem = document.getElementById('mensagem').value;

    // Atualizar os previews dinamicamente
    document.getElementById('titulo-preview').innerText = titulo || 'Seu Título Aparecerá Aqui';
    document.getElementById('mensagem-conteudo').innerText = mensagem || 'Sua mensagem dedicada aparecerá aqui.';

    // Contador de caracteres da mensagem
    const charCount = mensagem.length;
    document.getElementById('char-count').innerText = `${charCount}/700 caracteres`;
}
