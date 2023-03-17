"use strict";

 let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

 const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
 };

for (let i = 0; i < 2; i++) {

 const a = prompt('Один из последних просмотренных филльмов?', ''),
       b = prompt('На сколько оцените его?','');

  if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--
  }   
}

if(personalMovieDB.count < 10) {
  console.log('Просмотренно сликшом мало фильмов');
} else if(personalMovieDB.count === 10 && personalMovieDB.count <= 30) {
  console.log('Вы класический зритель');
} else if(personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('произошла ошибка');
}

 console.log(personalMovieDB);