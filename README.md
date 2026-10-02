# 🚀 Web Portofolio & Project Showcase (73+ Proyek)

Website portofolio modern, responsif, dan siap di-deploy langsung ke **GitHub Pages**. Dibuat menggunakan **HTML5, Bootstrap 5.3, Vanilla JavaScript, dan CSS Modern** tanpa build tool rumit — langsung jalan begitu dibuka!

---

## ✨ Fitur Utama

- 🔍 **Pencarian Live Real-time:** Pengunjung bisa mencari berdasarkan nama proyek, kata kunci, fitur, atau teknologi.
- 🗂️ **Filter Kategori Interaktif:**
  - *Enterprise & Inventory*
  - *Sistem Pakar & SPK*
  - *Pendidikan & Akademik*
  - *Retail, POS & FnB*
  - *IoT, Monitoring & Industri*
  - *Data Science & AI*
  - *Kesehatan & Layanan Publik*
  - *Modern Web & SPA*
- ⚙️ **Filter Tech Stack Dropdown:** Laravel, CodeIgniter, Vue.js, Node.js, Python, Flutter, Java, PHP Native.
- 🌟 **Flagship Projects Showcase:** Sorotan 3 proyek unggulan dengan tampilan prioritas.
- 📑 **Modal Studi Kasus:** Setiap kartu proyek dapat diklik untuk melihat rincian masalah, solusi, fitur utama, dan direktori kodenya.
- 🌓 **Dark & Light Mode Switcher:** Dilengkapi penyimpanan preferensi otomatis ke `localStorage`.
- 📱 **100% Responsif & Mobile-Friendly:** Nyaman dilihat di HP, tablet, maupun layar desktop lebar.

---

## 📂 Struktur File

```text
portfolio-showcase/
├── index.html            # Halaman utama portofolio
├── css/
│   └── style.css         # Styling modern, dark mode & animasi
├── js/
│   ├── projects-data.js  # Database seluruh 73 proyek
│   └── main.js           # Logika filter, pencarian, dan modal
└── README.md             # Panduan lengkap penggunaan & deploy
```

---

## 🌐 Cara Menjalankan di Komputer Lokal

1. Buka folder `portfolio-showcase`.
2. Klik dua kali file `index.html` untuk langsung membukanya di browser (Chrome, Edge, Firefox), **atau**
3. Jika menggunakan ekstensi *Live Server* di VS Code: klik kanan `index.html` > pilih **Open with Live Server**.

---

## 🚢 Panduan Deploy ke GitHub Pages (Gratis & Cepat)

Ikuti langkah mudah ini untuk membuat portofolio ini online dengan URL publik (misal: `https://username.github.io/portfolio-showcase`):

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [GitHub.com](https://github.com) dan login.
2. Klik tombol **New** (Repository baru).
3. Beri nama repository, misalnya: `portfolio-showcase` atau `my-portfolio`.
4. Pilih **Public**.
5. Jangan centang "Add a README file" (karena kita sudah punya).
6. Klik **Create repository**.

### Langkah 2: Upload / Push Kode via Terminal
Buka PowerShell atau Git Bash di dalam folder `e:\all-repos\portfolio-showcase`, lalu jalankan:

```bash
git init
git add .
git commit -m "feat: initial commit modern portfolio showcase 70+ projects"
git branch -M main
git remote add origin https://github.com/USERNAME_GITHUB_KAMU/portfolio-showcase.git
git push -u origin main
```
*(Ganti `USERNAME_GITHUB_KAMU` dengan username GitHub milikmu)*

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repository GitHub kamu, klik menu **Settings** (tab atas).
2. Di sidebar sebelah kiri, klik **Pages** (di bagian *Code and automation*).
3. Pada bagian **Build and deployment** -> **Source**, pilih **Deploy from a branch**.
4. Di bagian **Branch**, pilih `main` dan folder `/(root)`.
5. Klik **Save**.
6. Tunggu sekitar 1–2 menit, refresh halaman Settings Pages. Link website portofolio kamu akan muncul di atas:
   👉 `https://USERNAME_GITHUB_KAMU.github.io/portfolio-showcase/`

---

## ✏️ Cara Kustomisasi Data Pribadi

Untuk mengganti nama, kontak, atau link media sosial:
1. Buka file `index.html`:
   - Ganti `DevShowcase.io` dengan nama atau inisialmu.
   - Ganti `your-email@example.com` di bagian kontak dengan email aslimu.
   - Ganti link WhatsApp `https://wa.me/` dengan nomor WhatsApp kamu (format: `https://wa.me/628xxxxxxxxxx`).
   - Ganti link GitHub `https://github.com` dengan URL profil GitHub milikmu.
2. Jika ingin menambah atau mengubah deskripsi proyek:
   - Cukup edit data di file `js/projects-data.js`. Setiap objek proyek memiliki properti `title`, `category`, `stack`, `description`, dan `features`.
