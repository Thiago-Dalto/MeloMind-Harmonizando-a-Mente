document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (email === 'tmonteirodalto@gmail.com' && password === 'thiago123') {
        
        window.location.href = 'index.html';
    } 
    else {
        
        errorMessage.textContent = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});
