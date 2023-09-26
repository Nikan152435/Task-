// Разработка оценки контента на веб-странице

const collectionStarsArray = Array.from(document.getElementsByClassName('star'));
//querySelectorAll() позволяет нам искать и возвращать все 
// //элементы в документе .
// //console.log(collectionStars);
for (let i = 0; i < collectionStarsArray.length; i++) {
    collectionStarsArray[i].addEventListener('click', () => { 
    //addEventListener() — это встроенная функция в JavaScript, 
//которая принимает событие для прослушивания и второй аргумент, который вызывается всякий раз, когда описанное событие запускается
//здесь мы навешиваем/назначаем/устанавливаем слушателя события клик на текущий элемент из найденных. i используется только здесь, 
//внутри стрелочной ф-ии сработало замыкание (это тоже проходили) и она при срабатывании события будет такой, на какой звезде нажали.   
        for (let j = 0; j <= i; j++) {
            collectionStarsArray[j].classList.add('star_active');
//создаём цикл с переменной-счётчиком j, но внутри почему-то устанавливаем 
//класс для зафиксированного (замыкание) при установки слушателя элемента. Т.е. при клике на 
//третьей звезде i = 2. 
        }
    //     for (let j = i + 1; j < collectionStars.length; j++) {
    //        collectionStars[j].classList.remove('star_active');
    //    }
    });
}





// Процесс реализации:
// Собираем все звезды в псевдоколлекцию, используя для этого необходимый метод
// Используя цикл, на каждую звезду добавляем обработчик события для изменения ее цвета
// Пишем логику обработчика события

// Условие задачи:
// Задание заключается в создании функционала оценки контента на веб-странице. Когда пользователь нажимает на звездочку, на нее и
// на все предыдущие звезды должен добавиться класс, который изменяет их цвет.


 
//Решение 2

// const starArray = Array.from(document.getElementsByClassName('star'));

// for (let i = 0; i < starArray.length; i++) {
//     starArray[i].onclick = function () {
//         // Добавляем или убираем класс 'star_active' для текущего элемента
//         this.classList.toggle('star_active');

//         // Запускаем второй цикл для остальных элементов массива
//         for (let j = 0; j < starArray.length; j++) {
//             if (j <= i) {
//                 // Добавляем класс 'star_active' для элементов с индексом <= i
//                 starArray[j].classList.add('star_active');
//             } else {
//                 // Убираем класс 'star_active' для элементов с индексом > i
//                 starArray[j].classList.remove('star_active');
//             }
//         }
//     }
// }


//Решение эксперта
// Собираем все звезды в псевдоколлекцию
// const stars = document.querySelectorAll('.star');

// // Пишем логику по добавлению звезд
// stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//         stars.forEach(s => s.classList.remove('star_active'));
//         const activeStars = [...stars].slice(0, index + 1);
//         activeStars.forEach((s) => s.classList.add('star_active'));
//     })
// })