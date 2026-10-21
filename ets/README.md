## Deskripsi Proyek

Proyek ini merupakan aplikasi web sederhana untuk mengelola dan menampilkan
informasi anggota. Aplikasi menyediakan halaman utama, autentikasi pengguna,
pendaftaran akun, serta halaman data anggota dengan antarmuka.

## Ruang Lingkup Pekerjaan

Ruang lingkup pekerjaan proyek ini meliputi:

- Membuat halaman utama sebagai pengenalan aplikasi.
- Membuat halaman login untuk autentikasi pengguna.
- Membuat halaman register untuk pendaftaran pengguna baru.
- Membuat halaman anggota untuk menampilkan data anggota.
- Menyusun navigasi dan tata letak halaman menggunakan HTML dan CSS.
- Menambahkan logika interaksi aplikasi menggunakan JavaScript.

Struktur folder proyek:

ets
|   index.html --> halaman utama proyek.
|   README.md --> dokumentasi proyek.
|   
+---css
|       style.css --> berisi aturan gaya dan tata letak halaman.
|       
+---js
|       app.js -->  berisi logika JavaScript dan interaksi aplikasi.
|       
\---pages
        anggota.html --> halaman yang menampilkan data anggota.
        login.html --> halaman untuk masuk ke aplikasi.
        register.html --> halaman untuk mendaftarkan pengguna baru.

## Rancangan Halaman dan Struktur Menu

### Rancangan Halaman

1. **Halaman Utama (`index.html`)**
        - Menampilkan judul, deskripsi singkat, dan tujuan aplikasi.
        - Menyediakan tombol atau tautan menuju login dan data anggota.

2. **Halaman Login (`pages/login.html`)**
        - Menyediakan formulir email atau nama pengguna dan kata sandi.
        - Menyediakan tautan menuju halaman register.

3. **Halaman Register (`pages/register.html`)**
        - Menyediakan formulir nama, email, kata sandi, dan konfirmasi kata sandi.
        - Menyediakan tautan kembali ke halaman login.

4. **Halaman Anggota (`pages/anggota.html`)**
        - Menampilkan daftar anggota dalam bentuk tabel atau kartu.
        - Menampilkan informasi seperti nama, identitas, dan kontak anggota.

### Struktur Menu

```text
Beranda (index.html)
├── Login (pages/login.html)
│   └── Register (pages/register.html)
└── Anggota (pages/anggota.html)
```

Menu utama terdiri dari Beranda, Anggota, Login, dan Register. Setelah
berhasil masuk, pengguna dapat mengakses halaman Anggota.

