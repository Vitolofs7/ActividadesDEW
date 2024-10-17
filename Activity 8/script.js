const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const playButton = document.querySelector('.play i');
const playlist = document.querySelectorAll('.playlist li');
let currentTrack = 0;

// Cargar y reproducir la pista seleccionada
function loadTrack(index) {
  const track = playlist[index];
  audioSource.src = track.getAttribute('data-src');
  audioPlayer.load();
  audioPlayer.play();
  updatePlaylistIcons(index);
}

// Actualizar los íconos de la lista para mostrar la pista en reproducción
function updatePlaylistIcons(index) {
  playlist.forEach((item, i) => {
    const icon = item.querySelector('i');
    if (i === index) {
      icon.classList.remove('fa-music');
      icon.classList.add('fa-play');
      item.classList.add('playing');
    } else {
      icon.classList.remove('fa-play');
      icon.classList.add('fa-music');
      item.classList.remove('playing');
    }
  });
}

// Reproducir o pausar la pista
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.remove('fa-play');
    playButton.classList.add('fa-pause');
  } else {
    audioPlayer.pause();
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
  }
}

// Reproducir la siguiente pista
function playNextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
}

// Reproducir la pista anterior
function playPreviousTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
}

// Manejar clic en la lista de reproducción
playlist.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentTrack = index;
    loadTrack(currentTrack);
  });
});

// Botón de reproducción/pausa
document.querySelector('.play').addEventListener('click', togglePlayPause);

// Botón de avanzar
document.querySelector('.forward').addEventListener('click', playNextTrack);

// Botón de retroceder
document.querySelector('.backward').addEventListener('click', playPreviousTrack);

// Reproducir automáticamente la siguiente pista cuando termine la actual
audioPlayer.addEventListener('ended', playNextTrack);



/* 

CODIGO DEL PROFE

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Activity 8: the audio tag + events</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
      .controls div{
        float: left;
        margin: 10px;
        border: 3px solid #000;
        font-size: 2em;
        text-align: center;
        width: 50px;
        border-radius: 5px;
      }
      .hidden{
        display: none;
      }
    </style>
  </head>
  <body>
    <h1>Activity 8: the audio tag + events</h1>
    <p>This is a music player with a playlist</p>
    <ul>
      <li>Add a play icon to the item in the playlist that is currently playing.</li>
      <li>Add controls to <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/audio">audio tag</a>: play/pause, go back, go forward.</li>
      <li>When 1 audio ends the following one must estart playing automatically</li>
    </ul>

    <ol id="playlist">
      <li>music1.mp3 <i class="fa fa-play"></i></li>
      <li>music2.mp3 <i class="fa fa-play hidden"></i></li>
      <li>music3.mp3 <i class="fa fa-play hidden"></i></li>
    </ol>
    <audio controls id="audioPlayer" src="">
     Your browser does not support the audio tag.
    </audio>
    <div class="controls">
      <div class="play"><i class="fa fa-play"></i></div>
      <div class="backward"><i class="fa fa-step-backward"></i></div>
      <div class="forward"><i class="fa fa-step-forward"></i></div>
    </div>
    <script>
      const songs = ["brasil.ogg", "colombia.ogg", "espana.ogg"];
      const player = document.getElementById('audioPlayer');
      const play = document.querySelector('.play');
      const backward = document.querySelector('.backward');
      const forward = document.querySelector('.forward');

      let currentSong = 0;

      player.src= songs[currentSong];

      play.onclick =  function(e){
        if(player.paused ){
          player.play();
          e.target.classList.replace('fa-play', 'fa-pause');
        } else {
          player.pause();
          e.target.classList.replace('fa-pause', 'fa-play');
        } 
      }

      function playSong(songNumber = 0, forcePlay = false){
        const paused = player.paused;
        player.src= songs[songNumber];
        (!paused || forcePlay) && player.play();
        
        const playIcons = document.querySelectorAll('#playlist li i.fa-play');

        playIcons.forEach(playIcon => playIcon.classList.add('hidden'));
        playIcons[songNumber].classList.remove('hidden');
      }

      backward.onclick = function(){
        currentSong--;
        if(currentSong === -1){
          currentSong = songs.length - 1;
        }
        playSong(currentSong);
      }

      forward.onclick = function(){
        currentSong = ++currentSong % songs.length;
        playSong(currentSong);
      }

      player.onended = function(){
        currentSong = ++currentSong % songs.length;
        playSong(currentSong, true);
      }

    </script>
  </body>
</html>




*/