// Atualiza a prévia do título, mensagem e data
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
    
// Atualiza a data
const dataEspecial = document.getElementById('data-especial').value;
const dataPreview = document.getElementById('data-preview');
const dateObj = new Date(dataEspecial);
dataPreview.textContent = dataEspecial ? `Data Especial: ${dateObj.toLocaleString()} 🕒` : "Data Especial: DD/MM/AAAA 🕒";


}

// Ação do botão "Próxima Etapa"
document.getElementById('next-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'none';
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('progress-bar').style.width = '33%';
    atualizarPreview();
});

document.getElementById('next-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('step-data').style.display = 'block';
    document.getElementById('progress-bar').style.width = '66%';
    atualizarPreview();
});

document.getElementById('finish-btn').addEventListener('click', function() {
    alert('Álbum finalizado com sucesso!');
    document.getElementById('progress-bar').style.width = '100%';
    atualizarPreview();
});

// Botão Voltar
document.getElementById('back-btn-1').addEventListener('click', function() {
    document.getElementById('step-titulo').style.display = 'block';
    document.getElementById('step-mensagem').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
});

document.getElementById('back-btn-2').addEventListener('click', function() {
    document.getElementById('step-mensagem').style.display = 'block';
    document.getElementById('step-data').style.display = 'none';
    document.getElementById('progress-bar').style.width = '33%';
});

// Função de alternância de modo escuro
document.querySelector('.toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.main-header').classList.toggle('bg-dark');
    document.querySelector('.main-header').classList.toggle('text-light');
});
