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

  // Leadership board: full-profile modal
  var boardCards = document.querySelectorAll('.board-card');
  if (boardCards.length) {
    var lastTrigger = null;
    var openModal = function (id, trigger) {
      var modal = document.getElementById(id);
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      lastTrigger = trigger;
      var closeBtn = modal.querySelector('.board-modal-close');
      if (closeBtn) closeBtn.focus();
    };
    var closeModal = function (modal) {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      if (lastTrigger) lastTrigger.focus();
    };
    boardCards.forEach(function (card) {
      card.addEventListener('click', function () {
        openModal(card.dataset.modalTarget, card);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.modalTarget, card);
        }
      });
    });
    document.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', function () {
        closeModal(el.closest('.board-modal'));
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var openModalEl = document.querySelector('.board-modal:not([hidden])');
        if (openModalEl) closeModal(openModalEl);
      }
    });
  }

  // Homepage photo slideshow
  var slideshow = document.querySelector('.slideshow');
  if (slideshow) {
    var slides = Array.prototype.slice.call(slideshow.querySelectorAll('.slide'));
    var dotsContainer = slideshow.querySelector('.slideshow-dots');
    var current = 0;
    var timer;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () {
        goTo(i);
        resetTimer();
      });
      dotsContainer.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsContainer.children);

    function goTo(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    slideshow.querySelector('.slideshow-arrow.next').addEventListener('click', function () {
      next();
      resetTimer();
    });
    slideshow.querySelector('.slideshow-arrow.prev').addEventListener('click', function () {
      prev();
      resetTimer();
    });
    slideshow.addEventListener('mouseenter', function () { clearInterval(timer); });
    slideshow.addEventListener('mouseleave', resetTimer);
    resetTimer();
  }

  // Simple form submission feedback (no backend wired up yet)
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! This form is a placeholder — connect it to your email service or backend before launch.');
      form.reset();
    });
  });

  // Forms submitted instantly in the background (no page reload, no mail app)
  document.querySelectorAll('form[data-ajax]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            showToast('Thanks! Your message has been sent.');
            form.reset();
          } else {
            showToast('Something went wrong — please try again or email us directly.', true);
          }
        })
        .catch(function () {
          showToast('Something went wrong — please try again or email us directly.', true);
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  });

  function showToast(message, isError) {
    var toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.toggle('toast-error', !!isError);
    // Force reflow so the transition replays on repeated toasts
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      toast.classList.remove('show');
    }, 4000);
  }
});
