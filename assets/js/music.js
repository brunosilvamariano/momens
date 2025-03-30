document.addEventListener('DOMContentLoaded', function () {
    function updateMusicPreview() {
        const fileInput = document.getElementById('musica-upload');
        const files = Array.from(fileInput.files);
        const audioPreviewContainer = document.getElementById('audio-preview-container');  // Agora no preview geral
        const audioPlayer = document.getElementById('audio-preview');  // Agora no preview geral
        const audioSource = document.getElementById('audio-preview-source');  // Fonte no preview geral
        const audioFileName = document.getElementById('audio-preview-name');  // Nome do arquivo no preview geral

        if (files.length > 0) {
            audioPreviewContainer.style.display = 'block';
            audioFileName.textContent = `Música selecionada: ${files[0].name}`;

            const fileUrl = URL.createObjectURL(files[0]);
            audioSource.setAttribute('src', fileUrl);
            audioPlayer.load();
        } else {
            audioPreviewContainer.style.display = 'none';
        }
    }

    document.getElementById('musica-upload').addEventListener('change', updateMusicPreview);
});
