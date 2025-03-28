// Função para atualizar a pré-visualização com base nas entradas do usuário
function atualizarPreview() {
    // Captura os valores das cores selecionadas
    const corFundo = document.getElementById('cor-fundo').value;
    const corTexto = document.getElementById('cor-texto').value;

    // Aplica a cor de fundo e a cor do texto na pré-visualização
    const tituloPreview = document.getElementById('titulo-preview');
    const mensagemPreview = document.getElementById('mensagem-preview');

    // Altera a cor de fundo da pré-visualização
    tituloPreview.style.backgroundColor = corFundo;
    mensagemPreview.style.backgroundColor = corFundo;

    // Altera a cor do texto
    tituloPreview.style.color = corTexto;
    mensagemPreview.style.color = corTexto;
}

// Atualiza o contador de caracteres na etapa da mensagem
document.getElementById('mensagem').addEventListener('input', function() {
    const count = this.value.length;
    document.getElementById('char-count').textContent = count;
});

// Função para mudar de etapas
document.getElementById('next-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'none';
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('progress-bar').style.width = '33%';
});

document.getElementById('back-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'block';
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
});

document.getElementById('next-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('step-cor').style.display = 'block';
    document.getElementById('progress-bar').style.width = '66%';
});

document.getElementById('back-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('step-cor').style.display = 'none';
    document.getElementById('progress-bar').style.width = '33%';
});

document.getElementById('next-btn-3').addEventListener('click', function() {
    alert("Você concluiu a criação!");
});
