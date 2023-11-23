"use strict";
let MyId = document.querySelector(`.id`);
let MyAdvice = document.querySelector(`.MyAdvice`);
let click = document.querySelector(`.click`);
fetch("https://api.adviceslip.com/advice")
    .then((e) => e.json())
    .then((e) => {
    MyAdvice.innerHTML = e.slip.advice;
    MyId.innerHTML = e.slip.id;
});
click.addEventListener(`click`, () => {
    fetch("https://api.adviceslip.com/advice?" + new Date().getTime())
        .then((e) => e.json())
        .then((e) => {
        console.log(e.slip);
        MyAdvice.innerHTML = e.slip.advice;
        MyId.innerHTML = e.slip.id;
    });
});
