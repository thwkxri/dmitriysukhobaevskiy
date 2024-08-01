document.getElementById('burger').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('open');

  if (document.querySelector('header').classList.contains('open')) {
    document.body.style.overflow = 'hidden';

    // Заблокируем скроллинг на мобильных устройствах
    document.addEventListener('touchmove', preventDefault, { passive: false });
  } else {
    document.body.style.overflow = 'visible';

    // Уберем блокировку скроллинга на мобильных устройствах
    document.removeEventListener('touchmove', preventDefault, { passive: false });
  }
});

function preventDefault(e) {
  e.preventDefault();
}

const links = document.querySelectorAll('.header__links a, .header__logo__name');

// Добавляем обработчик события для каждой ссылки
links.forEach(link => {
  link.addEventListener('click', function() {
    // Удаляем класс 'open' у элемента header
    document.querySelector('header').classList.remove('open');

    // Разрешаем скроллинг
    document.body.style.overflow = 'visible';
    document.removeEventListener('touchmove', preventDefault, { passive: false });
  });
  link.addEventListener('click', smoothScroll);
});

// Функция для плавного скролла к якорю
function smoothScroll(e) {
  e.preventDefault(); // Предотвращаем стандартное поведение ссылки

  // Получаем id элемента, к которому нужно прокрутить страницу
  const targetId = this.getAttribute('href').substring(1); // удаляем решетку из id

  // Находим элемент по его id
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Прокручиваем страницу к найденному элементу
    targetElement.scrollIntoView({
      behavior: 'smooth' // Добавляем плавность прокрутки
    });
  }
}