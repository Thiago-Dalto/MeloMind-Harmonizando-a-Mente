// script.js
let currentTrack = 0;
let tracks = [];

function loadMusic() {
    fetch('teste.json')
        .then(response => response.json())
        .then(data => {
            tracks = data;
            playTrack();
        });
}

function playTrack() {
    if (tracks.length > 0) {
        const player = document.getElementById('audioPlayer');
        const trackTitle = document.getElementById('trackTitle');
        player.src = tracks[currentTrack].file;
        trackTitle.textContent = `Tocando: ${tracks[currentTrack].title}`;
        player.play();
    }
}

function nextTrack() {
    if (currentTrack < tracks.length - 1) {
        currentTrack++;
        playTrack();
    } else {
        currentTrack = 0;  // Voltar ao início da lista
        playTrack();
    }
}

function previousTrack() {
    if (currentTrack > 0) {
        currentTrack--;
        playTrack();
    } else {
        currentTrack = tracks.length - 1;  // Ir para a última faixa
        playTrack();
    }
}

window.onload = loadMusic;