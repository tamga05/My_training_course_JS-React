"use strict";

//console.log("Hello");

//alert("Hello");

//confirm('Hello');

// const answer = +prompt('Это ты???');
// alert(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя???', '');
// answers[1] = prompt('Как ваша фамилия???', '');
// answers[2] = prompt('Сколько вам лет???', '');

// console.log(answers);

//document.write(answers);


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// // 1.

// //let numberOfFilms;

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// //console.log(numberOfFilms);

// // 2.

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: [],
//     actors: [],
//     genres: { },
//     privat: false
// };

// //console.log(personalMovieDB);

// // 3.

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// // let nameUser = prompt('Назовите ваше имя', '');
// // console.log(nameUser);

// Циклы.

// 1.
// let num = 21;

// while (num <= 25) {
//     console.log(num);
//     num++;
// }

// // 2.
// let numb = 1;

// do {
//     console.log(numb);
//     numb++;
// } while (numb < 5);

// // 3.
// for ( let i = 1; i <= 3; i++) {
//     console.log(i);
// }


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи Цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи Условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать Цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// То же при помощи Другого цикла

// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     i++;
// } while (i < 2);


// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

// console.log(personalMovieDB);


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

// console.log(personalMovieDB);


// Метод setTimeout()

//this code is executed first

// console.log("Where can I learn to code for free and get a developer job?");

// // this line indicates that the function definition will be executed once 3ms have passed

// setInterval(codingCourse, 500);


// //function definition

// function codingCourse() {
// 	console.log("freeCodeCamp");
// }


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//         const b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         let answer = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = answer;

//         // Можно записать и так, без промежуточной переменной
//         //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB);


// let object = {
//     name: 'Andrey',
//     family: 'Nikitin',
//     age: 50,
//     children: {
//         daughter1: 'Darya',
//         daughter2: 'Anisiya',
//         son1: 'Ivan',
//         son2: 'Timofey'
//     }
// };

// console.log(Object.keys(object));
// console.log(Object.keys(object).length);
// console.log(object.children.son2);


// Деструктуризация объекта

// const {daughter2, son2} = object.children;
// console.log(daughter2);
// console.log(`Моя самая любимая кошечка ${daughter2} !!!`);
// console.log(son2);


// Удаление свойства из объекта

// console.log(object);
// delete object.age;
// console.log(object);


// Разворачивание массива с помощью спред-оператора
//const arr = [1, 5, 10, 15];

//console.log(arr.at(0));
//console.log(...arr);

// Разворачивание объекта с помощью спред-оператора

// const abc = {
//     a: 1,
//     b: 'mama',
//     c:21
// };
//
// const ABC = {...abc};
//
// console.log(ABC);


// Динамическая типизация
// console.log(typeof(+'num'));

//console.log(typeof(3 + ''));





// Задачи  с собеседований

// 1. Какое будет выведено значение?
// let x = 5;
// alert(x++);
// Ответ 5 так как Постфиксная форма инкремента


// 2. Чему равно такое выражение?
// let a = [ ] + false - null + true;

// console.log([] + false);
// console.log(typeof([] + false)); // Значение - false, а тип данных - string // Пустой Массив при сложении приводится
// // к Пустой строке, а при Сложении // Пустой // строки с чем либо (Конкатениция) Всё выражение приводится к Строке!!!
//
// console.log([] + false - null); // Значение - Nan
// console.log(typeof([] + false - null)); // Тип данных - number
//
// console.log([] + false - null + true); // Значение - Nan
// console.log(typeof([] + false - null + true)); // Тип данных - number

// 3. Что выведет этот код? Ответ 2 Последовательное присваивание значения справа
// let y = 1;
// let x = y = 2;
// alert(x);

// 4. Чему равна сумма [] + 1 + 2;?
// Ответ 12 Тип данных - string
// console.log([] + 1 + 2);
// console.log(typeof([] + 1 + 2));

// 5. Что выведет этот код: alert( "1"[0] );?
// alert("1"[0]);
// Ответ 1, будет выведен Первый символ(с индексом 0) из строки "1"

// 6. Чему равно 2 && 1 && null && 0 && undefined;?
//console.log(2 && 1 && null && 0 && undefined);
// Ответ null, так как оператор && "Запинается на Лжи" (а null даёт значение false) и дальше уже не выполняется,
// а оператор || "Запинается на Правде"

// 7. Есть ли разница между выражениями? !!( a && b ) и (a && b);?
// Есть, два !! меняют тип данных на Булевое значение

// 8. Что выведет этот код: alert( null || 2 && 3 || 4 );?
//alert( null || 2 && 3 || 4 );
// Ответ 3

// 9. a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b;?
// let a = [1, 2, 3],
//     b = [1, 2, 3];
//
// console.log(a == b);
// Ответ a Не равно b так как хоть и элементы массивов равны, но это совершенно РАЗНЫЕ переменные a и b !!!

// 10. Что выведет этот код: alert( +"Infinity" ); ?
//alert(+"Infinity"); // Значение Infinity
//alert(typeof(+"Infinity")); // Тип данных number

// 11. Верно ли сравнение: "Ёжик" > "яблоко"; ?
//console.log("Ёжик" > "яблоко");
// Ответ Нет.
// Тут используется Посимвольное сравнение (Если первый символ первой строки больше (меньше),
// чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.). Используется
// кодировка Unicode, а не настоящий алфавит. В JavaScript имеет значение регистр символов. Заглавная буква
// "A" не равна строчной "a". Какая же из них больше? Строчная "a". Почему? Потому что строчные буквы имеют больший код
// во внутренней таблице кодирования, которую использует JavaScript (Unicode).

// 12. Чему равно 0 || "" || 2 || undefined || true || falsе; ?
//console.log(0 || "" || 2 || undefined || true || falsе);


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1.
const promo = document.getElementsByClassName('promo__adv');
promo[0].remove();


// 2.
const genre = document.getElementsByClassName('promo__genre');
genre[0].textContent = 'драма';


// 3.
const bg = document.querySelector('.promo__bg');
//bg.style.backgroundImage = "url('img/bg.jpg')";

// Или можно так записать
bg.style.cssText = 'background-image: url(img/bg.jpg)';


// 4 и 5.
const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

