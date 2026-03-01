// ============================================
// review.js — loads correct game from URL param
// ============================================

const params = new URLSearchParams(window.location.search);
const slug   = params.get('game');
const game   = GAMES[slug];

// ── 404 fallback
if (!game) {
  document.title = 'CRITIQ — Review Not Found';
  document.querySelector('.review-hero').innerHTML = `
    <div style="padding:4rem 3rem; font-family:var(--font-mono); color:var(--text-dim);">
      <p style="color:var(--accent); font-size:0.75rem; letter-spacing:0.12em;">// 404</p>
      <h1 style="font-family:var(--font-head); font-size:4rem; margin:1rem 0;">Review Not Found</h1>
      <p>No review exists for "<strong>${slug || 'unknown'}</strong>".</p>
      <a href="browse.html" style="color:var(--accent); font-size:0.8rem; margin-top:1.5rem; display:inline-block;">← Back to all reviews</a>
    </div>`;
  document.querySelector('.screenshot-gallery').style.display = 'none';
  document.querySelector('.breakdown-bar').style.display      = 'none';
  document.querySelector('.review-body').style.display        = 'none';
  throw new Error('Game not found: ' + slug);
}

// ── Page title
document.title = `CRITIQ — ${game.title} Review`;

// ── Hero
document.querySelector('.review-img').src              = game.image;
document.querySelector('.review-img').alt              = game.title;
document.querySelector('.review-game-logo').textContent = game.title;
document.querySelector('.review-title').textContent    = game.title;
document.querySelector('.review-developer').textContent = `${game.developer} · ${game.release}`;
document.querySelector('.score-num').textContent       = game.score;
document.querySelector('.score-verdict').textContent   = game.verdict;
document.querySelector('.score-verdict').className     = `score-verdict ${game.verdictClass}`;

// Tags
document.querySelector('.review-tags').innerHTML =
  game.tags.map(t => `<span class="tag">${t}</span>`).join('');

// Detail grid
const details = [
  ['Developer', game.developer],
  ['Publisher', game.publisher],
  ['Genre',     game.genre],
  ['Platform',  game.platforms],
  ['Release',   game.release],
  ['Playtime',  game.playtime],
];
document.querySelector('.detail-grid').innerHTML = details.map(([label, val]) => `
  <div class="detail-item">
    <span class="detail-label">${label}</span>
    <span class="detail-value">${val}</span>
  </div>`).join('');

// ── Screenshot gallery
const screenshots = game.screenshots && game.screenshots.length
  ? game.screenshots
  : [game.image]; // fallback to banner if no screenshots defined

const mainImg    = document.getElementById('galleryMain');
const thumbsWrap = document.getElementById('galleryThumbs');
const counter    = document.getElementById('galleryCounter');
let current = 0;

function setSlide(index) {
  current = (index + screenshots.length) % screenshots.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = screenshots[current];
    mainImg.style.opacity = 1;
  }, 150);
  counter.textContent = `${current + 1} / ${screenshots.length}`;
  document.querySelectorAll('.gallery-thumb').forEach((t, i) =>
    t.classList.toggle('active', i === current)
  );
}

// Build thumbnails
thumbsWrap.innerHTML = screenshots.map((src, i) => `
  <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
    <img src="${src}" alt="Screenshot ${i + 1}" loading="lazy" />
  </div>`).join('');

thumbsWrap.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => setSlide(+thumb.dataset.index));
});

setSlide(0);

document.getElementById('galleryPrev').addEventListener('click', () => setSlide(current - 1));
document.getElementById('galleryNext').addEventListener('click', () => setSlide(current + 1));

// Keyboard arrow navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  setSlide(current - 1);
  if (e.key === 'ArrowRight') setSlide(current + 1);
});

// ── Score breakdown
document.querySelector('.breakdown-scores').innerHTML =
  Object.entries(game.breakdown).map(([cat, val]) => `
  <div class="breakdown-item">
    <span class="b-category">${cat}</span>
    <div class="b-bar-wrap"><div class="b-bar" style="--val: ${val}%"></div></div>
    <span class="b-num">${val}</span>
  </div>`).join('');

// ── Sidebar
document.querySelector('.aside-breakdown').innerHTML =
  Object.entries(game.breakdown).map(([cat, val]) => `
  <div class="aside-row"><span>${cat}</span><span class="aside-val">${val}</span></div>`).join('');

// ── Review body
let bodyHTML = `<p class="review-lede">${game.lede}</p>`;
game.body.forEach(s => {
  if (s.heading) bodyHTML += `<h2 class="review-subhead">${s.heading}</h2>`;
  bodyHTML += `<p>${s.text}</p>`;
});
bodyHTML += `<blockquote class="pull-quote">"${game.pullQuote}"</blockquote>`;
bodyHTML += `
  <div class="pros-cons">
    <div class="pros-col">
      <div class="pc-label pros-label">PROS</div>
      <ul class="pc-list">${game.pros.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
    <div class="cons-col">
      <div class="pc-label cons-label">CONS</div>
      <ul class="pc-list">${game.cons.map(c => `<li>${c}</li>`).join('')}</ul>
    </div>
  </div>`;
document.querySelector('.review-content').innerHTML = bodyHTML;

// ── Sidebar score + meta
document.querySelector('.aside-score').innerHTML = `
  <span style="font-family:var(--font-head);font-size:5rem;color:var(--accent);line-height:1;">${game.score}</span>
  <span class="verdict ${game.verdictClass}">${game.verdict}</span>`;

document.querySelector('.aside-meta').innerHTML = `
  <div><span class="detail-label">Platform</span><span class="detail-value">${game.platforms}</span></div>
  <div><span class="detail-label">Genre</span><span class="detail-value">${game.genre}</span></div>
  <div><span class="detail-label">Release</span><span class="detail-value">${game.release}</span></div>`;

// ── Floating buttons
const floatingBtns = document.querySelector('.floating-btns');
window.addEventListener('scroll', () => {
  floatingBtns.classList.toggle('visible', window.scrollY > 400);
});
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});