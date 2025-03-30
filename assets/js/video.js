document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar a pré-visualização do vídeo
    function updateVideoPreview() {
        const videoInput = document.getElementById('video-upload');
        const videoPreviewSection = document.getElementById('video-preview-section');
        const videoElement = document.getElementById('video-preview');
        const videoSource = document.getElementById('video-source');

        const file = videoInput.files[0]; // Pega o primeiro arquivo do input
        if (file && file.type.startsWith('video/')) { // Verifica se é um arquivo de vídeo
            const videoURL = URL.createObjectURL(file);
            videoSource.src = videoURL;
            videoElement.load(); // Carrega a nova fonte no vídeo

            // Exibe a seção de pré-visualização do vídeo
            videoPreviewSection.style.display = 'block';
        } else {
            // Se não for um vídeo, esconda a pré-visualização
            videoPreviewSection.style.display = 'none';
        }
    }

    // Atualiza a pré-visualização quando o vídeo for selecionado
    document.getElementById('video-upload').addEventListener('change', updateVideoPreview);
});
