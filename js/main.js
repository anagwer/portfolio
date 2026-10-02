// Main Portfolio Logic & Interactions
document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let currentStack = 'all';
  let searchQuery = '';
  
  // Elements
  const projectsGrid = document.getElementById('projects-grid');
  const projectCountEl = document.getElementById('project-count');
  const searchInput = document.getElementById('search-input');
  const stackFilterSelect = document.getElementById('stack-filter');
  const categoryButtons = document.querySelectorAll('.filter-btn');
  const themeToggleBtn = document.getElementById('theme-toggle');
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

  // Render Projects Grid
  function renderProjects() {
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

    // Update count display
    if (projectCountEl) {
      projectCountEl.textContent = `Menampilkan ${filtered.length} dari ${PROJECTS_DATA.length} proyek`;
    }

    if (!projectsGrid) return;

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
          <h4 class="text-highlight">Tidak ada proyek yang sesuai</h4>
          <p class="text-muted">Coba ubah kata kunci pencarian atau reset filter kategori/stack.</p>
          <button class="btn btn-outline-custom mt-2" onclick="resetFilters()">Reset Filter</button>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => {
      const catClass = getCategoryClass(p.category);
      const catIcon = getCategoryIcon(p.category);
      const flagshipBadge = p.is_flagship ? `<span class="badge badge-flagship me-2"><i class="bi bi-star-fill text-warning me-1"></i> Flagship</span>` : '';
      
      const featuresHtml = (p.features || []).slice(0, 3).map(f => `
        <li><i class="bi bi-check-circle-fill"></i> <span>${f}</span></li>
      `).join('');

      return `
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
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
  }

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
      renderProjects();
    });
  });

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Stack filter select dropdown
  if (stackFilterSelect) {
    stackFilterSelect.addEventListener('change', (e) => {
      currentStack = e.target.value;
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
