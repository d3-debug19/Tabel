// Mengambil elemen form berdasarkan ID
const form = document.getElementById('orderForm');

// Menunggu form dikirim (submit)
form.addEventListener('submit', function(event) {
    // Mencegah halaman refresh otomatis
    event.preventDefault();
    
    // Mengambil data dari input nama
    const nama = document.getElementById('nama').value;
    const layanan = document.getElementById('layanan').value;

    // Memunculkan pesan pop-up (Alert)
    alert('Halo ' + nama + '! Terima kasih sudah memesan ' + layanan + '. Pesanan Anda sedang kami proses.');
    form.reset();
});

const themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', function() {
    // Memberi/menghapus class 'dark-mode' pada body
    document.body.classList.toggle('dark-mode');

    // Mengubah tulisan tombol
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.innerText = "Mode Terang ☀️";
    } else {
        themeBtn.innerText = "Mode Gelap 🌙";
    }
});

