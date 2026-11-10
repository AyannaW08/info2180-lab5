document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('country');
  const out = document.getElementById('result');

  const search = (extra = '') => {
    fetch(`world.php?country=${encodeURIComponent(input.value.trim())}${extra}`)
      .then(r => r.text())
      .then(html => {
        out.innerHTML = html;
      });
  };

  document.getElementById('lookup').addEventListener('click', () => search());
  document.getElementById('lookup-cities').addEventListener('click', () => search('&lookup=cities'));
});