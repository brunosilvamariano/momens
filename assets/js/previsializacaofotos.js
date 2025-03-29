document.addEventListener('DOMContentLoaded', function() {
    const maxFileSize = 5 * 1024 * 1024; // Limite de 5MB (em bytes)

    // Atualizar pré-visualização principal (sem botões de exclusão)
    function updateMainPreviewImages() {
        const mainPreviewContainer = document.getElementById('foto-preview-section');
        mainPreviewContainer.innerHTML = ''; // Limpar conteúdo anterior

        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        files.forEach((file) => {
            const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

            if (validExtensions.includes(file.type)) {
                if (file.size > maxFileSize) {
                    alert('Imagem muito grande! O tamanho máximo permitido é 5MB.');
                    return; // Ignorar o arquivo se for maior que o limite
                }

                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.style.maxWidth = '100px';
                    imgElement.style.margin = '5px';
                    imgElement.style.borderRadius = '5px';

                    mainPreviewContainer.appendChild(imgElement); // Adicionar imagem sem botão de exclusão
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Função de atualização da pré-visualização com imagens e botões de exclusão
    function updateImagePreview() {
        const previewContainer = document.getElementById('foto-preview');
        previewContainer.innerHTML = ''; // Limpar conteúdo anterior
        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        let validFiles = 0;

        if (files.length > 8) {
            alert('Você pode enviar no máximo 8 fotos!');
            fileInput.value = ''; // Limpar input
            return;
        }

        files.forEach((file, index) => {
            const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

            if (validExtensions.includes(file.type)) {
                if (file.size > maxFileSize) {
                    alert('Imagem muito grande! O tamanho máximo permitido é 5MB.');
                    return; // Ignorar o arquivo se for maior que o limite
                }

                validFiles++;
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.classList.add('img-container');
                    imgContainer.setAttribute('data-index', index);
                    imgContainer.style.position = 'relative';
                    imgContainer.style.margin = '5px';

                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.style.maxWidth = '100px';
                    imgElement.style.margin = '5px';
                    imgElement.style.borderRadius = '5px';

                    const deleteBtn = document.createElement('button');
                    deleteBtn.innerHTML = '❌';
                    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
                    deleteBtn.style.position = 'absolute';
                    deleteBtn.style.top = '0';
                    deleteBtn.style.right = '0';
                    deleteBtn.addEventListener('click', function () {
                        removeImage(index);
                    });

                    imgContainer.appendChild(imgElement);
                    imgContainer.appendChild(deleteBtn);
                    previewContainer.appendChild(imgContainer);
                };
                reader.readAsDataURL(file);
            }
        });

        if (validFiles > 0) {
            document.getElementById('foto-preview-container').classList.remove('d-none');
        } else {
            document.getElementById('foto-preview-container').classList.add('d-none');
        }

        // Atualizar a pré-visualização geral sem os botões de exclusão
        updateMainPreviewImages();
    }

    // Função para remover uma imagem
    function removeImage(index) {
        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        files.splice(index, 1); // Remove a imagem pelo índice

        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file)); // Atualiza a lista de arquivos no input
        fileInput.files = dataTransfer.files;

        // Atualizar pré-visualizações após remoção
        updateImagePreview();
    }

    // Escutador de eventos para atualizações no input de arquivos
    document.getElementById('foto-upload').addEventListener('change', updateImagePreview);
});
