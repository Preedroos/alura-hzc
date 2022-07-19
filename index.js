const linkInicio = document.querySelector('.link-inicio');
const linkVideos = document.querySelector('.link-videos');
const linkPicos = document.querySelector('.link-picos');
const linkIntegrantes = document.getElementById('.link-integrantes');
const linkCamisas = document.querySelector('.link-camisas');
const linkPinturas = document.querySelector('.link-pinturas');

iconMenu.addEventListener('click', () => {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('active');
});

function hintLink() {
  this.classList.toggle('hint');
}

linkInicio.addEventListener('focus', hintLink());
