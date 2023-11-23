let MyId = document.querySelector(`.id`) as HTMLSpanElement;
let MyAdvice = document.querySelector(`.MyAdvice`) as HTMLParagraphElement;
let click = document.querySelector(`.click`) as HTMLImageElement;

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
