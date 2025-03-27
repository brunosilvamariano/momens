// Função para calcular a diferença entre a data escolhida e a data atual
function calcularDiferencaData() {
    const dataEscolhida = document.getElementById("data").value;
    const dataSelecionada = new Date(dataEscolhida);
    const dataAtual = new Date();

    // Calcular a diferença em milissegundos
    const diff = dataAtual - dataSelecionada;

    // Calcular anos, meses, dias
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // Atualizar a visualização com a data escolhida
    document.getElementById("dia-mes-ano").textContent = dataEscolhida.split("-").reverse().join("/"); // Formata DD/MM/AAAA
    document.getElementById("dia-preview").textContent = dias < 10 ? `0${dias}` : dias;
    document.getElementById("mes-preview").textContent = meses < 10 ? `0${meses}` : meses;
    document.getElementById("ano-preview").textContent = anos < 10 ? `0${anos}` : anos;

    // Atualizar a hora, minuto e segundo
    setInterval(() => {
        const now = new Date();
        const hora = now.getHours().toString().padStart(2, "0");
        const minuto = now.getMinutes().toString().padStart(2, "0");
        const segundo = now.getSeconds().toString().padStart(2, "0");

        document.getElementById("hora-card").textContent = hora;
        document.getElementById("minuto-card").textContent = minuto;
        document.getElementById("segundo-card").textContent = segundo;
    }, 1000); // Atualiza a cada segundo
}

// Adicionar o evento no campo de data para chamar a função quando o cliente escolher uma data
document.getElementById("data").addEventListener("input", calcularDiferencaData);
