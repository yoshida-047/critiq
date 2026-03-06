// ── search.js ──
(function () {
  const wrap = document.querySelector('.search-wrap');
  const input = document.querySelector('.search-input');
  const results = document.querySelector('.search-results');
  if (!wrap || !input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';

    if (!q) { results.classList.remove('visible'); return; }

    const games = Object.values(GAMES);
    const matches = games.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.developer.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 6);

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">No results for "${input.value}"</div>`;
    } else {
      results.innerHTML = matches.map(g => `
        <a class="search-result-item" href="review.html?game=${g.slug}">
          <div class="search-result-img">
            <img src="${g.image}" alt="${g.title}" />
          </div>
          <div class="search-result-info">
            <div class="search-result-title">${g.title}</div>
            <div class="search-result-meta">${g.genre} · ${g.release.split(' ').pop()}</div>
          </div>
          <div class="search-result-score">${g.score}</div>
        </a>
      `).join('');
    }

    results.classList.add('visible');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) {
      results.classList.remove('visible');
      results.innerHTML = '';
    }
  });

  // Close on Escape
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      results.classList.remove('visible');
      results.innerHTML = '';
    }
  });
})();