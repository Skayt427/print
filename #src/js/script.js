document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector('.js-burger')
  burger.addEventListener('click', function () {
    this.closest('.header').classList.toggle('active');
  });

  new Swiper('.js-banner-slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  let body = document.querySelector('body');
  let modalTrigger = document.querySelectorAll('.js-modal-trigger');

  if (modalTrigger.length) {
    modalTrigger.forEach(trigger => {
      // Открыетие
      trigger.addEventListener('click', function () {
        let trigger = this;
        let triggerData = this.dataset.modal;
        let modal = document.querySelector('.js-modal[data-modal="' + triggerData + '"]');
        modal.classList.add('active');
        body.classList.add('noscroll');
      });
    });

    let modal = document.querySelectorAll('.modal');
    modal.forEach(modal => {
      // Закрытие через клик на крестик
      let closeBtn = modal.querySelector('.modal__close');
      closeBtn.addEventListener('click', function () {
        this.closest('.modal').classList.remove('active');
        body.classList.remove('noscroll');
      });

      // Закрытие через клик по фону
      let modalBg = modal.querySelector('.js-modal-bg');
      modalBg.addEventListener('click', function () {
        this.closest('.modal').classList.remove('active');
        body.classList.remove('noscroll');
      });
    });
  };
});