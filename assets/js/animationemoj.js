document.getElementById("fundo-selecao").addEventListener("change", function() {
    const container = document.querySelector(".preview-container");
    container.classList.remove("ceu-brilhante", "chuva-cometas", "vortex-cores", "aurora", "nuvens", "nenhuma");

    const chuvaEmojisContainer = document.getElementById("chuva-emojis-container");
    chuvaEmojisContainer.innerHTML = ""; // Limpa a animação de emojis anterior
    chuvaEmojisContainer.style.display = "none"; // Esconde a chuva de emojis inicialmente

    const opcoes = {
        coracoes: ["❤️", "💖", "💞", "💕", "💘"],
        estrelas: ["✨", "🌟", "💫", "⭐"],
        flores: ["🌸", "🌺", "🌻", "🌼"],
        borboletas: ["🦋", "💙", "💜"],
        baloes: ["🎈", "🎊", "🎉"],
        notas: ["🎶", "🎵", "🎼"],
        mix: ["😍", "🎶", "✨", "💖", "🌸", "🦋"]
    };

    const escolha = this.value;
    
    // Aplique a animação de fundo se selecionado
    if (["ceu-brilhante", "chuva-cometas", "vortex-cores", "aurora", "nuvens"].includes(escolha)) {
        container.classList.add(escolha);
    }
    
    // Se a opção escolhida for um conjunto de emojis, mostre a chuva de emojis
    if (opcoes[escolha]) {
        chuvaEmojisContainer.style.display = "block"; // Mostra a chuva
        gerarChuva(chuvaEmojisContainer, opcoes[escolha]);
    }
    
    // Se a opção escolhida for 'nenhuma', remova todas as animações
    if (escolha === "nenhuma") {
        container.classList.remove("ceu-brilhante", "chuva-cometas", "vortex-cores", "aurora", "nuvens");
        chuvaEmojisContainer.style.display = "none"; // Esconde a chuva de emojis
    }
});

function gerarChuva(container, emojis) {
    setInterval(() => {
        const emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.classList.add("emoji");

        let previewHeight = container.offsetHeight;
        let previewWidth = container.offsetWidth;

        // Posição aleatória horizontal e opacidade
        emoji.style.left = Math.random() * previewWidth + "px"; // Posição aleatória na horizontal
        emoji.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Tempo de animação aleatório (entre 3s e 5s)
        emoji.style.fontSize = Math.random() * 10 + 25 + "px"; // Tamanho aleatório (25px a 35px)
        emoji.style.opacity = Math.random() * 0.5 + 0.3; // Opacidade aleatória (0.3 a 0.8)

        container.appendChild(emoji);

        // Remove o emoji após o final da animação
        setTimeout(() => {
            emoji.remove();
        }, parseFloat(emoji.style.animationDuration) * 1000); // Remove com base na duração da animação
    }, 300); // A cada 300ms um novo emoji é gerado
}
