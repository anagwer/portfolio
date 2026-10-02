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
