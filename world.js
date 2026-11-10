document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('country');
  const out = document.getElementById('result');

  document.getElementById('lookup').addEventListener('click', () => {
    fetch(`world.php?country=${encodeURIComponent(input.value.trim())}`)
      .then(r => r.text())
      .then(html => {
        out.innerHTML = html;
      });
  });
});