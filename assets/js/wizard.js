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
    irParaProximaEtapa('step-titulo', 'step-mensagem', '10%'); // Vai para Etapa 2
});

// Ação do botão "Próxima Etapa" - Etapa 2 para Etapa 3
document.getElementById('next-btn-2').addEventListener('click', function() {
    irParaProximaEtapa('step-mensagem', 'step-foto', '20%'); // Vai para Etapa 3
});

// Ação do botão "Próxima Etapa" - Etapa 3 para Etapa 4
document.getElementById('next-btn-3').addEventListener('click', function() {
    irParaProximaEtapa('step-foto', 'step-video', '30%'); // Vai para Etapa 4
});

// Ação do botão "Próxima Etapa" - Etapa 4 para Etapa 5
document.getElementById('next-btn-4').addEventListener('click', function() {
    irParaProximaEtapa('step-video', 'step-musica', '40%'); // Vai para Etapa 5
});

// Ação do botão "Próxima Etapa" - Etapa 5 para Etapa 6
document.getElementById('next-btn-5').addEventListener('click', function() {
    irParaProximaEtapa('step-musica', 'step-data', '50%'); // Vai para Etapa 6
});

// Ação do botão "Próxima Etapa" - Etapa 6 para Etapa 7
document.getElementById('next-btn-6').addEventListener('click', function() {
    irParaProximaEtapa('step-data', 'step-fundo', '60%'); // Vai para Etapa 7
});

// Ação do botão "Próxima Etapa" - Etapa 7 para Etapa 8
document.getElementById('next-btn-7').addEventListener('click', function() {
    irParaProximaEtapa('step-fundo', 'step-visualizacao', '70%'); // Vai para Etapa 8
});

// Ação do botão "Próxima Etapa" - Etapa 8 para Etapa 9
document.getElementById('next-btn-8').addEventListener('click', function() {
    irParaProximaEtapa('step-visualizacao', 'step-pagamento', '80%'); // Vai para Etapa 9
});

// Ação do botão "Próxima Etapa" - Etapa 9 para Etapa 10
document.getElementById('next-btn-9').addEventListener('click', function() {
    irParaProximaEtapa('step-pagamento', 'step-link', '90%'); // Vai para Etapa 10
});

// Ação do botão "Próxima Etapa" - Etapa 10 para Etapa 11
document.getElementById('next-btn-10').addEventListener('click', function() {
    irParaProximaEtapa('step-link', 'step-qrcode', '100%'); // Vai para Etapa 11
});

// Ação do botão "Próxima Etapa" - Etapa 11 para Etapa Final
document.getElementById('next-btn-11').addEventListener('click', function() {
    irParaProximaEtapa('step-qrcode', 'step-final', '100%'); // Vai para Etapa Final
});

// Ação do botão "Voltar" - Etapa 2 para Etapa 1
document.getElementById('back-btn-1').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-mensagem', 'step-titulo', '0%'); // Volta para Etapa 1
});

// Ação do botão "Voltar" - Etapa 3 para Etapa 2
document.getElementById('back-btn-2').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-foto', 'step-mensagem', '10%'); // Volta para Etapa 2
});

// Ação do botão "Voltar" - Etapa 4 para Etapa 3
document.getElementById('back-btn-3').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-video', 'step-foto', '20%'); // Volta para Etapa 3
});

// Ação do botão "Voltar" - Etapa 5 para Etapa 4
document.getElementById('back-btn-4').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-musica', 'step-video', '30%'); // Volta para Etapa 4
});

// Ação do botão "Voltar" - Etapa 6 para Etapa 5
document.getElementById('back-btn-5').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-data', 'step-musica', '40%'); // Volta para Etapa 5
});

// Ação do botão "Voltar" - Etapa 7 para Etapa 6
document.getElementById('back-btn-6').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-fundo', 'step-data', '50%'); // Volta para Etapa 6
});

// Ação do botão "Voltar" - Etapa 8 para Etapa 7
document.getElementById('back-btn-7').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-visualizacao', 'step-fundo', '60%'); // Volta para Etapa 7
});

// Ação do botão "Voltar" - Etapa 9 para Etapa 8
document.getElementById('back-btn-8').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-pagamento', 'step-visualizacao', '70%'); // Volta para Etapa 8
});

// Ação do botão "Voltar" - Etapa 10 para Etapa 9
document.getElementById('back-btn-9').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-link', 'step-pagamento', '80%'); // Volta para Etapa 9
});

// Ação do botão "Voltar" - Etapa 11 para Etapa 10
document.getElementById('back-btn-10').addEventListener('click', function() {
    voltarParaEtapaAnterior('step-qrcode', 'step-link', '90%'); // Volta para Etapa 10
});
