document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar a pré-visualização do vídeo
    function updateVideoPreview() {
        const videoInput = document.getElementById('video-upload');
        const videoPreviewContainer = document.getElementById('video-preview-container');
        const videoElement = document.getElementById('video-preview');
        const videoSource = document.getElementById('video-source');

        const file = videoInput.files[0]; // Pega o primeiro arquivo do input
        if (file && file.type.startsWith('video/')) { // Verifica se é um arquivo de vídeo
            const videoURL = URL.createObjectURL(file);
            videoSource.src = videoURL;
            videoElement.load(); // Carrega a nova fonte no vídeo

            // Exibe a seção de pré-visualização do vídeo
            videoPreviewContainer.style.display = 'block';
        } else {
            // Se não for um vídeo, esconda a pré-visualização
            videoPreviewContainer.style.display = 'none';
        }
    }

    // Função para controle dos botões de navegação
    document.getElementById('back-btn-3').addEventListener('click', function () {
        document.getElementById('step-video').style.display = 'none';
        // Aqui você pode mostrar a etapa anterior, se necessário
    });

    document.getElementById('next-btn-4').addEventListener('click', function () {
        // A lógica para avançar para a próxima etapa
    });

    // Atualiza a pré-visualização quando o vídeo for selecionado
    document.getElementById('video-upload').addEventListener('change', updateVideoPreview);
});
