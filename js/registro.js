document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os valores dos inputs
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var username = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var favoriteMusicStyle = document.getElementById('favorite-music-style').value;

    // Criando um objeto com os dados do usuário
    var userData = {
        email: email,
        password: password,
        username: username,
        age: age,
        favoriteMusicStyle: favoriteMusicStyle
    };

    // Armazenando os dados no localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Exibindo mensagem de sucesso
    alert('Registro completado com sucesso!');

    // Redirecionando para a página principal
    window.location.href = 'pagina_principal.html'; // Substitua 'pagina_principal.html' pelo caminho correto da sua página inicial
});
