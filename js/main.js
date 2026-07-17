// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Donate amount selector
  var amounts = document.querySelectorAll('.donate-amounts button');
  amounts.forEach(function (btn) {
    btn.addEventListener('click', function () {
      amounts.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var input = document.getElementById('donate-custom');
      if (input) input.value = btn.dataset.amount || '';
    });
  });

  // Simple form submission feedback (no backend wired up yet)
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! This form is a placeholder — connect it to your email service or backend before launch.');
      form.reset();
    });
  });
});
