const token = 'YOUR_ACCESS_TOKEN'; // Você obterá isso via OAuth
const trackNameElement = document.getElementById('trackName');

function play() {
    fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: { 'Authorization': 'Bearer ' + token }
    });
}

function pause() {
    fetch('https://api.spotify.com/v1/me/player/pause', {
        method: 'PUT',
        headers: { 'Authorization': 'Bearer ' + token }
    });
}
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    console.log('Feedback recebido:', feedback);
    // Aqui você pode adicionar código para enviar o feedback ao servidor
    // Limpa o campo de input após o envio
    document.getElementById('feedbackInput').value = '';
    alert('Obrigado pelo seu feedback!');
});
