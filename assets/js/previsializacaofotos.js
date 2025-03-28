// Função para adicionar as imagens à pré-visualização
function updatePreviewImages() {
    const previewContainer = document.getElementById('foto-preview-section');
    previewContainer.innerHTML = ''; // Limpar qualquer conteúdo anterior
    const fileInput = document.getElementById('foto-upload');
    const files = Array.from(fileInput.files);

    files.forEach((file) => {
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        
        if (validExtensions.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.style.maxWidth = '100px';
                imgElement.style.margin = '5px';
                imgElement.style.borderRadius = '5px';
                
                // Adiciona a imagem à seção de pré-visualização
                previewContainer.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Adiciona um evento para chamar a função quando as imagens forem alteradas
document.getElementById('foto-upload').addEventListener('change', function () {
    updatePreviewImages();
});
