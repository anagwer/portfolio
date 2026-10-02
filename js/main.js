// Main Portfolio Logic & Interactions
document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let currentStack = 'all';
  let searchQuery = '';
  let currentPage = 1;
  const ITEMS_PER_PAGE = 9;
  
  // Elements
  const projectsGrid = document.getElementById('projects-grid');
  const projectCountEl = document.getElementById('project-count');
  const searchInput = document.getElementById('search-input');
  const stackFilterSelect = document.getElementById('stack-filter');
  const categoryButtons = document.querySelectorAll('.filter-btn');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const paginationContainer = document.getElementById('pagination-container');
  const detailModal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
  
  // Category styling helper
  function getCategoryClass(cat) {
    if (cat.includes('Pakar') || cat.includes('SPK')) return 'cat-spk';
    if (cat.includes('Inventory') || cat.includes('Enterprise')) return 'cat-inventory';
    if (cat.includes('Pendidikan') || cat.includes('Akademik')) return 'cat-education';
    if (cat.includes('POS') || cat.includes('Retail') || cat.includes('FnB')) return 'cat-pos';
    if (cat.includes('IoT') || cat.includes('Industri') || cat.includes('Monitoring')) return 'cat-iot';
    if (cat.includes('AI') || cat.includes('Data')) return 'cat-ai';
    if (cat.includes('Kesehatan') || cat.includes('Publik')) return 'cat-health';
    return 'cat-web';
  }

  // Category Icon helper
  function getCategoryIcon(cat) {
    if (cat.includes('Pakar') || cat.includes('SPK')) return 'bi-diagram-3-fill';
    if (cat.includes('Inventory') || cat.includes('Enterprise')) return 'bi-boxes';
    if (cat.includes('Pendidikan') || cat.includes('Akademik')) return 'bi-mortarboard-fill';
    if (cat.includes('POS') || cat.includes('Retail') || cat.includes('FnB')) return 'bi-shop';
    if (cat.includes('IoT') || cat.includes('Industri') || cat.includes('Monitoring')) return 'bi-cpu-fill';
    if (cat.includes('AI') || cat.includes('Data')) return 'bi-graph-up-arrow';
    if (cat.includes('Kesehatan') || cat.includes('Publik')) return 'bi-heart-pulse-fill';
    return 'bi-window-stack';
  }

  // Render Projects Grid with Pagination
  function renderProjects(scrollUp = false) {
    const filtered = PROJECTS_DATA.filter(p => {
      // Category filter
      let matchCat = true;
      if (currentCategory !== 'all') {
        matchCat = p.category.toLowerCase().includes(currentCategory.toLowerCase());
      }

      // Stack filter
      let matchStack = true;
      if (currentStack !== 'all') {
        matchStack = p.stack.toLowerCase().includes(currentStack.toLowerCase());
      }

      // Search query filter
      let matchSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inStack = p.stack.toLowerCase().includes(q);
        const inCat = p.category.toLowerCase().includes(q);
        const inId = p.id.toLowerCase().includes(q);
        matchSearch = inTitle || inDesc || inStack || inCat || inId;
      }

      return matchCat && matchStack && matchSearch;
    });

    const totalProjects = filtered.length;
    const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE) || 1;
    
    // Safety check on current page
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, totalProjects);
    const paginatedItems = filtered.slice(startIdx, endIdx);

    // Update count display
    if (projectCountEl) {
      if (totalProjects === 0) {
        projectCountEl.textContent = `0 proyek ditemukan`;
      } else {
        projectCountEl.textContent = `Menampilkan ${startIdx + 1}–${endIdx} dari total ${totalProjects} proyek (Halaman ${currentPage}/${totalPages})`;
      }
    }

    if (!projectsGrid) return;

    if (totalProjects === 0) {
      projectsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
          <h4 class="text-highlight">Tidak ada proyek yang sesuai</h4>
          <p class="text-muted">Coba ubah kata kunci pencarian atau reset filter kategori/stack.</p>
          <button class="btn btn-outline-custom mt-2" onclick="resetFilters()">Reset Filter</button>
        </div>
      `;
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    // Render cards
    projectsGrid.innerHTML = paginatedItems.map(p => {
      const catClass = getCategoryClass(p.category);
      const catIcon = getCategoryIcon(p.category);
      const flagshipBadge = p.is_flagship ? `<span class="badge badge-flagship me-2"><i class="bi bi-star-fill text-warning me-1"></i> Flagship</span>` : '';
      
      const featuresHtml = (p.features || []).slice(0, 3).map(f => `
        <li><i class="bi bi-check-circle-fill"></i> <span>${f}</span></li>
      `).join('');

      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="project-card ${p.is_flagship ? 'flagship-card' : ''}">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="project-category-badge ${catClass}">
                  <i class="bi ${catIcon} me-1"></i> ${p.category}
                </span>
                ${flagshipBadge}
              </div>
              <h3 class="project-title">${p.title}</h3>
              <div class="project-stack-tag">
                <i class="bi bi-code-slash text-primary"></i> ${p.stack}
              </div>
              <p class="project-desc">${p.description}</p>
              
              <ul class="project-features-list">
                ${featuresHtml}
              </ul>
            </div>

            <div class="mt-3">
              <button class="btn btn-card-detail" onclick="openProjectModal('${p.id}')">
                <span>Lihat Studi Kasus</span>
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Render Pagination UI
    renderPagination(totalPages);

    // Optional smooth scroll to top of project section when changing pages
    if (scrollUp) {
      const section = document.getElementById('proyek');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Render Pagination Buttons
  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let paginationHtml = `
      <nav aria-label="Navigasi Halaman Proyek" class="pagination-wrapper d-flex justify-content-center">
        <ul class="pagination pagination-custom flex-wrap justify-content-center">
          <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage - 1})" aria-label="Sebelumnya">
              <i class="bi bi-chevron-left me-1"></i> Prev
            </button>
          </li>
    `;

    // Max visible page numbers logic
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        paginationHtml += `
          <li class="page-item ${i === currentPage ? 'active' : ''}">
            <button class="page-link" onclick="changePage(${i})">${i}</button>
          </li>
        `;
      } else if (
        (i === currentPage - 3 && i > 1) || 
        (i === currentPage + 3 && i < totalPages)
      ) {
        paginationHtml += `
          <li class="page-item disabled">
            <span class="page-link">...</span>
          </li>
        `;
      }
    }

    paginationHtml += `
          <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <button class="page-link" onclick="changePage(${currentPage + 1})" aria-label="Selanjutnya">
              Next <i class="bi bi-chevron-right ms-1"></i>
            </button>
          </li>
        </ul>
      </nav>
    `;

    paginationContainer.innerHTML = paginationHtml;
  }

  // Change page function
  window.changePage = function(page) {
    currentPage = page;
    renderProjects(true);
  };

  // Open Modal with project details
  window.openProjectModal = function(projectId) {
    const p = PROJECTS_DATA.find(item => item.id === projectId);
    if (!p) return;

    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-cat-badge').textContent = p.category;
    document.getElementById('modal-cat-badge').className = `project-category-badge ${getCategoryClass(p.category)}`;
    document.getElementById('modal-stack').textContent = p.stack;
    document.getElementById('modal-desc').textContent = p.description;
    
    // Features list in modal
    const modalFeaturesList = document.getElementById('modal-features');
    if (modalFeaturesList && p.features) {
      modalFeaturesList.innerHTML = p.features.map(f => `
        <div class="col-md-6 mb-2">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-check2-circle text-success fs-5 flex-shrink-0"></i>
            <span class="text-main">${f}</span>
          </div>
        </div>
      `).join('');
    }

    detailModal.show();
  };

  // Service Detail Modal Logic (anagwer Services)
  const serviceDetailModalEl = document.getElementById('serviceDetailModal');
  const serviceDetailModal = serviceDetailModalEl ? new bootstrap.Modal(serviceDetailModalEl) : null;

  const SERVICES_DATA = {
    skripsi: {
      title: 'Asistensi & Bimbingan Skripsi / Tugas Akhir IT',
      target: 'KHUSUS JURUSAN IT / ILMU KOMPUTER',
      targetBadgeClass: 'bg-danger-subtle text-danger border border-danger-subtle',
      desc: 'Layanan asistensi dan pendampingan komprehensif pembuatan program skripsi, tugas akhir (TA), dan capstone project dari nol atau melanjutkan sistem yang bermasalah/error sampai tuntas dan siap disidangkan.',
      scope: [
        'Pembuatan sistem aplikasi berbasis Web (Laravel, CodeIgniter, Vue.js, React, Node.js, PHP Native)',
        'Aplikasi Mobile (Flutter, Android Java, Kotlin)',
        'Sistem Pendukung Keputusan / SPK (Certainty Factor, SAW, WASPAS, AHP, TOPSIS, SMART, Promethee)',
        'Machine Learning, Data Mining & NLP (Klasifikasi, Clustering, Analisis Sentimen, Prediksi / Forecasting)',
        'Perancangan arsitektur basis data (ERD, Normalisasi, Relasi Tabel, Query Optimization)',
        'Pembuatan Diagram UML (Use Case, Activity, Sequence, Class Diagram) & DFD',
        'Bedah logika kodingan & mentoring 1-on-1 agar mahasiswa siap menjawab pertanyaan dosen penguji saat sidang'
      ],
      deliverables: [
        'Full Source Code aplikasi bersih, rapi, dan siap running',
        'File database (.sql) dan panduan konfigurasi lokal (XAMPP / Laragon)',
        'Video demonstrasi cara menjalankan sistem dan penjelasan alur fitur',
        'Garansi pendampingan revisi dari dosen penguji hingga dinyatakan LULUS / ACC'
      ],
      waMessage: 'Halo anagwer, saya mau konsultasi Asistensi Skripsi / Tugas Akhir IT'
    },
    website: {
      title: 'Jasa Pembuatan Website & WordPress',
      target: 'TERBUKA UNTUK SEMUA JURUSAN & BISNIS',
      targetBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      desc: 'Layanan pembuatan website siap online dengan desain modern, cepat, dan mobile-friendly untuk instansi, pelaku usaha UMKM, organisasi kampus, portofolio karir, maupun tugas kuliah.',
      scope: [
        'Website CMS WordPress (Mudah diedit sendiri, tanpa perlu keahlian koding)',
        'Website Custom Code (Laravel, Vue.js, PHP, Bootstrap, Tailwind) untuk kebutuhan sistem kompleks',
        'Company Profile & Profil Bisnis / Lembaga / Yayasan',
        'Landing Page Promosi Produk / Event / Jasa dengan konversi tinggi',
        'Website Katalog Produk UMKM & Toko Online',
        'Integrasi tombol order otomatis ke WhatsApp dan integrasi Google Maps'
      ],
      deliverables: [
        'Website live siap akses dengan domain & hosting',
        'Akun login admin CMS dan panduan video cara update artikel/produk',
        'Desain responsif optimal di HP, tablet, dan laptop',
        'Dukungan teknis dan garansi fungsional sistem'
      ],
      waMessage: 'Halo anagwer, saya mau order Pembuatan Website / WordPress'
    },
    tugas: {
      title: 'Bantuan Pengerjaan Tugas Harian & Laporan Praktikum',
      target: 'TERBUKA UNTUK SEMUA JURUSAN',
      targetBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      desc: 'Layanan bantuan penyelesaian tugas-tugas kuliah harian, modul praktikum komputer, tugas pemrograman, maupun tugas pengolahan data dengan pengerjaan kilat dan hasil rapi siap kumpul.',
      scope: [
        'Tugas Pemrograman Dasar & Lanjutan (PHP, Python, Java, C++, JavaScript, HTML/CSS)',
        'Tugas Basis Data & Query SQL (MySQL, PostgreSQL, Oracle)',
        'Penyusunan Laporan Praktikum Komputer / Modul Kuliah dengan format penulisan baku',
        'Pengolahan Data & Formula Spreadsheet (Microsoft Excel, Google Sheets)',
        'Pengetikan & perapihan format dokumen makalah/tugas kuliah sesuai pedoman kampus',
        'Bisa request pengerjaan kilat (deadline mepet / same-day service)'
      ],
      deliverables: [
        'File master pekerjaan (.docx, .pdf, .xlsx, atau source code)',
        'Tangkapan layar (screenshot) bukti hasil eksekusi/running program',
        'Penjelasan singkat poin-poin penting agar mahasiswa paham isi tugasnya',
        'Garansi cek dan revisi jika ada instruksi tugas yang perlu disesuaikan'
      ],
      waMessage: 'Halo anagwer, saya butuh bantuan pengerjaan Tugas Harian / Laporan Praktikum'
    },
    ppt: {
      title: 'Desain Slide Presentasi Sidang PPT & Pitch Deck Interaktif',
      target: 'TERBUKA UNTUK SEMUA JURUSAN',
      targetBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      desc: 'Layanan desain slide presentasi PowerPoint dan Canva profesional. Kami merangkum materi laporan kamu yang padat menjadi slide visual yang elegan, fokus pada poin kunci, dan memukau audiens.',
      scope: [
        'Slide Presentasi Sidang Skripsi & Tugas Akhir (Semua Jurusan)',
        'Slide Seminar Proposal (Sempro) & Kolokium Akademik',
        'Pitch Deck Presentasi Bisnis, Proposal Pendanaan, & Lomba Bisnis Plan',
        'Visualisasi infografis, bagan alur proses, dan grafik perbandingan data',
        'Animasi transisi halus (smooth motion) yang profesional tanpa berlebihan',
        'Desain disesuaikan dengan warna identitas kampus atau branding instansi'
      ],
      deliverables: [
        'File master PowerPoint (.pptx) yang 100% bisa diedit kembali',
        'Link akses template Canva (opsional sesuai request)',
        'File presentasi format PDF resolusi tinggi',
        'Font khusus yang digunakan agar tampilan tidak berantakan di laptop lain'
      ],
      waMessage: 'Halo anagwer, saya mau order Desain Slide Presentasi Sidang PPT'
    },
    design: {
      title: 'UI/UX Design & Desain Grafis Digital',
      target: 'TERBUKA UNTUK SEMUA JURUSAN & UMUM',
      targetBadgeClass: 'bg-success-subtle text-success border border-success-subtle',
      desc: 'Layanan pembuatan aset visual digital dan antarmuka aplikasi. Meliputi mockup antarmuka prototipe Figma untuk tugas kuliah maupun materi publikasi visual promosi.',
      scope: [
        'UI/UX Design Aplikasi Mobile & Website di Figma (Lengkap dengan Prototype Klik)',
        'Desain Poster Ilmiah / Poster Penelitian untuk Publikasi & Lomba',
        'Desain E-Brochure, Flyer Promosi, & Banner Digital',
        'Desain Feed & Story Instagram Promosi Usaha',
        'Desain Template Dokumen & Sertifikat Digital'
      ],
      deliverables: [
        'Link project Figma interaktif (Prototype bisa dites langsung)',
        'File ekspor format gambar definisi tinggi (PNG, JPG) dan PDF siap cetak',
        'Revisi elemen grafis hingga sesuai ekspektasi'
      ],
      waMessage: 'Halo anagwer, saya mau konsultasi UI/UX Design / Desain Grafis Digital'
    }
  };

  window.openServiceModal = function(serviceKey) {
    const s = SERVICES_DATA[serviceKey];
    if (!s || !serviceDetailModal) return;

    document.getElementById('modal-service-title').textContent = s.title;
    const badgeEl = document.getElementById('modal-service-badge');
    badgeEl.textContent = s.target;
    badgeEl.className = `badge ${s.targetBadgeClass} fw-bold mb-2`;
    document.getElementById('modal-service-desc').textContent = s.desc;

    // Scope list
    const scopeContainer = document.getElementById('modal-service-scope');
    if (scopeContainer) {
      scopeContainer.innerHTML = s.scope.map(item => `
        <div class="col-md-6 mb-2">
          <div class="d-flex align-items-start gap-2">
            <i class="bi bi-check-circle-fill text-primary mt-1 flex-shrink-0"></i>
            <span class="text-main small">${item}</span>
          </div>
        </div>
      `).join('');
    }

    // Deliverables list
    const deliverableContainer = document.getElementById('modal-service-deliverables');
    if (deliverableContainer) {
      deliverableContainer.innerHTML = s.deliverables.map(item => `
        <div class="col-md-6 mb-2">
          <div class="d-flex align-items-start gap-2">
            <i class="bi bi-gift-fill text-success mt-1 flex-shrink-0"></i>
            <span class="text-main small">${item}</span>
          </div>
        </div>
      `).join('');
    }

    // WA Button
    const waBtn = document.getElementById('modal-service-wa-btn');
    if (waBtn) {
      const encodedMsg = encodeURIComponent(s.waMessage);
      waBtn.href = `https://wa.me/628988865557?text=${encodedMsg}`;
    }

    serviceDetailModal.show();
  };

  // Reset Filters
  window.resetFilters = function() {
    currentCategory = 'all';
    currentStack = 'all';
    searchQuery = '';
    currentPage = 1;
    if (searchInput) searchInput.value = '';
    if (stackFilterSelect) stackFilterSelect.value = 'all';
    categoryButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
    });
    renderProjects();
  };

  // Event Listeners for Filter Buttons
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      currentPage = 1; // Reset to page 1 on filter
      renderProjects();
    });
  });

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentPage = 1; // Reset to page 1 on search
      renderProjects();
    });
  }

  // Stack filter select dropdown
  if (stackFilterSelect) {
    stackFilterSelect.addEventListener('change', (e) => {
      currentStack = e.target.value;
      currentPage = 1; // Reset to page 1 on stack change
      renderProjects();
    });
  }

  // Theme Toggle (Dark / Light)
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-bs-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      document.documentElement.setAttribute('data-bs-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
      themeToggleBtn.title = 'Beralih ke Dark Mode';
    } else {
      themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
      themeToggleBtn.title = 'Beralih ke Light Mode';
    }
  }

  // Render initial projects
  renderProjects();
});
