document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelectorAll('.js-burger')
  burger.forEach(burger => {
    burger.addEventListener('click', function () {
      this.closest('.header').classList.toggle('active');
    });
  });

  let overlay = document.querySelector('.overlay')
  overlay.addEventListener('click', function () {
    this.closest('.header').classList.remove('active');
  });

  new Swiper('.js-banner-slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

  let select = document.querySelectorAll('.js-select')
  if (select) {
    select.forEach(select => {
      let selectValue = select.querySelector('.js-select-value');
      let selectTop = select.querySelector('.js-select-top');
      let selectInput = select.querySelector('.js-select-input');
      let selectItems = select.querySelectorAll('.js-select-item');

      selectTop.addEventListener('click', function () {
        select.classList.toggle('open');
      });

      selectItems.forEach(selectItem => {
        selectItem.addEventListener('click', function () {
          let itemValue = this.getAttribute('data-value');
          let itemText = this.textContent;
          select.classList.add('selected');
          select.classList.remove('open');
          let selectItemActive = select.querySelector('.js-select-item.active');
          if (selectItemActive) {
            selectItemActive.classList.remove('active');
          };
          this.classList.add('active');
          selectInput.value = itemValue;
          selectValue.innerHTML = itemText;
        });
      });
    });
  };
});