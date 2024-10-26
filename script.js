// Pilih container untuk partikel
const container = document.querySelector('main');



// Tentukan jumlah partikel yang ingin dibuat
let numParticles = 100;

// Fungsi untuk menghasilkan partikel
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

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  
  if (width < 600) {
    document.body.style.backgroundColor = 'lightblue'; // contoh perubahan
  } else {
    document.body.style.backgroundColor = 'white';
  }
});
