// script.js
let currentTrack = 0;
let tracks = {};

function loadMusic() {
    fetch('msc.json')
        .then(response => response.json())
        .then(data => {
            tracks = data;
            playTrack(currentTrack);
        });
}

function playTrack(index) {
    const track = tracks[index].musica;
    const player = document.getElementById('audioPlayer');
    const albumCover = document.getElementById('albumCover');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');
    const albumTitle = document.getElementById('albumTitle');

    player.src = track.mp3;
    albumCover.src = track.album.imagem;
    trackTitle.textContent = track.nome;
    trackArtist.textContent = track.artista;
    albumTitle.textContent = track.album.titulo;

    player.play();
}

function nextTrack() {
    currentTrack++;
    if (currentTrack >= Object.keys(tracks).length) {
        currentTrack = 0; // Loop back to first track
    }
    playTrack(currentTrack);
}

function previousTrack() {
    currentTrack--;
    if (currentTrack < 0) {
        currentTrack = Object.keys(tracks).length - 1; // Loop to last track
    }}