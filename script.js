AOS.init({
  duration: 800, // Durasi animasi
  once: true, // Animasi hanya terjadi sekali
});

const container = document.querySelector('main');
const section = document.querySelector('.container-particle-section')

const numParticles = 200;
const numParticles2 = 600;

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

for (let i = 0; i < numParticles2; i++) {
  const particle2 = document.createElement('div');
  particle2.classList.add('particle');

  const containerHeight = container.offsetHeight;
  const containerWidth = container.offsetWidth;

  // Set posisi acak untuk setiap partikel
  const p = Math.random() * 100; // 0-100% dari lebar konten
  const q = Math.random() * 100; // 0-100% dari tinggi konten
  particle2.style.left = `${p}%`;
  particle2.style.top = `${q}%`;

  // Ubah durasi dan delay animasi secara acak agar tidak semuanya bergerak serempak
  const animationDuration = (Math.random() * 5 + 3).toFixed(2); // antara 3s - 8s
  const animationDelay = (Math.random() * 5).toFixed(2); // antara 0s - 5s
  particle2.style.animationDuration = `${animationDuration}s`;
  particle2.style.animationDelay = `${animationDelay}s`;

  // Tambahkan partikel ke dalam container
  section.appendChild(particle2);
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

const formalForm = document.querySelector('.form-formal');
const anonimForm = document.querySelector('.form-anonim');
const buttonSwitch = document.querySelector('.button-next-form');
buttonSwitch.addEventListener('click', () => {
  if (formalForm.style.display !== 'none') {
    formalForm.style.display = 'none';
    anonimForm.style.display = 'block';
  } else {
    formalForm.style.display = 'block';
    anonimForm.style.display = 'none';
  }
})

const leftArrow = document.getElementById('left-arrow');
const sideBar = document.querySelector('.card-jurnal');
const jurnalButton = document.querySelector('.button-sidebar');
jurnalButton.addEventListener('click', () => {
  sideBar.style.transform = 'translateX(0%)';
  jurnalButton.style.opacity = '0'
})
leftArrow.addEventListener('click', () => {
  sideBar.style.transform = 'translateX(-100%)';
  jurnalButton.style.opacity = '1'
})



// const navLinks = document.querySelectorAll('nav ul li a')
// function setActiveLink() {
//   const activePage = window.location.hash;
//   navLinks.forEach(link => {
//     if (link.hash === activePage) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('hashchange', setActiveLink);
// setActiveLink()

// document.querySelectorAll('.container-particle-section *').forEach((element, index) => {
//   element.setAttribute('data-aos', 'fade-up'); // Tambahkan animasi fade-up
//   element.setAttribute('data-aos-delay', index * 5); // Tambahkan delay berdasarkan urutan
// });
