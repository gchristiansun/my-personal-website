
const container = document.querySelector('main');

const numParticles = 300;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Set posisi acak untuk setiap partikel
  const x = Math.random() * 100; // 0-100% dari lebar layar
  const y = Math.random() * 100; // 0-100% dari tinggi layar
  particle.style.left = `${x}vw`;
  particle.style.top = `${y}vh`;

  // Ubah durasi dan delay animasi secara acak agar tidak semuanya bergerak serempak
  const animationDuration = (Math.random() * 5 + 3).toFixed(2); // antara 3s - 8s
  const animationDelay = (Math.random() * 5).toFixed(2); // antara 0s - 5s
  particle.style.animationDuration = `${animationDuration}s`;
  particle.style.animationDelay = `${animationDelay}s`;

  // Tambahkan partikel ke dalam container
  container.appendChild(particle);
}

const buttonmenu = document.querySelector('.icon-nav');
const menu = document.querySelector('nav ul');
const closemenu = document.querySelector('.icon-close');
const overlayBackground = document.querySelector('.overlay')
buttonmenu.addEventListener('click', () => {
  menu.style.display = 'block'
  overlayBackground.style.display = 'block'
  setTimeout(() => {
    menu.classList.add('show')
  }, 10)
});
closemenu.addEventListener('click', () => {
  menu.classList.remove('show')
  overlayBackground.style.display = 'none'
  setTimeout(() => {
    menu.style.display = 'none'
  }, 800)
})
