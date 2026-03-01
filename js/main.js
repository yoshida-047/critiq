// ── Stagger card entrance animations
// Each card gets a slightly later delay so they appear one by one
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.animationDelay = `${0.05 * i + 0.25}s`;
});

// ── Filter chips
// Grabs all chip buttons, all cards, and the empty state message
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card[data-genre]');
const empty = document.getElementById('emptyState');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    // Remove 'active' from all chips, add it to the clicked one
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;
    let visible = 0;

    // Show/hide cards based on their data-genre attribute
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.genre === filter;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // If nothing matches, show the empty state message
    empty.style.display = visible === 0 ? 'block' : 'none';
  });
});