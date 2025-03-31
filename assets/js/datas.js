// Função para calcular a diferença entre as datas e atualizar os cards
function atualizarDataPreview(dataDeInicio) {
    const dataAtual = new Date();
    const dataInicio = new Date(dataDeInicio);

    const diffInMs = dataAtual - dataInicio; // Diferença em milissegundos

    // Calculando os componentes de tempo com base na diferença total
    const anos = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365)); // Anos
    const meses = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)); // Meses
    const dias = Math.floor((diffInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)); // Dias

    // Calcular total de horas, minutos e segundos
    const totalHoras = Math.floor(diffInMs / (1000 * 60 * 60)); // Total de horas
    const totalMinutos = Math.floor(diffInMs / (1000 * 60)); // Total de minutos
    const totalSegundos = Math.floor(diffInMs / 1000); // Total de segundos

    // Atualizando os cards com os valores
    document.getElementById('anos-preview').textContent = anos.toString().padStart(2, '0');
    document.getElementById('meses-preview').textContent = meses.toString().padStart(2, '0');
    document.getElementById('dias-preview').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas-preview').textContent = totalHoras.toString().padStart(3, '0');
    document.getElementById('minutos-preview').textContent = totalMinutos.toString().padStart(3, '0');
    document.getElementById('segundos-preview').textContent = totalSegundos.toString().padStart(3, '0');

    // Corrigindo a exibição da data completa (não será afetada pelo fuso horário)
    const dataInicioFormatada = new Date(dataInicio);
    const dataCompleta = `Desde ${dataInicioFormatada.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    document.getElementById('data-completa-texto').textContent = dataCompleta;

    // Tornando a seção de pré-visualização visível
    document.getElementById('data-preview-container').style.display = 'flex';

    // Tornando os cards de data visíveis
    const dataCards = document.querySelectorAll('.data-card');
    dataCards.forEach(card => {
        card.style.display = 'block';
    });

    // Exibindo o título "Compartilhando momentos há..."
    document.getElementById('titulo-compartilhando').style.display = 'block';

    // Tornando a exibição da data completa visível
    document.getElementById('data-completa').style.display = 'block';
}

// Função para verificar se a data foi escolhida
function verificarDataSelecionada() {
    const dataSelecionada = document.getElementById('data-selecao').value;
    if (dataSelecionada) {
        atualizarDataPreview(dataSelecionada); // Atualiza com a data escolhida
    } else {
        // Esconde a pré-visualização se não houver data selecionada
        document.getElementById('data-preview-container').style.display = 'none';
        document.getElementById('data-completa').style.display = 'none';
        document.getElementById('titulo-compartilhando').style.display = 'none'; // Esconde o título
    }
}

// Evento de alteração da data
document.getElementById('data-selecao').addEventListener('change', function () {
    verificarDataSelecionada(); // Verifica e atualiza a pré-visualização
});

// Inicializa com a verificação de data ao carregar a página
window.onload = verificarDataSelecionada;
