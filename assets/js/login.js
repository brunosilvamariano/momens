// Ao clicar no botão de login, abrir o modal
document.getElementById('login-toggle').addEventListener('click', function() {
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
});