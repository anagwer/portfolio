const PROJECTS_DATA = [
  {
    "id": "antrian_klinik",
    "title": "Sistem Antrian & Pendaftaran Pasien Klinik",
    "category": "Kesehatan & Layanan Publik",
    "stack": "PHP Native / MySQL / Web Speech API",
    "description": "Sistem antrian loket dan poli klinik terintegrasi dengan pemanggilan suara antrian otomatis dan display layar tunggu.",
    "features": [
      "Cetak tiket nomor antrian poli",
      "Audio pemanggilan suara otomatis (TTS)",
      "Display layar antrian ruang tunggu",
      "Rekap jumlah kunjungan pasien per hari"
    ],
    "is_flagship": true,
    "image": "assets/screenshots/antrian_klinik.png",
    "algorithm": "FIFO (First-In, First-Out) Queue Scheduling + Pattern Auto-Fill",
    "algorithm_desc": "Mengatur antrean pasien secara berurutan dan transparan berdasarkan timestamp kedatangan (FIFO). Dilengkapi logika validasi format NIK 16 digit dan sinkronisasi status pemanggilan per poli dokter secara asinkron (AJAX long-polling).",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3 (MVC Architecture)",
      "Bootstrap 5",
      "jQuery AJAX",
      "SweetAlert2"
    ],
    "database": "MySQL (InnoDB, Relasi Tabel Pasien, Terapis, Poliklinik, dan Transaksi Antrean)",
    "modules": [
      {
        "title": "Modul Auto-Fill & Pendaftaran",
        "desc": "Input form pendaftaran cepat dengan simulasi data KTP dan validasi identitas pasien."
      },
      {
        "title": "Modul Multi-Poli & Layanan Terpadu",
        "desc": "Pilihan poli tujuan ganda (multi-layanan) dengan alokasi otomatis terapis dan dokter yang bertugas."
      },
      {
        "title": "Modul Pemanggilan Antrean Real-Time",
        "desc": "Dashboard loket pemanggilan nomor urut pasien per poli dengan pembaruan status dinamis."
      },
      {
        "title": "Modul Rekapitulasi & Riwayat Kunjungan",
        "desc": "Laporan data pasien harian/bulanan beserta riwayat keluhan untuk rekam medis klinik."
      }
    ]
  },
  {
    "id": "administrasi_santri",
    "title": "Sistem Administrasi Santri Pesantren",
    "category": "Pendidikan & Akademik",
    "stack": "PHP Native / MySQL",
    "description": "Sistem pendataan santri pesantren mencakup biodata, kamar asrama, kedisiplinan (pelanggaran), dan iuran bulanan.",
    "features": [
      "Database santri & wali santri",
      "Pencatatan poin pelanggaran & prestasi",
      "Billing iuran SPP / syahriah",
      "Rekap data demografi santri"
    ],
    "is_flagship": true,
    "image": "assets/screenshots/administrasi_santri.png",
    "algorithm": "Role-Based Access Control (RBAC) + Hierarchical Relational Data Mapping",
    "algorithm_desc": "Otorisasi bertingkat memisahkan hak akses Pengurus, Wali Santri, dan Pimpinan Pondok. Menggunakan algoritma hash password satu arah (Bcrypt/MD5) untuk proteksi akun serta query filtering multi-parameter data santri.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4/5",
      "LineIcons",
      "DataTables.js"
    ],
    "database": "MySQL (Tabel Santri, Wali, Pembayaran Iuran, Legalitas SK Kemenag, dan Jadwal)",
    "modules": [
      {
        "title": "Modul Profil & Legalitas Kemenag",
        "desc": "Penyajian profil institusi, legalitas resmi SK Kemenag, NSPP, dan struktur kepengurusan pondok."
      },
      {
        "title": "Modul Pendaftaran Santri Baru (Online)",
        "desc": "Pendaftaran daring calon santri dengan upload berkas dan generate bukti formulir digital."
      },
      {
        "title": "Modul Manajemen Data Santri & Kamar",
        "desc": "Pendataan santri mukim, pembagian asrama/kamar, serta data riwayat perizinan santri."
      },
      {
        "title": "Modul Agenda & Jadwal Harian",
        "desc": "Pusat informasi kegiatan taklim, sholat berjamaah, dan jadwal kurikulum kepesantrenan."
      }
    ]
  },
  {
    "id": "sp-kopi-certainty-Factor",
    "title": "Sistem Pakar Diagnosa Penyakit Tanaman Kopi (Certainty Factor)",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP / MySQL / Certainty Factor",
    "description": "Sistem pakar diagnosis penyakit tanaman kopi menggunakan metode Certainty Factor (CF) untuk mengukur tingkat kepastian diagnosis berdasarkan gejala klinis lapangan.",
    "features": [
      "Perhitungan probabilitas Certainty Factor",
      "Rule-base gejala & hama tanaman kopi",
      "Rekomendasi tindakan pencegahan & obat",
      "Laporan hasil konsultasi cetak PDF"
    ],
    "is_flagship": true,
    "image": "assets/screenshots/sp-kopi-certainty-Factor.png",
    "algorithm": "Certainty Factor (CF) Inference Engine (Kombinasi Multi-Gejala)",
    "algorithm_desc": "Mengkuantifikasi derajat kepastian pakar botani dan pengguna melalui formula CF(H,E) = MB(H,E) - MD(H,E). CF kombinasi dihitung berantai: CF_gabungan = CF1 + CF2 * (1 - CF1) untuk menghasilkan persentase keyakinan diagnosis tertinggi.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native OOP/Procedural",
      "Bootstrap 5",
      "Custom CSS Glassmorphism"
    ],
    "database": "MySQL (Tabel Hama/Penyakit, Gejala, Aturan Bobot Pakar CF, dan Riwayat Diagnosa)",
    "modules": [
      {
        "title": "Inference Engine Certainty Factor",
        "desc": "Kalkulator inferensi matematis yang memproses gejala terpilih dengan bobot keyakinan pengguna."
      },
      {
        "title": "Modul Rule-Base & Master Gejala",
        "desc": "Manajemen data basis pengetahuan gejala (symptom) dan hama/penyakit tanaman kopi."
      },
      {
        "title": "Modul Hasil Konsultasi & Solusi",
        "desc": "Menampilkan diagnosis penyakit dominan, nilai persentase CF, serta instruksi penanganan fungisida/tindakan petani."
      },
      {
        "title": "Modul FAQ & Edukasi Budidaya",
        "desc": "Ensiklopedia panduan pencegahan penyakit kopi dan teknik perawatan tanaman berkala."
      }
    ]
  },
  {
    "id": "sp_jurusan",
    "title": "Sistem Pakar Penjurusan Siswa Berbasis Web",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi analisis potensi akademik dan minat bakat siswa untuk rekomendasi pemilihan jurusan sekolah secara objektif.",
    "features": [
      "Assessment nilai akademik & psikotes",
      "Pembobotan minat bakat",
      "Output rekomendasi jurusan utama & alternatif",
      "Dashboard admin sekolah"
    ],
    "is_flagship": true,
    "image": "assets/screenshots/sp_jurusan.png",
    "algorithm": "Forward Chaining Rule-Based Expert System + Affinity Scoring",
    "algorithm_desc": "Penalaran maju (Forward Chaining) mencocokkan fakta-fakta minat dan bakat yang dipilih pengguna terhadap sekumpulan rule base untuk menyimpulkan jurusan studi lanjutan (IPA, IPS, Bahasa, atau Jurusan Kuliah Spesifik) dengan nilai kesesuaian tertinggi.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native",
      "Bootstrap 5",
      "jQuery"
    ],
    "database": "MySQL (Tabel Minat, Bakat, Jurusan, Rule Implikasi IF-THEN, dan Riwayat Siswa)",
    "modules": [
      {
        "title": "Kuisioner Penelusuran Minat & Bakat",
        "desc": "Form interaktif pilihan preferensi bidang logika, sosial, sains, seni, dan kepemimpinan."
      },
      {
        "title": "Mesin Inferensi Forward Chaining",
        "desc": "Pencocokan runut maju fakta kriteria pengguna terhadap basis aturan penjurusan."
      },
      {
        "title": "Laporan Hasil & Rekomendasi Karir",
        "desc": "Rangkuman jurusan yang paling sesuai beserta prospek profesi di masa depan."
      },
      {
        "title": "Modul Manajemen Aturan (Admin)",
        "desc": "Fleksibilitas guru BK untuk menambah atau mengubah bobot kriteria dan jurusan baru."
      }
    ]
  },
  {
    "id": "teras_genz_CI",
    "title": "Teras Gen-Z Cafe Order & Billing",
    "category": "Retail, POS & FnB",
    "stack": "CodeIgniter / Bootstrap",
    "description": "Sistem kasir dan pemesanan cafe anak muda dengan alur pesanan meja dan rekap omset harian kasir.",
    "features": [
      "Billing pesanan meja cafe",
      "Rekap omset shift kerja barista",
      "Kategori signature drinks & snacks",
      "Pencetakan nota pembayaran"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/teras_genz_CI.png",
    "algorithm": "Multi-Item Cart Calculation Engine & Category-Driven Dynamic Filtering",
    "algorithm_desc": "Komputasi keranjang belanja dinamis berbasis session dengan kalkulasi diskon otomatis, subtotal varian (ukuran, topping, gula/es), dan generate pesanan langsung terintegrasi WhatsApp Order Gateway.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 5",
      "jQuery AJAX",
      "SweetAlert2"
    ],
    "database": "MySQL (Tabel Menu Minuman, Kategori, Varian Topping, dan Transaksi Pemesanan)",
    "modules": [
      {
        "title": "Katalog Menu Interaktif & Promo",
        "desc": "Filter dinamis kategori (Boba, Tea, Milk Tea, Buah Asli, Kopi) dengan badge diskon 15%."
      },
      {
        "title": "Modul Custom Varian & Topping",
        "desc": "Pilihan level gula, takaran es, dan tambahan topping per item dengan kalkulasi harga seketika."
      },
      {
        "title": "Keranjang & Checkout WhatsApp",
        "desc": "Penyusunan ringkasan order rapi dan pembuatan pesan langsung ke kontak kasir gerai."
      },
      {
        "title": "Dashboard Pengelolaan Menu (Admin)",
        "desc": "Kelola ketersediaan stok bahan dan status aktif menu harian."
      }
    ]
  },
  {
    "id": "mabel_gm",
    "title": "Katalog & Transaksi Mebel Jepara GM",
    "category": "Retail, POS & FnB",
    "stack": "PHP Native / Bootstrap",
    "description": "Aplikasi showcase katalog furnitur kayu jati dan pemesanan kustom mebel untuk showroom UMKM mebel.",
    "features": [
      "Katalog produk mebel berfoto HD",
      "Detail spesifikasi kayu & finishing",
      "Form pemesanan custom ukuran",
      "Integrasi kontak admin WhatsApp"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/mabel_gm.png",
    "algorithm": "Automated Cost of Goods Sold (HPP) Calculation Algorithm & Production Sizing",
    "algorithm_desc": "Algoritma estimasi biaya produksi mebel presisi: Menghitung kubikasi bahan baku plywood meranti 18mm, luas lapisan HPL, aksesoris engsel hidrolik, dan ongkos tenaga kerja dengan margin markup transparan.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4/5",
      "FontAwesome",
      "DataTables"
    ],
    "database": "MySQL (Tabel Produk Custom, Estimasi Bahan, Pesanan Klien, dan Tracking Produksi)",
    "modules": [
      {
        "title": "Katalog & Transparansi Bahan",
        "desc": "Koleksi produk mebel dengan breakdown spesifikasi material tanpa manipulasi mutu."
      },
      {
        "title": "Kalkulator Estimasi Biaya Custom",
        "desc": "Simulasi perhitungan anggaran Kitchen Set, Lemari Sliding, dan Meja sesuai ukuran ruangan."
      },
      {
        "title": "Sistem Pelacakan Pesanan Real-Time",
        "desc": "Fitur tracking progres pembuatan furniture khusus pelanggan hanya dengan nomor invoice."
      },
      {
        "title": "Modul Manajemen Produksi Workshop",
        "desc": "Pencatatan alokasi bahan baku dan jadwal pengerjaan tukang kayu."
      }
    ]
  },
  {
    "id": "sablon_gind_CI",
    "title": "Sistem Order Sablon & Konveksi Kaos (Gind)",
    "category": "Retail, POS & FnB",
    "stack": "CodeIgniter / MySQL",
    "description": "Aplikasi penerimaan pesanan sablon kaos custom dengan kalkulasi ukuran desain, jenis kain, dan estimasi waktu selesai.",
    "features": [
      "Upload file mockup desain sablon",
      "Kalkulasi harga berdasarkan kuantitas & warna",
      "Progress tracking pengerjaan pesanan",
      "Invoice Down Payment (DP) & Pelunasan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sablon_gind_CI.png",
    "algorithm": "State-Machine Production Workflow Tracking & Token-Based Public Querying",
    "algorithm_desc": "Mesin pelacak status produksi berfase teratur (Pending -> Antrean Jahit -> Sablon Manual/DTF -> QC Finishing -> Siap Ambil) dengan token unik anti-duplikasi untuk verifikasi pemesan tanpa perlu login.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 5",
      "jQuery AJAX",
      "SweetAlert"
    ],
    "database": "MySQL (Tabel Pesanan, Alur Produksi, Katalog Kaos, Pelanggan, dan Pembayaran DP/Lunas)",
    "modules": [
      {
        "title": "Pelacakan Status Tanpa Login",
        "desc": "Input kode invoice pesanan untuk mengetahui tahap pengerjaan kaos secara transparan."
      },
      {
        "title": "Katalog Bahan Kaos & Sablon",
        "desc": "Edukasi ragam bahan (Cotton Combed 24s/30s, Heavyweight) dan jenis tinta sablon."
      },
      {
        "title": "Formulir Pemesanan Custom",
        "desc": "Pengunggahan file desain, rincian ukuran (S, M, L, XL, XXL), dan pemilihan jenis tinta."
      },
      {
        "title": "Dashboard Manajer Produksi",
        "desc": "Pengendalian alur kerja workshop konveksi dan pencatatan kas bon serta pelunasan."
      }
    ]
  },
  {
    "id": "siakad_sd_alfirdaus",
    "title": "SIAKAD SD Al-Firdaus (Sistem Akademik Terpadu)",
    "category": "Pendidikan & Akademik",
    "stack": "PHP / CodeIgniter / MySQL",
    "description": "Sistem Informasi Akademik sekolah dasar untuk manajemen data santri/siswa, guru, penjadwalan kelas, dan e-Rapor.",
    "features": [
      "Manajemen nilai rapor K13 / Merdeka",
      "Presensi kehadiran siswa",
      "Jadwal pelajaran & pembagian kelas",
      "Cetak lembar rapor siswa PDF"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/siakad_sd_alfirdaus.png",
    "algorithm": "Weighted Academic Grading Aggregator & Report Card Compiler",
    "algorithm_desc": "Perhitungan akumulasi nilai akhir siswa berdasarkan bobot tugas, penilaian harian (UH), PTS, dan PAS sesuai standar Kurikulum Merdeka, serta pemeringkatan prestasi otomatis per kelas.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native Custom MVC",
      "Bootstrap 4",
      "DataTables.js",
      "FPDF"
    ],
    "database": "MySQL (Tabel Siswa, Guru, Mata Pelajaran, Nilai Akademik, dan Pengumuman)",
    "modules": [
      {
        "title": "Portal Akademik & Profil Sekolah",
        "desc": "Informasi visi misi, berita sekolah, ekstrakurikuler, dan kalender pendidikan."
      },
      {
        "title": "Modul Penginputan Nilai Guru",
        "desc": "Input ledger nilai mata pelajaran, catatan sikap spiritual/sosial, dan kehadiran."
      },
      {
        "title": "Cetak Rapor & Ledger Nilai",
        "desc": "Ekspor rapor digital format PDF siap print untuk wali murid saat kenaikan kelas."
      },
      {
        "title": "Manajemen Data Siswa & Kelas",
        "desc": "Pembagian rombongan belajar (rombel) dan mutasi siswa per tahun ajaran."
      }
    ]
  },
  {
    "id": "man1magelang",
    "title": "Portal Web & Profil MAN 1 Magelang",
    "category": "Pendidikan & Akademik",
    "stack": "PHP / Bootstrap / MySQL",
    "description": "Website profil instansi madrasah untuk publikasi berita, pengumuman sekolah, galeri kegiatan, dan prestasi siswa.",
    "features": [
      "Content Management System (CMS)",
      "Publikasi artikel & agenda madrasah",
      "Galeri foto & video kegiatan",
      "Desain responsif ramah mobile"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/man1magelang.png",
    "algorithm": "Asynchronous Content Routing & Multi-Section Information Architecture",
    "algorithm_desc": "Struktur arsitektur informasi modular Pelayanan Terpadu Satu Pintu (PTSP) dengan pemisahan komponen statis dan dinamis untuk akses cepat pada koneksi mobile rendah bandwidth.",
    "languages": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)"
    ],
    "frameworks": [
      "Vanilla CSS Modern Tokens",
      "Bootstrap Grid",
      "Owl Carousel",
      "Feather Icons"
    ],
    "database": "Static JSON / Local Storage Metadata",
    "modules": [
      {
        "title": "Portal Pelayanan PTSP Madrasah",
        "desc": "Akses cepat permohonan legalisir ijazah, surat rekomendasi, dan mutasi siswa."
      },
      {
        "title": "Profil & Sambutan Kepala Madrasah",
        "desc": "Pemaparan visi misi, prestasi santri/madrasah, dan sarana prasarana penunjang."
      },
      {
        "title": "Galeri Prestasi & Berita Terkini",
        "desc": "Slider foto kegiatan ekstrakurikuler, olimpiade sains, dan keagamaan."
      },
      {
        "title": "Informasi Kontak & Lokasi Terpadu",
        "desc": "Tautan komunikasi cepat layanan humas dan integrasi denah kampus madrasah."
      }
    ]
  },
  {
    "id": "kebabdotcom",
    "title": "KebabDotCom Delivery & Franchise Ordering",
    "category": "Retail, POS & FnB",
    "stack": "PHP / Bootstrap / MySQL",
    "description": "Website pemesanan online kebab dan franchise order untuk memudahkan pelanggan memesan varian rasa dan topping.",
    "features": [
      "Kustomisasi pesanan (level pedas & topping)",
      "Integrasi order via WhatsApp otomatis",
      "Hitung estimasi subtotal belanja",
      "Katalog promo mingguan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/kebabdotcom.png",
    "algorithm": "POS Real-time Transaction Ledger & Split-Item Subtotal Computation",
    "algorithm_desc": "Mesin kalkulasi transaksi kasir cepat (Point of Sale) dengan komputasi kembalian tunai/QRIS otomatis, pemotongan stok bahan baku (kulit kebab, daging, saus), dan pembukuan kasir harian.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4",
      "jQuery",
      "Thermal Print Library"
    ],
    "database": "MySQL (Tabel Menu Kebab, Transaksi Kasir, Detail Item, dan Log Shift Kasir)",
    "modules": [
      {
        "title": "Antarmuka Kasir POS Cepat",
        "desc": "Pemilihan menu visual layar sentuh untuk kasir melayani pembeli antrean cepat."
      },
      {
        "title": "Modul Cetak Struk Belanja",
        "desc": "Format layout struk thermal 58mm/80mm dengan detail item dan pesan terima kasih."
      },
      {
        "title": "Laporan Penjualan Shift Kasir",
        "desc": "Rekonsiliasi omzet harian antara uang fisik laci kasir dan catatan sistem."
      },
      {
        "title": "Pengaturan Harga & Varian Menu",
        "desc": "Penambahan menu varian porsi (Small, Medium, Monster) dan ekstra keju."
      }
    ]
  },
  {
    "id": "monitoring_boiler",
    "title": "Industrial Boiler Monitoring & Telemetry System",
    "category": "IoT, Monitoring & Industri",
    "stack": "PHP / JavaScript / Chart.js / IoT",
    "description": "Sistem pemantauan parameter suhu dan tekanan boiler industri secara real-time untuk menjamin keamanan operasional pabrik.",
    "features": [
      "Visualisasi gauge & chart grafik real-time",
      "Batas ambang alarm suhu/tekanan kritis",
      "Pencatatan log historis per menit",
      "Export log inspeksi industri"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/monitoring_boiler.png",
    "algorithm": "Threshold Telemetry Checking & Moving Average Temperature Smoothing",
    "algorithm_desc": "Monitoring telemetri sensor suhu, kelembaban, dan gas amonia pada peternakan ayam boiler. Menerapkan batas ambang (threshold alert) untuk memicu alarm peringatan dini saat suhu melebihi standar aman brooding.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4",
      "Chart.js",
      "AJAX Telemetry Polling"
    ],
    "database": "MySQL (Tabel Log Sensor Suhu, Riwayat Kematian/Afkir, Kandang, dan Operator)",
    "modules": [
      {
        "title": "Dashboard Grafik Sensor Real-Time",
        "desc": "Visualisasi kurva fluktuasi temperatur dan kelembaban kandang 24 jam nonstop."
      },
      {
        "title": "Sistem Peringatan Dini (Alerting)",
        "desc": "Status indikator bahaya saat suhu ruang boiler drop atau overheat."
      },
      {
        "title": "Pencatatan Mortalitas & Pakan",
        "desc": "Log harian tingkat kematian ayam, konsumsi pakan harian, dan bobot rata-rata (FCR)."
      },
      {
        "title": "Laporan Performa Siklus Panen",
        "desc": "Analisis efisiensi biaya pemanas boiler versus indeks performa produksi unggas."
      }
    ]
  },
  {
    "id": "letger",
    "title": "Ledger & Stock Valuation Tracker",
    "category": "Enterprise & Inventory",
    "stack": "PHP / Web",
    "description": "Aplikasi buku besar stok dan valuasi nilai persediaan barang berdasarkan metode pencatatan persediaan.",
    "features": [
      "Jurnal pencatatan mutasi barang",
      "Perhitungan total valuasi aset",
      "Laporan saldo akhir periode",
      "Filter transaksi tanggal dinamis"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/letger.png",
    "algorithm": "FIFO Inventory Valuation & Real-time Unrealized Capital Gain/Loss Evaluation",
    "algorithm_desc": "Perhitungan valuasi portofolio emas fisik dengan metode First-In First-Out (FIFO). Mengkalkulasi break-even point (BEP), selisih spread harga beli versus harga buyback Antam hari ini secara otomatis.",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 Vanilla"
    ],
    "frameworks": [
      "Modern Glassmorphism UI",
      "Local Storage Persistence",
      "Chart.js",
      "CSS Grid"
    ],
    "database": "Local Client-Side Encrypted Storage / JSON Schema",
    "modules": [
      {
        "title": "Kalkulator Portfolio Logam Mulia",
        "desc": "Ringkasan total gramasi emas, modal akumulatif, dan nilai aset pasar saat ini."
      },
      {
        "title": "Pencatatan Lot Beli Bertahap (DCA)",
        "desc": "Input transaksi pembelian dengan tanggal, gramasi, harga per gram, dan biaya cetak."
      },
      {
        "title": "Simulasi Keuntungan & Penjualan",
        "desc": "Analisis keuntungan bersih (net gain) jika menjual pada harga buyback hari ini."
      },
      {
        "title": "Grafik Tren Akumulasi Gramasi",
        "desc": "Diagram pertumbuhan cadangan tabungan emas dari waktu ke waktu."
      }
    ]
  },
  {
    "id": "absensi_tempuran",
    "title": "Sistem Absensi Pegawai Berbasis Lokasi / Web",
    "category": "Kesehatan & Layanan Publik",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi pencatatan absensi pegawai kantor kecamatan dengan rekapitulasi jam hadir, jam pulang, dan perhitungan keterlambatan.",
    "features": [
      "Pencatatan jam masuk & pulang real-time",
      "Manajemen izin & cuti pegawai",
      "Kalkulasi potongan keterlambatan",
      "Cetak rekap absensi bulanan ASN"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/absensi_tempuran.png",
    "algorithm": "Geofencing Coordinate Validation (Haversine Formula) & Work-Hour Calculation",
    "algorithm_desc": "Validasi kehadiran pegawai berbasis radius jarak lokasi kantor kecamatan (Geofencing) dan pemindaian QR/kamera, mencatat keterlambatan secara otomatis berdasarkan jam kerja resmi.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native",
      "Bootstrap 4",
      "HTML5 Geolocation API",
      "Webcam.js"
    ],
    "database": "MySQL (Tabel Pegawai, Presensi Harian, Izin/Cuti, dan Titik Koordinat Kantor)",
    "modules": [
      {
        "title": "Presensi Masuk & Pulang Terverifikasi",
        "desc": "Pencatatan jam kerja otomatis dengan capture foto wajah dan lokasi GPS akurat."
      },
      {
        "title": "Modul Pengajuan Izin & Cuti Sakit",
        "desc": "Form upload surat keterangan dokter atau permohonan dinas luar secara online."
      },
      {
        "title": "Rekapitulasi Kehadiran Bulanan",
        "desc": "Laporan persentase kehadiran pegawai untuk penentuan tunjangan kinerja (TPP)."
      },
      {
        "title": "Panel Kelola Data Pegawai & Unit",
        "desc": "Master data NIP, jabatan seksi kecamatan, dan jadwal jam kerja fleksibel."
      }
    ]
  },
  {
    "id": "blt_magelang",
    "title": "Sistem Pendataan & Penyaluran BLT Magelang",
    "category": "Kesehatan & Layanan Publik",
    "stack": "CodeIgniter / MySQL",
    "description": "Sistem informasi verifikasi kelayakan penerima Bantuan Langsung Tunai (BLT) untuk memastikan bansos tepat sasaran.",
    "features": [
      "Scoring kriteria kemiskinan penerima bansos",
      "Deteksi duplikasi data NIK",
      "Pencatatan status penyaluran dana",
      "Cetak kartu bukti penerima manfaat"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/blt_magelang.png",
    "algorithm": "Multi-Criteria Poverty Index Scoring & Priority Beneficiary Sorting",
    "algorithm_desc": "Penentuan kelayakan penerima Bantuan Langsung Tunai (BLT) desa berdasarkan indikator ekonomi BPS (kondisi dinding rumah, lantai, pendapatan kepala keluarga, jumlah tanggungan, dan daya listrik).",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native",
      "Bootstrap 4",
      "DataTables.js",
      "FPDF"
    ],
    "database": "MySQL (Tabel Warga/KK, Kriteria Kemiskinan, Skor Kelayakan, dan Daftar Penerima)",
    "modules": [
      {
        "title": "Pendataan Kepala Keluarga Calon Penerima",
        "desc": "Form survei parameter sosial ekonomi rumah tangga warga desa terpadu."
      },
      {
        "title": "Scoring Kelayakan Bantuan Otomatis",
        "desc": "Kalkulasi poin kemiskinan objektif untuk meminimalisir salah sasaran penerima bantuan."
      },
      {
        "title": "Daftar Nominatif Penerima BLT",
        "desc": "Perankingan urutan prioritas penerima dana bantuan sesuai kuota pagu anggaran."
      },
      {
        "title": "Ekspor Dokumen Berita Acara Desa",
        "desc": "Cetak berkas daftar penerima bantuan bertanda tangan kepala desa siap arsip."
      }
    ]
  },
  {
    "id": "hizetblue",
    "title": "Hizetblue",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "Sistem aplikasi web application berbasis Native / Other yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/hizetblue.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "hub",
    "title": "Hub",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "Sistem aplikasi web application berbasis Native / Other yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/hub.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "forecasting_iphone",
    "title": "Forecasting Penjualan iPhone (Metode Time Series)",
    "category": "Data Science & AI",
    "stack": "PHP / Python / Data Science",
    "description": "Sistem prediksi tren penjualan unit smartphone menggunakan algoritma peramalan data deret berkala untuk perencanaan stok.",
    "features": [
      "Kalkulasi peramalan tren waktu (Moving Average / Holt)",
      "Perhitungan nilai error MAPE / MAD",
      "Grafik proyeksi penjualan ke depan",
      "Export hasil estimasi kebutuhan stok"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/forecasting_iphone.png",
    "algorithm": "Single Exponential Smoothing (SES) & Weighted Moving Average (WMA)",
    "algorithm_desc": "Peramalan volume penjualan unit smartphone iPhone untuk periode berikutnya dengan parameter alpha optimal. Dilengkapi komputasi metrik akurasi MAPE (Mean Absolute Percentage Error) dan MSE.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4",
      "Chart.js",
      "DataTables.js"
    ],
    "database": "MySQL (Tabel Seri iPhone, Data Penjualan Historis, Hasil Forecast, dan Evaluasi Error)",
    "modules": [
      {
        "title": "Input Deret Waktu Historis (Time Series)",
        "desc": "Pencatatan data penjualan bulanan per tipe unit iPhone (Pro, Pro Max, Standar)."
      },
      {
        "title": "Mesin Hitung Peramalan SES / WMA",
        "desc": "Kalkulasi matematis proyeksi permintaan stok untuk bulan berikutnya."
      },
      {
        "title": "Grafik Komparasi Aktual vs Prediksi",
        "desc": "Visualisasi tren riil penjualan berbanding garis estimasi ramalan stok."
      },
      {
        "title": "Evaluasi Toleransi Akurasi MAPE",
        "desc": "Penentuan tingkat keandalan model peramalan dalam mendukung keputusan pembelian grosir."
      }
    ]
  },
  {
    "id": "statkes303",
    "title": "Statistik Kesehatan Masyarakat & Rekap Medis",
    "category": "Kesehatan & Layanan Publik",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi rekapitulasi data surveilans epidemiologi dan statistik penyakit di fasilitas kesehatan tingkat pertama.",
    "features": [
      "Pendataan morbiditas & 10 penyakit terbanyak",
      "Visualisasi diagram sebaran penyakit",
      "Laporan bulanan dinas kesehatan",
      "Penyaringan data per wilayah dusun/desa"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/statkes303.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "FIFO (First-In First-Out) Scheduling & Queue Coordination",
    "algorithm_desc": "Penjadwalan antrean waktu nyata dengan pemrosesan urutan teratur dan sinkronisasi status loket secara asinkron.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "ppdb-musamu",
    "title": "PPDB Online Musamu (Penerimaan Peserta Didik Baru)",
    "category": "Pendidikan & Akademik",
    "stack": "CodeIgniter / MySQL / Bootstrap",
    "description": "Portal pendaftaran siswa baru secara daring dengan alur verifikasi berkas, pengumuman seleksi, dan cetak kartu peserta.",
    "features": [
      "Formulir pendaftaran multi-step",
      "Upload berkas (KK, Akta, Ijazah)",
      "Verifikasi admin & penetapan kelulusan",
      "Cetak bukti tanda pendaftaran resmi"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/ppdb-musamu.png",
    "algorithm": "Online Admission Verification Workflow & Academic Weighted Assessment",
    "algorithm_desc": "Sistem penerimaan peserta didik baru madrasah dengan verifikasi NISN, upload berkas digital, penilaian skor gabungan nilai rapor + tes wawancara, dan pengumuman seleksi real-time.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native Custom Architecture",
      "Bootstrap 4",
      "SweetAlert2",
      "FPDF"
    ],
    "database": "MySQL (Tabel Calon Siswa, Orang Tua, Nilai Seleksi, Jalur Pendaftaran, dan Status Kelulusan)",
    "modules": [
      {
        "title": "Formulir Registrasi Daring Mandiri",
        "desc": "Pengisian data biodata calon santri baru dan pemilihan jalur reguler / prestasi."
      },
      {
        "title": "Verifikasi Berkas Administrasi Panitia",
        "desc": "Panel pengawas PPDB untuk memvalidasi kartu keluarga, akta lahir, dan bukti transfer."
      },
      {
        "title": "Pengumuman Hasil Seleksi Online",
        "desc": "Pengecekan kelulusan cukup dengan mengetik nomor pendaftaran peserta."
      },
      {
        "title": "Cetak Kartu Ujian & Formulir Registrasi",
        "desc": "Penerbitan dokumen pendaftaran resmi berpasfoto dan QR verifikasi panitia."
      }
    ]
  },
  {
    "id": "newqr",
    "title": "Dynamic QR Code Generator & Scanner Web App",
    "category": "Modern Web & SPA",
    "stack": "JavaScript / HTML5 Canvas / Web API",
    "description": "Aplikasi pembuatan dan pemindaian kode QR instan untuk URL, teks, vCard, dan data inventaris.",
    "features": [
      "Generate QR code beresolusi tinggi",
      "Kustomisasi warna & logo QR",
      "Download file PNG/SVG",
      "Live camera QR scanner"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/newqr.png",
    "algorithm": "Dynamic 2D QR Code Matrix Encoding & AX ERP Identifier Mapping",
    "algorithm_desc": "Generate kode QR matriks resolusi tinggi dengan error-correction level H (High 30%). Mendukung pemindaian instan untuk pelacakan batch lot industri dan integrasi Microsoft Dynamics AX.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "PHP QR Code Library",
      "Bootstrap 5",
      "Canvas API"
    ],
    "database": "MySQL (Tabel Batch Serial, Log Pemindaian, dan Parameter Format Label)",
    "modules": [
      {
        "title": "Generator QR Code Kustom",
        "desc": "Pembuatan QR code instan dengan penyesuaian ukuran piksel, margin, dan data teks/link."
      },
      {
        "title": "Batch Printing Label Barcode",
        "desc": "Tata letak cetak stiker label QR massal sesuai format kertas stiker barcode industri."
      },
      {
        "title": "Scanner & Decoder Terintegrasi",
        "desc": "Fitur uji baca kode QR via kamera webcam untuk memastikan keterbacaan data."
      },
      {
        "title": "Log Riwayat Pembuatan Serial",
        "desc": "Penyimpanan arsip kode serial yang telah dicetak untuk mencegah kode ganda."
      }
    ]
  },
  {
    "id": "saw_perawat",
    "title": "SPK Penilaian Kinerja Perawat Rumah Sakit (SAW)",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP Native / MySQL",
    "description": "Sistem evaluasi dan perankingan kinerja tenaga perawat berbasis kriteria KPI medis dan kedisiplinan kerja menggunakan metode SAW.",
    "features": [
      "Penilaian multi-kriteria medis & etik",
      "Normalisasi matriks kinerja",
      "Perangkingan perawat teladan",
      "Rekap penilaian berkala per periode"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/saw_perawat.png",
    "algorithm": "Simple Additive Weighting (SAW) Method with Matrix Normalization",
    "algorithm_desc": "Mengevaluasi kinerja tenaga medis/perawat melalui normalisasi matriks R (kriteria benefit dan cost), dikalikan dengan bobot preferensi kriteria W untuk menghasilkan skor ranking V perawat terbaik.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4",
      "DataTables",
      "Math Logic Engine"
    ],
    "database": "MySQL (Tabel Perawat, Kriteria Kinerja, Nilai Matriks, dan Hasil Perangkingan)",
    "modules": [
      {
        "title": "Pembobotan Kriteria Penilaian",
        "desc": "Pengaturan bobot disiplin, keterampilan klinis, komunikasi, empati, dan kehadiran."
      },
      {
        "title": "Normalisasi Matriks Kinerja R",
        "desc": "Proses transformasi nilai riil ke skala komparatif 0 hingga 1 secara otomatis."
      },
      {
        "title": "Perhitungan Skor Preferensi Akhir V",
        "desc": "Perkalian matriks dan penjumlahan terbobot untuk menentukan perawat teladan."
      },
      {
        "title": "Cetak SK Hasil Evaluasi Manajemen",
        "desc": "Laporan rekapitulasi penilaian kinerja tahunan untuk rujukan kenaikan jenjang karir."
      }
    ]
  },
  {
    "id": "sp_kopi",
    "title": "Sp Kopi",
    "category": "Decision Support & Expert System",
    "stack": "PHP Native",
    "description": "Sistem aplikasi decision support & expert system berbasis PHP Native yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sp_kopi.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "sp_penyakit_anak",
    "title": "Sistem Pakar Diagnosa Penyakit Anak",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi konsultasi kesehatan anak berbasis web untuk deteksi dini gejala penyakit infeksi dan common pediatric illness.",
    "features": [
      "Pohon keputusan gejala (Decision Tree)",
      "Kalkulasi nilai keyakinan",
      "Edukasi pertolongan pertama",
      "History riwayat konsultasi orang tua"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sp_penyakit_anak.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Rule-Based Inference & Multi-Criteria Decision Evaluation",
    "algorithm_desc": "Mengolah fakta dan bobot masukan pengguna menggunakan inferensi komputasi untuk menentukan rekomendasi keputusan paling akurat.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "spk-saw",
    "title": "SPK Metode SAW (Simple Additive Weighting)",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP / CodeIgniter / MySQL",
    "description": "Sistem Pendukung Keputusan berbasis web dengan metode Simple Additive Weighting (SAW) untuk penentuan alternatif terbaik melalui matriks normalisasi bobot.",
    "features": [
      "Manajemen kriteria benefit & cost",
      "Matriks ternormalisasi otomatis",
      "Perangkingan skor preferensi",
      "Export rekap keputusan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/spk-saw.png",
    "algorithm": "Simple Additive Weighting (SAW) / Fuzzy Multi-Attribute Decision Making",
    "algorithm_desc": "Penyaringan dan perangkingan mobil bekas terbaik berdasarkan kriteria harga (cost), tahun produksi, konsumsi BBM, ketersediaan sparepart, dan kondisi mesin (benefit) dengan normalisasi matriks.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native",
      "Bootstrap 4",
      "DataTables"
    ],
    "database": "MySQL (Tabel Katalog Mobil, Kriteria Pembeli, Nilai Normalisasi, Ranking Rekomendasi)",
    "modules": [
      {
        "title": "Pencarian Sesuai Budget Pembeli",
        "desc": "Filter preferensi batas dana maksimal, transmisi, dan tipe bodi kendaraan."
      },
      {
        "title": "Proses Normalisasi Kriteria Mobil",
        "desc": "Penyesuaian nilai harga dan kondisi teknis ke dalam matriks keputusan seragam."
      },
      {
        "title": "Perankingan Mobil Paling Efisien",
        "desc": "Urutan unit mobil yang memberikan value-for-money tertinggi bagi konsumen."
      },
      {
        "title": "Master Data Stok Kendaraan",
        "desc": "Pengelolaan unit mobil showroom yang siap dipasarkan."
      }
    ]
  },
  {
    "id": "spk_waspas",
    "title": "SPK Metode WASPAS (Weighted Aggregated Sum Product Assessment)",
    "category": "Sistem Pakar & SPK",
    "stack": "PHP / CodeIgniter / MySQL",
    "description": "Sistem Pengambilan Keputusan multikriteria mengombinasikan WSM (Weight Sum Model) dan WPM (Weight Product Model) untuk hasil akurasi tinggi.",
    "features": [
      "Normalisasi matriks ganda (WSM + WPM)",
      "Optimasi nilai lambda (λ)",
      "Perankingan alternatif komparatif",
      "Visualisasi grafik peringkat"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/spk_waspas.png",
    "algorithm": "Weight Aggregated Sum Product Assessment (WASPAS) Algorithm",
    "algorithm_desc": "Metode pengambil keputusan multikriteria menggabungkan pendekatan WSM (Weighted Sum Model) dan WPM (Weighted Product Model) dengan optimasi parameter lambda untuk tingkat seleksi alternatif yang sangat objektif.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native OOP",
      "Bootstrap 5",
      "DataTables",
      "Custom Math Solver"
    ],
    "database": "MySQL (Tabel Alternatif, Bobot Kriteria, Matriks Ternormalisasi, Nilai Q-Score)",
    "modules": [
      {
        "title": "Matriks Keputusan Kriteria",
        "desc": "Input nilai performa tiap alternatif pada masing-masing parameter benefit dan cost."
      },
      {
        "title": "Komputasi Model WSM & WPM",
        "desc": "Perhitungan serempak penjumlahan terbobot dan perkalian eksponensial terbobot."
      },
      {
        "title": "Kombinasi Nilai WASPAS (Q-Score)",
        "desc": "Penerapan koefisien lambda untuk mendapatkan peringkat keputusan terbaik."
      },
      {
        "title": "Laporan Rekomendasi Terpilih",
        "desc": "Visualisasi peringkat alternatif terbaik siap ekspor ke dokumen pendukung."
      }
    ]
  },
  {
    "id": "hondasakti-stockopname",
    "title": "Honda Sakti Stock Opname & Inventory Control",
    "category": "Enterprise & Inventory",
    "stack": "Laravel / MySQL / Bootstrap",
    "description": "Sistem enterprise pengelolaan stok fisik vs sistem (stock opname) dealer resmi Honda untuk meminimalisir selisih inventaris suku cadang.",
    "features": [
      "Stock opname barcode scanner scan",
      "Audit selisih stok (varian minus/plus)",
      "Log mutasi masuk/keluar sparepart",
      "Laporan rekonsiliasi audit bulanan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/hondasakti-stockopname.png",
    "algorithm": "Barcode EAN-13 Checksum Parsing & Physical Inventory Discrepancy Reconciliation",
    "algorithm_desc": "Audit stok fisik suku cadang dealer Honda dengan pemindaian barcode cepat. Menghitung otomatis varian minus (stok hilang/rusak) dan plus (kelebihan stok) terhadap master data ERP.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native Enterprise",
      "Bootstrap 4",
      "QuaggaJS / HTML5 Barcode Reader"
    ],
    "database": "MySQL (Tabel Master Part Honda, Hasil Scan Fisik, Selisih Varian, dan Berita Acara)",
    "modules": [
      {
        "title": "Validasi Barcode Suku Cadang",
        "desc": "Pemindaian barcode part number Honda untuk pencocokan otomatis nama dan rak penyimpanan."
      },
      {
        "title": "Deteksi Selisih Varian Fisik vs Sistem",
        "desc": "Tampilan seketika jumlah fisik versus catatan sistem (status Cocok, Minus, atau Plus)."
      },
      {
        "title": "Rekonsiliasi Audit Bulanan",
        "desc": "Penerbitan Berita Acara Hasil Stock Opname untuk bagian akuntansi dan audit internal."
      },
      {
        "title": "Master Rak & Lokasi Gudang",
        "desc": "Pemetaan koordinat rak gudang dealer agar proses audit fisik berjalan sistematis."
      }
    ]
  },
  {
    "id": "ujian-online-laravel-vue",
    "title": "Platform Ujian Online & CBT (Computer Based Test)",
    "category": "Pendidikan & Akademik",
    "stack": "Laravel / Vue.js / SPA / MySQL",
    "description": "Aplikasi Computer-Based Testing modern dengan arsitektur Laravel API dan antarmuka interaktif Vue.js untuk ujian real-time tanpa lag.",
    "features": [
      "Timer countdown anti-cheat",
      "Bank soal multi-tipe (Pilihan Ganda & Essay)",
      "Auto-grading nilai otomatis",
      "Monitoring live pengerjaan siswa"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/ujian-online-laravel-vue.png",
    "algorithm": "Client-Server Real-time Sync & Anti-Cheat Focus Loss Detection Algorithm",
    "algorithm_desc": "Arsitektur decoupled: Backend Laravel API mengelola bank soal terenkripsi dan timer server-side; Frontend Vue.js SPA menyajikan pengalaman ujian interaktif tanpa jeda reload dengan auto-save jawaban dan deteksi kecurangan.",
    "languages": [
      "PHP 8.2",
      "JavaScript (Vue.js 3)",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "Laravel 10 REST API",
      "Vue.js 3 (Vite + SPA)",
      "Pinia State Management",
      "Tailwind CSS"
    ],
    "database": "MySQL (Tabel Peserta Ujian, Bank Soal, Lembar Jawaban, Token Sesi, Nilai Otomatis)",
    "modules": [
      {
        "title": "Ruang Ujian Interaktif (SPA)",
        "desc": "Pengerjaan soal pilihan ganda & esai dengan navigasi nomor soal dan penanda ragu-ragu."
      },
      {
        "title": "Sistem Anti-Cheat & Timer Server",
        "desc": "Pencegahan buka tab baru, penguncian kursor, dan auto-submit saat waktu habis."
      },
      {
        "title": "Koreksi Nilai Otomatis (Auto-Grading)",
        "desc": "Skor ujian langsung dikalkulasi seketika peserta menekan tombol selesai ujian."
      },
      {
        "title": "Manajemen Bank Soal & Token (Guru)",
        "desc": "Pembuatan paket soal, pengacakan urutan pertanyaan, dan generate token ujian."
      }
    ]
  },
  {
    "id": "Inventory-Barang",
    "title": "Sistem Informasi Inventaris Barang Terpadu",
    "category": "Enterprise & Inventory",
    "stack": "CodeIgniter / PHP / MySQL",
    "description": "Aplikasi pencatatan stok barang masuk dan keluar dengan kategorisasi barang, supplier, dan monitoring sisa stok.",
    "features": [
      "CRUD master barang & supplier",
      "Pencatatan transaksi mutasi harian",
      "Cetak bukti tanda terima barang",
      "Filter pencarian barang cepat"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/Inventory-Barang.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter",
      "PHP",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "GiWeb",
    "title": "Giweb",
    "category": "Web Application",
    "stack": "PHP Native",
    "description": "Sistem aplikasi web application berbasis PHP Native yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/GiWeb.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "e-laundry",
    "title": "E-Laundry Online & Tracking Cuci Kiloan",
    "category": "Retail, POS & FnB",
    "stack": "PHP / CodeIgniter / MySQL",
    "description": "Aplikasi manajemen laundry kiloan dan satuan dengan fitur tracking status pengerjaan (Antri, Cuci, Setrika, Selesai).",
    "features": [
      "Pemberian nomor nota laundry unik",
      "Tracking status cucian pelanggan online",
      "Perhitungan otomatis berat x tarif paket",
      "Kirim notifikasi cucian selesai"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/e-laundry.png",
    "algorithm": "Weight-Based Dynamic Tariffing & Automated Customer Status Notification",
    "algorithm_desc": "Sistem kasir laundry kiloan dan satuan: Menghitung tarif otomatis berdasarkan bobot timbangan, pilihan layanan (Reguler, Kilat, Express), dan estimasi selesai dengan cetak nota thermal.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "PHP Native",
      "Bootstrap 4",
      "jQuery",
      "DataTables.js"
    ],
    "database": "MySQL (Tabel Pelanggan, Paket Laundry, Transaksi Masuk, dan Kas Keuangan)",
    "modules": [
      {
        "title": "Penerimaan Order Kiloan & Satuan",
        "desc": "Input berat timbangan pakaian dan pemilihan paket cuci kering setrika."
      },
      {
        "title": "Status Pengerjaan Cucian",
        "desc": "Monitor antrean cucian (Dicuci, Dikeringkan, Disetrika, Siap Diambil, Selesai)."
      },
      {
        "title": "Cetak Nota Transaksi & Struk",
        "desc": "Penerbitan tanda terima pakaian bernomor barcode untuk bukti pengambilan."
      },
      {
        "title": "Laporan Pendapatan & Pengeluaran",
        "desc": "Pencatatan laba kotor harian dan rekap pengeluaran deterjen serta parfum."
      }
    ]
  },
  {
    "id": "kedai_baleni_ci",
    "title": "Sistem Kasir Kedai Baleni Coffee & Eatery",
    "category": "Retail, POS & FnB",
    "stack": "CodeIgniter / MySQL",
    "description": "Aplikasi kasir kedai kopi untuk pencatatan pesanan barista, kitchen order ticket (KOT), dan rekonsiliasi kas kasir.",
    "features": [
      "Split bill pesanan meja",
      "Order ticket otomatis ke dapur",
      "Metode pembayaran tunai & QRIS",
      "Laporan tutup buku harian"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/kedai_baleni_ci.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "kedai_djoenang",
    "title": "Kedai Djoenang POS & Inventory Kitchen",
    "category": "Retail, POS & FnB",
    "stack": "PHP Native / MySQL",
    "description": "Sistem operasional resto mencakup pesanan pelanggan, manajemen stok bahan baku dapur, dan laporan laba kotor.",
    "features": [
      "Pemotongan stok bahan baku otomatis per pesanan",
      "Dashboard grafik penjualan harian",
      "Cetak bill struk",
      "Manajemen diskon member"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/kedai_djoenang.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "kedai_djoenang-lucuk",
    "title": "Kedai Djoenang Front-End UI Interactive",
    "category": "Retail, POS & FnB",
    "stack": "HTML5 / CSS3 / JavaScript",
    "description": "Antarmuka pemesanan mandiri (self-order) dengan tampilan interaktif, animasi ceria, dan pemilihan menu interaktif.",
    "features": [
      "Menu visual card interaktif",
      "Keranjang belanja instan",
      "Animasi UI interaktif ramah pelanggan",
      "Responsive design smartphone"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/kedai_djoenang-lucuk.png",
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "laundry_native",
    "title": "Sistem Kasir Laundry Kilat Native",
    "category": "Retail, POS & FnB",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi ringan kasir laundry dengan kecepatan transaksi tinggi untuk operasional toko harian.",
    "features": [
      "Input cepat berat cucian",
      "Pencatatan nama & kontak pelanggan",
      "Status pengambilan pakaian",
      "Export data transaksi"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/laundry_native.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "risma_laundry_CI",
    "title": "Risma Laundry Management System",
    "category": "Retail, POS & FnB",
    "stack": "CodeIgniter / MySQL",
    "description": "Sistem pembukuan operasional usaha laundry dengan manajemen pelanggan, paket layanan, dan keuangan kasir.",
    "features": [
      "Manajemen deposit saldo member",
      "Laporan penerimaan pendapatan laundry",
      "Cetak nota struk kasir kecil",
      "Filter transaksi belum lunas"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/risma_laundry_CI.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "summit_adventure",
    "title": "Summit Adventure Outdoor Gear Rental",
    "category": "Retail, POS & FnB",
    "stack": "PHP / CodeIgniter / Bootstrap",
    "description": "Sistem peminjaman dan penyewaan alat pendakian gunung (tenda, carrier, sleeping bag) dengan kalkulasi denda keterlambatan.",
    "features": [
      "Katalog peralatan outdoor dengan status stok",
      "Kalkulasi sewa per hari & deposit jaminan",
      "Tracking pengembalian & denda telat",
      "Cetak surat perjanjian sewa"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/summit_adventure.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP",
      "CodeIgniter",
      "Bootstrap"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "website_cms_UTS2233073",
    "title": "Custom Web CMS & Article Publishing Engine",
    "category": "Modern Web & SPA",
    "stack": "PHP / MySQL / Bootstrap",
    "description": "Content Management System kustom untuk penerbitan artikel, manajemen kategori, dan kontrol hak akses editor.",
    "features": [
      "WYSIWYG Rich Text Editor",
      "Upload media gambar aman",
      "Kategori & tag artikel bertingkat",
      "Panel kontrol moderasi konten"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/website_cms_UTS2233073.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP",
      "MySQL",
      "Bootstrap"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "pembayaranTU_CI3",
    "title": "Sistem Informasi Pembayaran TU & SPP Sekolah",
    "category": "Pendidikan & Akademik",
    "stack": "CodeIgniter 3 / MySQL",
    "description": "Aplikasi loket pembayaran Tata Usaha (TU) sekolah untuk pembayaran SPP, uang gedung, dan administrasi seragam.",
    "features": [
      "Pencatatan tagihan per siswa",
      "Cetak kuitansi pembayaran resmi",
      "Laporan penerimaan kas harian kasir TU",
      "Rekap tunggakan pembayaran siswa"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/pembayaranTU_CI3.png",
    "algorithm": "Student Tuition Billing Ledger & Payment Reconciliation Accounting",
    "algorithm_desc": "Buku kas elektronik tata usaha sekolah untuk manajemen tagihan SPP bulanan, uang gedung, seragam, dan ujian, dengan deteksi tunggakan per siswa dan generate kwitansi bukti bayar.",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "HTML5/CSS3"
    ],
    "frameworks": [
      "CodeIgniter 3",
      "Bootstrap 4",
      "DataTables.js",
      "FPDF Kwitansi"
    ],
    "database": "MySQL (Tabel Siswa, Pos Tagihan, Transaksi Pembayaran TU, dan Kas Masuk/Keluar)",
    "modules": [
      {
        "title": "Loket Pembayaran SPP & Iuran Sekolah",
        "desc": "Input cicilan atau pelunasan tagihan siswa dengan kalkulasi sisa piutang akurat."
      },
      {
        "title": "Cetak Kwitansi Pembayaran Resmi",
        "desc": "Format cetak bukti setor dana bermaterai dan paraf petugas bendahara TU."
      },
      {
        "title": "Monitoring Siswa Menunggak",
        "desc": "Laporan filter cepat nama siswa yang belum melunasi kewajiban administrasi."
      },
      {
        "title": "Rekapitulasi Kas Keuangan Bulanan",
        "desc": "Buku kas umum tata usaha untuk pertanggungjawaban kepada kepala sekolah."
      }
    ]
  },
  {
    "id": "nocturnal_ci",
    "title": "Nocturnal Studio Creative Agency Portfolio Web",
    "category": "Modern Web & SPA",
    "stack": "CodeIgniter / CSS3 / JavaScript",
    "description": "Website profil kreatif studio dengan galeri karya interaktif, daftar layanan produksi, dan form konsultasi klien.",
    "features": [
      "Filter portofolio desain & fotografi",
      "Animasi scrolling interaktif",
      "Testimoni klien & showcase brand",
      "Formulir pesan kontak terhubung email"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/nocturnal_ci.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter",
      "CSS3",
      "JavaScript"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "si_rocket_chicken",
    "title": "Sistem Kasir & Operasional Rocket Chicken",
    "category": "Retail, POS & FnB",
    "stack": "PHP / CodeIgniter / MySQL",
    "description": "Sistem Point of Sale (POS) dan pengelolaan penjualan harian outlet kuliner cepat saji Rocket Chicken.",
    "features": [
      "Transaksi kasir cepat (POS touch-friendly)",
      "Perhitungan kembalian & diskon promo",
      "Cetak struk kasir thermal",
      "Laporan omset harian & menu terlaris"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/si_rocket_chicken.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP",
      "CodeIgniter",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "monitoring",
    "title": "Server & Network Service Health Monitoring",
    "category": "IoT, Monitoring & Industri",
    "stack": "PHP / AJAX / Shell",
    "description": "Aplikasi pemantauan ketersediaan server dan layanan jaringan dengan visualisasi uptime dan latency ping.",
    "features": [
      "Ping status check otomatis",
      "Grafik response time server",
      "Alert status offline server",
      "Manajemen IP dan domain endpoint"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/monitoring.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP",
      "AJAX",
      "Shell"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "native-pengiriman-barang",
    "title": "Sistem Ekspedisi & Tracking Pengiriman Barang",
    "category": "Enterprise & Inventory",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi manajemen logistik pengiriman barang dengan fitur generate nomor resi dan tracking status pengantaran kurir.",
    "features": [
      "Generate nomor resi unik",
      "Update status pengiriman (Manifest, Transit, Delivered)",
      "Pencetakan label resi pengiriman",
      "Kalkulasi ongkos kirim"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/native-pengiriman-barang.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "myproject_2233061",
    "title": "Myproject 2233061",
    "category": "Web Application",
    "stack": "CodeIgniter (PHP)",
    "description": "Sistem aplikasi web application berbasis CodeIgniter (PHP) yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/myproject_2233061.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter (PHP)"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "myproject",
    "title": "Myproject",
    "category": "Web Application",
    "stack": "CodeIgniter (PHP)",
    "description": "Sistem aplikasi web application berbasis CodeIgniter (PHP) yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/myproject.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "CodeIgniter (PHP)"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "invtrio",
    "title": "InvTrio - Multi-Branch Inventory System",
    "category": "Enterprise & Inventory",
    "stack": "PHP Native / MySQL",
    "description": "Sistem inventaris multi-cabang untuk sinkronisasi persediaan barang di berbagai lokasi toko.",
    "features": [
      "Multi-outlet inventory tracking",
      "Transfer stok antar cabang",
      "Laporan konsolidasi penjualan",
      "Manajemen hak akses kasir & supervisor"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/invtrio.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "jilqu",
    "title": "Jilqu",
    "category": "Web Application",
    "stack": "PHP Native",
    "description": "Website jualan jilbab dan aksesorisnya",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/jilqu.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "inventory_gita",
    "title": "Aplikasi Manajemen Stok & Pengadaan",
    "category": "Enterprise & Inventory",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi pencatatan alur pengadaan barang dari supplier hingga distribusi ke unit-unit kerja.",
    "features": [
      "Pengajuan restock barang",
      "Validasi penerimaan barang gudang",
      "Laporan mutasi per departemen",
      "Cetak invoice surat jalan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/inventory_gita.PNG",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "doc-control",
    "title": "ISO Document Control & Compliance System",
    "category": "IoT, Monitoring & Industri",
    "stack": "Laravel / PHP / MySQL",
    "description": "Sistem manajemen dokumen mutu perusahaan (SOP, WI, Formulir) dengan alur revisi, persetujuan bertingkat, dan watermark.",
    "features": [
      "Versioning dokumen terkendali",
      "Multi-level approval workflow",
      "Watermark otomatis status dokumen (Controlled/Obsolete)",
      "Log riwayat perubahan dokumen"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/doc-control.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "Laravel",
      "PHP",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "hbd-1",
    "title": "Hbd 1",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "Sistem aplikasi web application berbasis Native / Other yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/hbd-1.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "hbd2u",
    "title": "Hbd2U",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "A responsive website used to wish someone a happy birthday. Created using HTML, Tailwind CSS, and JavaScript.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/hbd2u.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "CRUD-Restoran",
    "title": "Restaurant Table & Menu Management System",
    "category": "Retail, POS & FnB",
    "stack": "PHP Native / MySQL",
    "description": "Aplikasi reservasi meja makan dan pemesanan menu makanan restoran dengan alur pesanan ke dapur.",
    "features": [
      "Katalog menu makanan & minuman",
      "Status ketersediaan meja makan",
      "Kalkulasi tagihan bill pesanan",
      "CRUD kategori menu dinamis"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/CRUD-Restoran.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "first_flutter_app",
    "title": "Cross-Platform Mobile Application (Flutter)",
    "category": "Mobile & Desktop",
    "stack": "Flutter / Dart / Android",
    "description": "Aplikasi mobile cross-platform (Android/iOS) berbasis Flutter & Dart dengan tampilan Material 3.",
    "features": [
      "Tampilan responsif multi-device",
      "Stateful interactive widgets",
      "Navigasi routing mobile",
      "Integrasi API data eksternal"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/first_flutter_app.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Flutter",
      "Dart",
      "Android"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "LAH_vue",
    "title": "LAH App - Interactive Vue Web Experience",
    "category": "Modern Web & SPA",
    "stack": "Vue.js / Vite / JavaScript",
    "description": "Web aplikasi interaktif berbasis komponen Vue.js yang menyajikan pengalaman pengguna yang halus dan responsif.",
    "features": [
      "Komponen reaktif modular",
      "Animasi transisi halus",
      "Mobile-first responsive design",
      "Optimalisasi bundle performa tinggi"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/LAH_vue.png",
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Vue.js",
      "Vite",
      "JavaScript"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "lah-tki",
    "title": "Lah Tki",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "Sistem aplikasi web application berbasis Native / Other yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/lah-tki.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "PrintAutoCount-web",
    "title": "PrintAutoCount Production Monitoring Web",
    "category": "IoT, Monitoring & Industri",
    "stack": "PHP / JavaScript / WebSocket",
    "description": "Dashboard monitoring berbasis web untuk melihat produktivitas mesin cetak dan rekap konsumsi kertas per shift.",
    "features": [
      "Live dashboard kuota cetak percetakan",
      "Visualisasi grafik produktivitas mesin",
      "Deteksi downtime mesin cetak",
      "Laporan produksi per operator"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/PrintAutoCount-web.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP",
      "JavaScript",
      "WebSocket"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "PrintAutoCount",
    "title": "PrintAutoCount Desktop Bridge Service",
    "category": "IoT, Monitoring & Industri",
    "stack": "Node.js / Electron / Desktop",
    "description": "Aplikasi utilitas bridge untuk otomasi penghitungan lembar cetak mesin printer dan sinkronisasi ke server data produksi.",
    "features": [
      "Monitoring spooler print queue",
      "Otomatisasi counter lembar cetak",
      "Sinkronisasi socket data real-time",
      "Log audit operator percetakan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/PrintAutoCount.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Node.js",
      "Electron",
      "Desktop"
    ],
    "database": "MySQL / MongoDB Database",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "lbg-new",
    "title": "Lbg New",
    "category": "Web Application",
    "stack": "Vue.js",
    "description": "TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. TODO: Guide users through getting your code up and r",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/lbg-new.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Vue.js"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "sikel_vue",
    "title": "Sikel - Single Page App Management System",
    "category": "Modern Web & SPA",
    "stack": "Vue.js / JavaScript / CSS3",
    "description": "Aplikasi modern berbasis Vue.js dengan arsitektur reaktif SPA (Single Page Application) dan integrasi RESTful backend.",
    "features": [
      "State management Vuex / Pinia",
      "Dynamic reactive UI components",
      "Client-side routing tanpa reload halaman",
      "Form validation real-time"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sikel_vue.png",
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Vue.js",
      "JavaScript",
      "CSS3"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "lbg-email-sender-api",
    "title": "Automated Transactional Email Service API",
    "category": "IoT, Monitoring & Industri",
    "stack": "Node.js / Express / Nodemailer",
    "description": "Microservice pengiriman email otomatis (OTP, invoice, notifikasi sistem) dengan antrian pengiriman terjamin.",
    "features": [
      "Endpoint REST API pengiriman email",
      "Template email HTML responsif",
      "Fallback SMTP server",
      "Logging deliverability & status pengiriman"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/lbg-email-sender-api.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Node.js",
      "Express",
      "Nodemailer"
    ],
    "database": "MySQL / MongoDB Database",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "sjb_timbangan_api",
    "title": "SJB Digital Scale Weighbridge API Service",
    "category": "IoT, Monitoring & Industri",
    "stack": "Node.js / Express / REST API",
    "description": "REST API backend untuk menjembatani perangkat jembatan timbang (weighbridge) pabrik dengan sistem database perusahaan.",
    "features": [
      "RESTful API serial weight parsing",
      "Autentikasi API key & token",
      "Logging transaksi muatan truk (Netto/Tara/Bruto)",
      "Integritas data anti-manipulasi timbangan"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sjb_timbangan_api.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Node.js",
      "Express",
      "REST API"
    ],
    "database": "MySQL / MongoDB Database",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "laravel_inventory",
    "title": "Smart Asset & Inventory Tracker",
    "category": "Enterprise & Inventory",
    "stack": "Laravel / MySQL / Tailwind",
    "description": "Platform pelacakan aset dan stok internal perusahaan berbasis Laravel dengan riwayat mutasi perpindahan aset.",
    "features": [
      "QR Code / Labeling generator",
      "Pencatatan depresiasi aset",
      "Approval request pengambilan barang",
      "Dashboard grafik pergerakan stok"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/laravel_inventory.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "Laravel",
      "MySQL",
      "Tailwind"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "inventoryweb-laravel",
    "title": "Warehouse & Inventory Management System",
    "category": "Enterprise & Inventory",
    "stack": "Laravel / Blade / MySQL",
    "description": "Sistem manajemen pergudangan komprehensif dengan tracking SKU, minimum stock alert, dan alur purchase order ke supplier.",
    "features": [
      "Role access (Admin, Gudang, Manajer)",
      "Automated low stock notification",
      "Riwayat barang masuk (Inbound) & keluar (Outbound)",
      "Export data barang ke format Excel & PDF"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/inventoryweb-laravel.png",
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "Laravel",
      "Blade",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "rent-nodejs",
    "title": "Car & Vehicle Rental Booking API Backend",
    "category": "Modern Web & SPA",
    "stack": "Node.js / Express / MongoDB / MySQL",
    "description": "Backend layanan penyewaan armada kendaraan dengan manajemen ketersediaan mobil, durasi rental, dan kalkulasi tarif.",
    "features": [
      "Arsitektur REST API dengan Express.js",
      "Validasi jadwal ketersediaan armada",
      "Kalkulasi tarif per jam / harian",
      "Manajemen data pelanggan & sewa"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/rent-nodejs.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "sentimen_analysis_tb_nativ",
    "title": "Analisis Sentimen Twitter/X Penyakit Tuberkulosis (TB)",
    "category": "Data Science & AI",
    "stack": "Python / PHP / NLP",
    "description": "Aplikasi pengolahan bahasa alami (NLP) untuk menganalisis sentimen masyarakat mengenai penyuluhan dan bahaya penyakit TB di media sosial.",
    "features": [
      "Preprocessing teks (Cleaning, Stemming, Stopwords)",
      "Klasifikasi sentimen (Positif, Negatif, Netral)",
      "Visualisasi Wordcloud & diagram sentimen",
      "Evaluasi akurasi confusion matrix"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/sentimen_analysis_tb_nativ.png",
    "algorithm": "NLP Text Preprocessing & Lexicon-Based Naive Bayes Sentiment Classifier",
    "algorithm_desc": "Pemrosesan teks bahasa Indonesia: Case Folding, Cleansing, Tokenizing, Stopwords Removal, dan Stemming algoritma Nazief-Adriani, dilanjutkan klasifikasi probabilitas polaritas Opini (Positif, Negatif, Netral).",
    "languages": [
      "PHP 8.x",
      "JavaScript",
      "SQL",
      "Python NLP Script Engine"
    ],
    "frameworks": [
      "PHP Native OOP",
      "Bootstrap 4",
      "Sastrawi Stemmer Library",
      "Chart.js"
    ],
    "database": "MySQL (Tabel Tweet Mentah, Hasil Preprocessing, Kamus Sentimen, dan Klasifikasi)",
    "modules": [
      {
        "title": "Pembersihan & Preprocessing Teks",
        "desc": "Penghapusan mention, hashtag, tanda baca, serta ekstraksi kata dasar bahasa Indonesia."
      },
      {
        "title": "Klasifikasi Sentimen Naive Bayes",
        "desc": "Penentuan probabilitas dokumen terhadap kelas sentimen positif versus negatif."
      },
      {
        "title": "Diagram Pie Polaritas & Word Cloud",
        "desc": "Visualisasi proporsi persepsi publik dan kata kunci yang paling sering muncul."
      },
      {
        "title": "Evaluasi Akurasi & Confusion Matrix",
        "desc": "Pengukuran metrik Precision, Recall, dan F1-Score model klasifikasi teks."
      }
    ]
  },
  {
    "id": "sinarjo-vue",
    "title": "Sinarjo Portal & Enterprise Dashboard",
    "category": "Modern Web & SPA",
    "stack": "Vue.js / JavaScript / Tailwind",
    "description": "Antarmuka enterprise dashboard interaktif berbasis Vue.js untuk visualisasi data operasional dan manajemen akun pengguna.",
    "features": [
      "Dashboard widget analitik dinamis",
      "Multi-level navigation sidebar",
      "Integrasi token authentication (JWT)",
      "Komponen data table responsive"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Vue.js",
      "JavaScript",
      "Tailwind"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "abstract-java",
    "title": "Object-Oriented Design Pattern Showcase (Java)",
    "category": "Mobile & Desktop",
    "stack": "Java / OOP / Design Patterns",
    "description": "Implementasi konsep Object-Oriented Programming (OOP) tingkat lanjut mencakup Abstraction, Polymorphism, dan Encapsulation.",
    "features": [
      "Desain arsitektur abstract class & interface",
      "Implementasi Clean Code & Design Patterns",
      "Unit testing logic",
      "Dokumentasi struktur OOP"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Java",
      "OOP",
      "Design Patterns"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "inventorySholikah",
    "title": "Inventory Management & Rekap Stok UMKM",
    "category": "Enterprise & Inventory",
    "stack": "PHP Native / MySQL",
    "description": "Solusi pencatatan stok dagang untuk efisiensi pembukuan persediaan barang dagangan UMKM.",
    "features": [
      "Katalog produk & varian harga",
      "Perhitungan laba kotor penjualan",
      "Rekap transaksi harian & bulanan",
      "Sistem backup database"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "PHP Native",
      "MySQL"
    ],
    "database": "MySQL / MariaDB (Relational Schema & Indexed Foreign Keys)",
    "algorithm": "Inventory Stock Movement & Ledger Transaction Accounting",
    "algorithm_desc": "Pencatatan mutasi kuantitas stok barang, rekonsiliasi arus masuk dan keluar barang, serta pencegahan selisih inventaris riil.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "industri_native",
    "title": "Industri Native",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "Sistem aplikasi web application berbasis Native / Other yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "Prediksi-Kelas-Data",
    "title": "Sistem Prediksi Klasifikasi Data Mining",
    "category": "Data Science & AI",
    "stack": "Python / PHP / Machine Learning",
    "description": "Aplikasi implementasi algoritma klasifikasi data mining untuk pengelompokan dan prediksi pola data historis.",
    "features": [
      "Upload dataset CSV / Excel dinamis",
      "Pembagian training vs testing data",
      "Kalkulasi prediksi kelas target",
      "Visualisasi matriks akurasi"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "PHP 8.x",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SQL"
    ],
    "frameworks": [
      "Python",
      "PHP",
      "Machine Learning"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "Machine Learning Pattern Extraction & Statistical Modeling",
    "algorithm_desc": "Pelatihan model klasifikasi/regresi dengan preprocessing data, feature scaling, dan optimasi metrik evaluasi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "nextjs-portfolio-pageview-counter",
    "title": "Nextjs Portfolio Pageview Counter",
    "category": "Web Application",
    "stack": "React / Next.js",
    "description": "<div align=\"center\"> <a href=\"https://chronark.com\"><h1 align=\"center\">chronark.com</h1></a> My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": "assets/screenshots/nextjs-portfolio-pageview-counter.png",
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "React",
      "Next.js"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "testing",
    "title": "Testing",
    "category": "Web Application",
    "stack": "JavaScript / Web",
    "description": "Sistem aplikasi web application berbasis JavaScript / Web yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "Java 17 / Swing OOP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "JavaScript",
      "Web"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "roblox",
    "title": "Roblox",
    "category": "Web Application",
    "stack": "Python / Data Science",
    "description": "Sistem aplikasi web application berbasis Python / Data Science yang dirancang untuk efisiensi operasional dan manajemen data.",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "Python 3.12",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Python",
      "Data Science"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  },
  {
    "id": "anagwer",
    "title": "Anagwer",
    "category": "Web Application",
    "stack": "Native / Other",
    "description": "- 👋 Hi, I’m @anagwer - 👀 I’m interested in coding - 🌱 I’m currently learning to be happy",
    "features": [
      "Manajemen data & transaksi sistem",
      "Antarmuka pengguna responsif",
      "Laporan dan rekapitulasi data",
      "Keamanan akses pengguna"
    ],
    "is_flagship": false,
    "image": null,
    "languages": [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3"
    ],
    "frameworks": [
      "Native",
      "Other"
    ],
    "database": "Local State / Indexed Storage",
    "algorithm": "MVC Architecture & Asynchronous Event-Driven Processing",
    "algorithm_desc": "Pemisahan logika model, view, dan controller untuk pemrosesan data responsif, modular, dan terstruktur rapi.",
    "modules": [
      {
        "title": "Modul Otentikasi & Hak Akses",
        "desc": "Sistem keamanan akun pengguna dengan enkripsi kredensial dan validasi hak akses."
      },
      {
        "title": "Modul Pemrosesan Logika Sistem",
        "desc": "Pengolahan alur kerja utama aplikasi sesuai aturan bisnis yang diterapkan."
      },
      {
        "title": "Modul Antarmuka Responsif & Interaktif",
        "desc": "Tampilan antarmuka dinamis yang nyaman diakses pada perangkat desktop maupun mobile."
      },
      {
        "title": "Modul Rekapitulasi Data & Ekspor",
        "desc": "Penyajian ringkasan data operasional dan kemudahan pengelolaan arsip."
      }
    ]
  }
];
