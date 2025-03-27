document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão
    alert('Formulário finalizado com sucesso!');
    this.submit(); // Envia o formulário após a mensagem
});
