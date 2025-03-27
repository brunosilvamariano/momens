document.addEventListener('DOMContentLoaded', function () {
    // Selecionar os elementos das etapas e inputs
    const tituloStep = document.getElementById('titulo-step');
    const mensagemStep = document.getElementById('mensagem-step');
    const dataStep = document.getElementById('data-step');
    const tituloInput = document.getElementById('titulo');
    const mensagemInput = document.getElementById('mensagem');
    const dataInicioInput = document.getElementById('data-inicio');
    const tituloPreview = document.getElementById('titulo-preview');
    const mensagemPreview = document.getElementById('mensagem-conteudo');
    const dataInicioPreview = document.getElementById('data-inicio-preview');
    const progressBar = document.getElementById('progress-bar');

    // Botões
    const btnProximaEtapa = document.getElementById('btn-proxima');
    const btnVoltarMensagem = document.getElementById('btn-voltar-mensagem');
    const btnProximaMensagem = document.getElementById('btn-proxima-mensagem');
    const btnVoltarData = document.getElementById('btn-voltar-data');
    const btnProximaData = document.getElementById('btn-proxima-data');

    // Função para mudar de etapa e atualizar progresso
    function mostrarEtapa(atual, proxima, progresso) {
        atual.style.display = 'none';
        proxima.style.display = 'block';
        progressBar.style.width = `${progresso}%`; // Atualiza a barra de progresso
        progressBar.setAttribute('aria-valuenow', progresso);
    }

    // Navegar entre etapas e atualizar a barra de progresso
    btnProximaEtapa.addEventListener('click', function () {
        mostrarEtapa(tituloStep, mensagemStep, 50); // 50% ao avançar para a mensagem
    });

    btnVoltarMensagem.addEventListener('click', function () {
        mostrarEtapa(mensagemStep, tituloStep, 20); // 20% ao voltar para o título
    });

    btnProximaMensagem.addEventListener('click', function () {
        mostrarEtapa(mensagemStep, dataStep, 75); // 75% ao avançar para a data
    });

    btnVoltarData.addEventListener('click', function () {
        mostrarEtapa(dataStep, mensagemStep, 50); // 50% ao voltar para a mensagem
    });

    btnProximaData.addEventListener('click', function () {
        alert("Você alcançou a última etapa! (A próxima etapa ainda será implementada.)");
        progressBar.style.width = "100%"; // Exemplo: marca 100% ao avançar (final)
        progressBar.setAttribute('aria-valuenow', 100);
    });

    // Função para atualizar o preview do título, mensagem e data
    function atualizarPreview() {
        tituloPreview.textContent = tituloInput.value || 'Seu Título Aparecerá Aqui';
        mensagemPreview.textContent = mensagemInput.value || 'Sua mensagem dedicada aparecerá aqui.';
        mensagemPreviewContainer.style.display = mensagemInput.value ? 'block' : 'none';
        dataInicioPreview.textContent = dataInicioInput.value ? new Date(dataInicioInput.value).toLocaleDateString() : 'Não selecionada';
    }

    // Adicionar eventos de input para atualizar o preview em tempo real
    tituloInput.addEventListener('input', atualizarPreview);
    mensagemInput.addEventListener('input', atualizarPreview);
    dataInicioInput.addEventListener('input', atualizarPreview);

    // Inicializar o preview com valores padrões ao carregar a página
    atualizarPreview();
});
