// Atualiza a prévia do título e mensagem
function atualizarPreview() {
    // Atualiza o título
    const titulo = document.getElementById('titulo').value;
    const tituloPreview = document.getElementById('titulo-preview');
    tituloPreview.textContent = titulo ? titulo : "Seu Título Aparecerá Aqui 💖";

    // Atualiza a mensagem
    const mensagem = document.getElementById('mensagem').value;
    const mensagemPreview = document.getElementById('mensagem-preview');
    mensagemPreview.textContent = mensagem ? mensagem : "Sua mensagem dedicada aparecerá aqui 🌸";

    // Atualiza a contagem de caracteres da mensagem
    const charCount = document.getElementById('char-count');
    charCount.textContent = mensagem.length;
}

// Ação do botão "Próxima Etapa"
document.getElementById('next-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'none';
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('progress-bar').style.width = '50%'; // Atualizado para 50%
    atualizarPreview();
});

document.getElementById('next-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('progress-bar').style.width = '100%'; // Atualizado para 100%
    alert('Álbum finalizado com sucesso!');
    atualizarPreview();
});

// Botão Voltar (Etapa 1)
document.getElementById('back-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'block';
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%'; // Volta para 0%
});

// Botão Voltar (Etapa 2)
document.getElementById('back-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('progress-bar').style.width = '50%'; // Volta para 50%
});
