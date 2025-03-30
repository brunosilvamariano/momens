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

        // Criar o carrossel
        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('carousel', 'slide');
        carouselContainer.setAttribute('id', 'carouselExampleControls'); // Adicionando ID para as setas funcionarem
        carouselContainer.setAttribute('data-bs-ride', 'carousel'); // Ativa o carrossel automático
        carouselContainer.setAttribute('data-bs-interval', '3000'); // Altere o valor para a velocidade que deseja (3000ms = 3s)

        // Criar a lista de imagens (para o carrossel)
        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');

        files.forEach((file, index) => {
            const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

            if (validExtensions.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgContainer = document.createElement('div');
                    imgContainer.classList.add('carousel-item');
                    if (index === 0) {
                        imgContainer.classList.add('active'); // A primeira imagem fica ativa
                    }

                    // Criar o item do carrossel
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.classList.add('d-block', 'w-100');
                    imgElement.style.height = '400px'; // Ajusta a altura do carrossel
                    imgElement.style.objectFit = 'cover'; // Garante que a imagem ocupe o espaço sem distorcer

                    imgContainer.appendChild(imgElement);
                    carouselInner.appendChild(imgContainer);
                };
                reader.readAsDataURL(file);
            }
        });

        // Adicionar o carrossel à seção de pré-visualização
        carouselContainer.appendChild(carouselInner);

        // Botões de navegação do carrossel (setas)
        const carouselControlsPrev = document.createElement('button');
        carouselControlsPrev.classList.add('carousel-control-prev');
        carouselControlsPrev.setAttribute('type', 'button');
        carouselControlsPrev.setAttribute('data-bs-target', '#carouselExampleControls'); // Referência ao ID correto
        carouselControlsPrev.setAttribute('data-bs-slide', 'prev');
        carouselControlsPrev.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
        carouselContainer.appendChild(carouselControlsPrev);

        const carouselControlsNext = document.createElement('button');
        carouselControlsNext.classList.add('carousel-control-next');
        carouselControlsNext.setAttribute('type', 'button');
        carouselControlsNext.setAttribute('data-bs-target', '#carouselExampleControls'); // Referência ao ID correto
        carouselControlsNext.setAttribute('data-bs-slide', 'next');
        carouselControlsNext.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
        carouselContainer.appendChild(carouselControlsNext);

        // Adiciona o carrossel à visualização principal
        mainPreviewContainer.appendChild(carouselContainer);

        // Inicializar o carrossel após inserção de imagens (isso garante que funcione)
        const carousel = new bootstrap.Carousel(carouselContainer, {
            interval: 3000, // Define o tempo de intervalo (3 segundos)
            ride: 'carousel' // Inicia o carrossel automaticamente
        });

        // Controlar a visibilidade do container de pré-visualização
        if (files.length > 0) {
            document.getElementById('foto-preview-container').classList.remove('d-none');
        } else {
            document.getElementById('foto-preview-container').classList.add('d-none');
        }
    }

    // Função para remover uma imagem
    function removeImage(index) {
        const fileInput = document.getElementById('foto-upload');
        const files = Array.from(fileInput.files);

        files.splice(index, 1); // Remove a imagem pelo índice

        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file)); // Atualiza a lista de arquivos no input
        fileInput.files = dataTransfer.files;

        updatePreview(); // Atualiza as pré-visualizações após remoção
    }

    // Função para atualizar a pré-visualização do texto
    function updateTextPreview() {
        const textInput = document.getElementById('mensagem');
        const previewText = document.getElementById('mensagem-preview');
        
        // Atualiza a pré-visualização com a mensagem
        previewText.innerHTML = textInput.value.replace(/\n/g, '<br>'); // Substitui as quebras de linha por <br>
    }

    // Escutadores de eventos para atualizar a pré-visualização
    document.getElementById('foto-upload').addEventListener('change', updatePreview);
    document.getElementById('mensagem').addEventListener('input', updateTextPreview);
});
