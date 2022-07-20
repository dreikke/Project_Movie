"use strict";
let numberOfFilms = +prompt("How many films have You alreday seen?", "");
let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let lastFilm = prompt("What was the last movie You saw?", "");
let filmRank = +prompt("How would You rank it from 1 to 10?", "");
personalMovieDb.movies[lastFilm] = filmRank;
console.log(personalMovieDb);
