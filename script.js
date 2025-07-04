// Exemplo de funcionalidade para reprodução de áudio
document.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('caminho/para/sua/musica.mp3');
  const playButton = document.querySelector('.play-button');

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = 'Pausar';
    } else {
      audio.pause();
      playButton.textContent = 'Tocar';
    }
  });
});
