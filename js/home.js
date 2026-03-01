// ── Stagger latest review items on load
document.querySelectorAll('.latest-item').forEach((item, i) => {
  item.style.animationDelay = `${0.08 * i + 0.2}s`;
});