// Разработка оценки контента на веб-странице

// Условие задачи
// Задание заключается в создании функционала оценки контента на веб-странице. Когда пользователь нажимает на звездочку, на нее и на все предыдущие звезды должен добавиться класс, который изменяет их цвет.

// Процесс реализации
// Собираем все звезды в псевдоколлекцию, используя для этого необходимый метод
// Используя цикл, на каждую звезду добавляем обработчик события для изменения ее цвета
// Пишем логику обработчика события
let collectionStars = document.querySelectorAll('.star');
console.log(collectionStars);
for (let i = 0; i < collectionStars.length; i++) {
    collectionStars[i].addEventListener('click', () => {
        for (let j = 0; j < i; j++) {
            collectionStars[i].classList.add('.star_active');
        }
        for (let j = i + 1; j < collectionStars.length; j++) {
            collectionStars[i].classList.remove('.star_active');
        }
    });
}