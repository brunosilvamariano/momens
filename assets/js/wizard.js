// Função para ir para a próxima etapa
function irParaProximaEtapa(etapaAtual, proximaEtapa, progresso) {
    // Verifica se a etapa atual está validada (apenas exemplo de validação)
    const etapaAtualInput = document.querySelector(`#${etapaAtual} input`);
    if (etapaAtualInput && etapaAtualInput.required && etapaAtualInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // Não avança se o campo estiver vazio
    }

    document.getElementById(etapaAtual).style.display = 'none';  // Esconde a etapa atual
    document.getElementById(proximaEtapa).style.display = 'block';  // Mostra a próxima etapa
    document.getElementById('progress-bar').style.width = progresso;  // Atualiza a barra de progresso

    // Efeito de clique no botão
    document.querySelector(`#${etapaAtual} .btn`).classList.add('clicked');
    setTimeout(() => {
        document.querySelector(`#${etapaAtual} .btn`).classList.remove('clicked');
    }, 300);  // Remove o efeito após 300ms
}

// Função para voltar para a etapa anterior
function voltarParaEtapaAnterior(etapaAtual, etapaAnterior, progresso) {
    document.getElementById(etapaAtual).style.display = 'none';  // Esconde a etapa atual
    document.getElementById(etapaAnterior).style.display = 'block';  // Mostra a etapa anterior
    document.getElementById('progress-bar').style.width = progresso;  // Atualiza a barra de progresso
}

// Ação do botão "Próxima Etapa" - Etapa 1 para Etapa 2
document.getElementById('next-btn-1').addEventListener('click', function() {
    irParaProximaEtapa('step-titulo', 'step-mensagem', '50%'); // Vai para Etapa 2
});

// Ação do botão "Próxima Etapa" - Etapa 2 para Etapa 3
document.getElementById('next-btn-2').addEventListener('click', function() {
    irParaProximaEtapa('step-mensagem', 'step-foto', '70%'); // Vai para Etapa 3
});

// Ação do botão "Próxima Etapa" - Etapa 3 para Etapa 4
document.getElementById('next-btn-3').addEventListener('click', function() {
    irParaProximaEtapa('step-foto', 'step-video', '80%'); // Vai para Etapa 4
});

// Ação do botão "Próxima Etapa" - Etapa 4 para Etapa 5
document.getElementById('next-btn-4').addEventListener('click', function() {
    irParaProximaEtapa('step-video', 'step-musica', '90%'); // Vai para Etapa 5
});

// Ação do botão "Próxima Etapa" - Etapa 5 para Etapa Final
document.getElementById('next-btn-5').addEventListener('click', function() {
    irParaProximaEtapa('step-musica', 'step-final', '100%'); // Vai para Etapa Final
});

// Ação do botão "Voltar" - Etapa 2 para Etapa 1
document.getElementById('back-btn-1').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-mensagem', 'step-titulo', '0%'); // Volta para Etapa 1
});

// Ação do botão "Voltar" - Etapa 3 para Etapa 2
document.getElementById('back-btn-2').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-foto', 'step-mensagem', '50%'); // Volta para Etapa 2
});

// Ação do botão "Voltar" - Etapa 4 para Etapa 3
document.getElementById('back-btn-3').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-video', 'step-foto', '70%'); // Volta para Etapa 3
});

// Ação do botão "Voltar" - Etapa 5 para Etapa 4
document.getElementById('back-btn-4').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-musica', 'step-video', '80%'); // Volta para Etapa 4
});
