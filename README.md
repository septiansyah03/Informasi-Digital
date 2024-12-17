# Portal Informasi Digital Sekolah

## Deskripsi Proyek
Portal Informasi Digital Sekolah adalah aplikasi web untuk menampilkan pengumuman dan riwayat pengumuman. Aplikasi menggunakan **Google Sheets** sebagai database dan **Google Apps Script** untuk menyajikan data sebagai API.

## Fitur Utama
- **Pengumuman Utama:** Menampilkan pengumuman terbaru yang diinput dari google sheets.

- **Riwayat Pengumuman:** Daftar semua pengumuman sebelumnya.


## Teknologi yang Digunakan
- **Frontend:** HTML, CSS, JavaScript, Bootstrap, SweetAlert2
- **Backend:** Google Apps Script
- **Database:** Google Sheets

## Cara Menggunakan
1. Buat Spreadsheet dengan tab bernama `Pengumuman` dan kolom: `Tanggal`, `Judul`, `Isi`, `Waktu`, `Author`, `Tempat`.
2. Deploy `appscript.gs` sebagai Web App.
3. Masukkan URL Apps Script di `script.js`.
4. Jalankan `index.html` di browser.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).
