document.getElementById('fetchButton').addEventListener('click', () => {
    // Alamat backend akan diakses melalui IP VM / localhost
    // Asumsi backend berjalan di port 5000, dan akan di-map ke port 8080 atau 5000 di host
    // Untuk testing lokal, backend mungkin di http://localhost:5000
    // Untuk deployment, ganti dengan IP/Domain VPS Anda
    const backendUrl = 'http://192.168.56.101:5000/api/message'; // <-- Akan diakses dari browser, bukan dari container lain

    fetch(backendUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('messageDisplay').textContent = data.message;
        })
        .catch(error => {
            console.error('Error fetching message:', error);
            document.getElementById('messageDisplay').textContent = 'Gagal mendapatkan pesan dari backend. Cek konsol browser.';
        });
});