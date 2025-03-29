document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar a pré-visualização das imagens
    function updatePreview() {
        const previewContainer = document.getElementById('foto-preview');
        previewContainer.innerHTML = ''; // Limpar conteúdo anterior
        const mainPreviewContainer = document.getElementById('foto-preview-section');
        mainPreviewContainer.innerHTML = ''; // Limpar conteúdo anterior

        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        if (files.length > 8) {
            alert('Você pode enviar no máximo 8 fotos!');
            fileInput.value = ''; // Limpar input
            return;
        }

        files.forEach((file, index) => {
            const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

            if (validExtensions.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.classList.add('img-container');
                    imgContainer.setAttribute('data-index', index);

                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;

                    const deleteBtn = document.createElement('button');
                    deleteBtn.innerHTML = '❌';
                    deleteBtn.classList.add('btn', 'btn-danger');
                    deleteBtn.addEventListener('click', function () {
                        removeImage(index);
                    });

                    imgContainer.appendChild(imgElement);
                    imgContainer.appendChild(deleteBtn);
                    previewContainer.appendChild(imgContainer);

                    // Atualiza a pré-visualização principal
                    const mainImgElement = document.createElement('img');
                    mainImgElement.src = e.target.result;
                    mainImgElement.style.maxWidth = '100px';
                    mainImgElement.style.margin = '5px';
                    mainImgElement.style.borderRadius = '5px';

                    mainPreviewContainer.appendChild(mainImgElement);
                };
                reader.readAsDataURL(file);
            }
        });

        // Controlar a visibilidade do container de pré-visualização
        if (files.length > 0) {
            document.getElementById('foto-preview-container').classList.remove('d-none');
        } else {
            document.getElementById('foto-preview-container').classList.add('d-none');
        }
    }

    // Função para remover uma imagem com animação suave
    function removeImage(index) {
        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        files.splice(index, 1); // Remove a imagem pelo índice

        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file)); // Atualiza a lista de arquivos no input
        fileInput.files = dataTransfer.files;

        // Animar a remoção da imagem
        const imgContainer = document.querySelector(`.img-container[data-index="${index}"]`);
        imgContainer.style.opacity = 0;
        setTimeout(() => {
            imgContainer.remove();
            updatePreview(); // Atualiza as pré-visualizações após remoção
        }, 300); // Tempo para o fade-out
    }

    // Função para atualizar a pré-visualização do texto
    function updateTextPreview() {
        const textInput = document.getElementById('mensagem');
        const previewText = document.getElementById('mensagem-preview');
        
        previewText.innerHTML = textInput.value.replace(/\n/g, '<br>'); // Substitui as quebras de linha por <br>
    }

    // Escutadores de eventos para atualizar a pré-visualização
    document.getElementById('foto-upload').addEventListener('change', updatePreview);
    document.getElementById('mensagem').addEventListener('input', updateTextPreview);
});
