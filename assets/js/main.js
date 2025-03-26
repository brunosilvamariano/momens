let etapaAtual = 1;  // Controla a etapa atual (1: Título, 2: Mensagem)

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

// Função para avançar para a próxima etapa
document.getElementById('btn-proxima').addEventListener('click', function() {
    if (etapaAtual === 1) {
        // Mostrar etapa de mensagem e esconder a etapa de título
        document.getElementById('titulo-step').style.display = 'none';
        document.getElementById('mensagem-step').style.display = 'block';
        
        // Atualizar barra de progresso
        document.getElementById('progress-bar').style.width = '60%';
        document.getElementById('progress-bar').setAttribute('aria-valuenow', '60');
        
        // Avançar para a próxima etapa
        etapaAtual = 2;

        // Atualizar os botões
        document.getElementById('btn-voltar').style.display = 'inline-block';
        document.getElementById('btn-proxima').style.display = 'none';
        
        // Mostrar a mensagem dedicada quando for para a etapa de mensagem
        document.getElementById('mensagem-preview').style.display = 'block';
    }
});

// Função para voltar para a etapa anterior
document.getElementById('btn-voltar').addEventListener('click', function() {
    if (etapaAtual === 2) {
        // Mostrar etapa de título e esconder a etapa de mensagem
        document.getElementById('titulo-step').style.display = 'block';
        document.getElementById('mensagem-step').style.display = 'none';
        
        // Atualizar barra de progresso
        document.getElementById('progress-bar').style.width = '20%';
        document.getElementById('progress-bar').setAttribute('aria-valuenow', '20');
        
        // Voltar para a etapa de título
        etapaAtual = 1;

        // Atualizar os botões
        document.getElementById('btn-voltar').style.display = 'none';
        document.getElementById('btn-proxima').style.display = 'inline-block';
        
        // Esconder a mensagem dedicada ao voltar para a etapa de título
        document.getElementById('mensagem-preview').style.display = 'none';
    }
});

// Função para voltar para a etapa de mensagem dedicada (opcional, caso você precise de um botão extra)
document.getElementById('btn-voltar-mensagem').addEventListener('click', function() {
    // Mostrar etapa de mensagem e esconder a etapa de título
    document.getElementById('titulo-step').style.display = 'block';
    document.getElementById('mensagem-step').style.display = 'none';
    
    // Atualizar barra de progresso
    document.getElementById('progress-bar').style.width = '20%';
    document.getElementById('progress-bar').setAttribute('aria-valuenow', '20');
    
    // Voltar para a etapa de título
    etapaAtual = 1;

    // Atualizar os botões
    document.getElementById('btn-voltar').style.display = 'none';
    document.getElementById('btn-proxima').style.display = 'inline-block';

    // Esconder a mensagem dedicada ao voltar para a etapa de título
    document.getElementById('mensagem-preview').style.display = 'none';
});

// Função de Finalizar - Pode ser ajustada para enviar ou processar os dados
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário finalizado com sucesso!');
});
