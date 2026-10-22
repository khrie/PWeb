# LibraryReg - Aplikasi Pendaftaran Anggota Perpustakaan
Tugas ETS Pemrograman Web

---

## 1. Deskripsi dan Ruang Lingkup Pekerjaan

### Deskripsi Sistem
LibraryReg adalah aplikasi web sederhana untuk pendaftaran dan pendataan anggota perpustakaan kampus secara online. Aplikasi ini dibuat untuk menggantikan sistem pendaftaran manual yang sebelumnya menggunakan formulir kertas, sehingga proses pendaftaran menjadi lebih cepat, data tersimpan rapi, dan pencarian data anggota lebih mudah dilakukan.

### Ruang Lingkup Pekerjaan
- Membuat halaman utama (landing page) yang berisi informasi perpustakaan, layanan, keunggulan, dan statistik koleksi.
- Membuat halaman formulir pendaftaran anggota online (register).
- Membuat halaman login akun.
- Membuat halaman pengelolaan data anggota (tabel data, pencarian nama/NIM, edit data, dan hapus data).
- Menyimpan data sementara di browser menggunakan `localStorage`.
- Menggunakan HTML5 semantik, CSS murni, dan JavaScript tanpa framework external.

---

## 2. Rancangan Halaman dan Struktur Menu

### Struktur Menu Navigasi
Website memiliki 4 menu navigasi utama yang seragam di setiap halaman:
- **Beranda (`index.html`)**: Halaman utama informasi perpustakaan.
- **Login (`pages/login.html`)**: Halaman masuk akun pengguna.
- **Register (`pages/register.html`)**: Halaman pendaftaran anggota baru.
- **Anggota (`pages/anggota.html`)**: Halaman daftar dan manajemen data anggota.

Struktur folder proyek:
```text
ets/
├── index.html              -> Halaman utama (landing page)
├── README.md               -> Dokumentasi jawaban soal
├── soal.md                 -> Soal tugas ETS
├── css/
│   └── style.css           -> File CSS tata letak dan tampilan
├── js/
│   └── app.js              -> File JavaScript logika dan interaksi data
└── pages/
    ├── anggota.html        -> Halaman daftar dan kelola data anggota
    ├── login.html          -> Halaman login akun
    └── register.html       -> Halaman formulir pendaftaran anggota
```

### Rancangan Setiap Halaman
1. **Halaman Utama (`index.html`)**: Berisi navbar, pengenalan singkat perpustakaan (hero section), 4 kotak statistik koleksi, penjelasan layanan dan fasilitas, tombol ajakan daftar, serta footer kontak dan jam operasional.
2. **Halaman Login (`pages/login.html`)**: Formulir login sederhana dengan input email, password, dan checkbox ingat saya.
3. **Halaman Register (`pages/register.html`)**: Formulir pendaftaran anggota dengan input nama lengkap, NIM/NIP, jenis keanggotaan (dropdown), program studi, alamat, nomor telepon, email, dan password.
4. **Halaman Anggota (`pages/anggota.html`)**: Halaman pengelolaan data yang memuat tabel daftar anggota dengan fitur pencarian nama atau NIM/NIP, edit data anggota, dan tombol hapus data (pendaftaran anggota baru dilakukan terpusat melalui halaman Register).

---

## 3. Desain UI Landing Page

Halaman landing page (`index.html`) dirancang sederhana, rapi, dan mudah dibaca:
- **Header & Navbar**: Berisi nama website "LibraryReg" di sisi kiri dan menu navigasi (Beranda, Login, Register, Anggota) di sisi kanan dengan efek garis bawah (*underline*) saat aktif atau di-hover.
- **Hero Section**: Kotak pengantar berisi judul selamat datang dan deskripsi singkat tujuan aplikasi.
- **Statistik Koleksi & Anggota**: Menampilkan 4 kotak ringkas berisi angka koleksi buku (45.000+), anggota aktif (3.200+), jurnal digital (2.500+), dan layanan online (100%).
- **Layanan dan Keunggulan**: Menggunakan tata letak 2 kolom sederhana berbasis Flexbox yang menjelaskan layanan peminjaman buku, ruang baca ber-AC, dan katalog pencarian buku.
- **Ajakan Bergabung**: Kotak di bagian bawah yang memuat tombol ajakan "Daftar sekarang" dan tautan masuk akun.
- **Footer**: Ditempatkan di bagian bawah halaman, berisi alamat gedung, kontak email, nomor telepon, dan jam operasional perpustakaan.

