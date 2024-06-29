document.addEventListener("DOMContentLoaded", function() {
  const przyciskwelcomescreen = document.querySelector('.welcome-screen button');
  const welcumskrin = document.querySelector('.welcome-screen');
  const ałdio = new Audio('assets/sounds/sound.mp3');
  const PrzyciskSzukajaka = document.getElementById('search-button');
  const SzukajkaWpisywacz = document.getElementById('search-input');

  if (localStorage.getItem('wcisnalPrzyciskHihihoho') === 'true') {
    welcumskrin.style.display = 'none';
  }

  przyciskwelcomescreen.addEventListener('click', function() {
    welcumskrin.style.display = 'none';
    localStorage.setItem('wcisnalPrzyciskHihihoho', 'true');
    ałdio.play();
  });

  PrzyciskSzukajaka.addEventListener('click', function() {
    const query = SzukajkaWpisywacz.value;
    if (query) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = googleSearchUrl;
    }
  });

  SzukajkaWpisywacz.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const query = SzukajkaWpisywacz.value;
      if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchUrl;
      }
    }
  });
});
