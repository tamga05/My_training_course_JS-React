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

let num = 21;

while (num <= 25) {
    console.log(num);
    num++;
}

