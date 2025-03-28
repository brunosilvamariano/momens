document.getElementById('foto-upload').addEventListener('change', function (event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('foto-preview');
    const previewSection = document.getElementById('foto-preview-container');
    previewContainer.innerHTML = ''; // Limpar qualquer conteúdo anterior
    let validFiles = 0;
    let fileArray = Array.from(files);

    // Limitar a 8 arquivos
    if (fileArray.length > 8) {
        alert('Você pode enviar no máximo 8 fotos!');
        event.target.value = ''; // Limpar o input
        return;
    }

    // Limitar e mostrar apenas as imagens válidas
    fileArray.forEach((file, index) => {
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        
        if (validExtensions.includes(file.type)) {
            validFiles++;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container');
                imgContainer.setAttribute('data-index', index); // Atribui um índice para identificar a imagem
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
        } else {
            alert('Por favor, selecione apenas imagens válidas (JPG, JPEG, PNG ou GIF).');
        }
    });

    // Exibir a seção de pré-visualização se houver imagens
    if (validFiles > 0) {
        previewSection.classList.remove('d-none');
    } else {
        previewSection.classList.add('d-none');
    }
});

function removeImage(index) {
    const previewContainer = document.getElementById('foto-preview');
    const imageContainers = document.querySelectorAll('.img-container');

    // Remove a imagem com base no índice
    imageContainers.forEach(container => {
        if (container.getAttribute('data-index') == index) {
            container.remove();
        }
    });

    // Limpar o arquivo removido da lista
    const fileInput = document.getElementById('foto-upload');
    const files = Array.from(fileInput.files);
    files.splice(index, 1); // Remove o arquivo da lista
    const dataTransfer = new DataTransfer();
    files.forEach(file => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;

    // Atualiza a pré-visualização para refletir a remoção
    if (fileInput.files.length === 0) {
        document.getElementById('foto-preview-container').classList.add('d-none');
    }
}
