document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form'); // Acessa o formulário pelo ID

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede que o formulário seja enviado automaticamente

        // Captura os valores dos inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const username = document.getElementById('username').value;
        const favoriteMusic = document.getElementById('FavoriteMusic').value;

        // Cria um objeto com os dados do usuário
        const userData = {
            email,
            password,
            age,
            username,
            favoriteMusic
        };

        // Salva o objeto no Local Storage
        localStorage.setItem('userData', JSON.stringify(userData)); // Converte o objeto para string JSON

        // Feedback opcional para o usuário após registro
        alert('Registro concluído com sucesso!');
    });
});
