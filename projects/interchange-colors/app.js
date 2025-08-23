const body = document.body;

const red = document.querySelector('.red');

const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

const orange = document.querySelector('.orange');

const pink = document.querySelector('.pink');



red.addEventListener('click',()=>{
  body.style.backgroundColor = "red";

})

green.addEventListener('click',()=>{
  body.style.backgroundColor = "green";
})

blue.addEventListener('click',()=>{
  body.style.backgroundColor = "blue";
})

orange.addEventListener('click',()=>{
  body.style.backgroundColor = "orange";
})

pink.addEventListener('click',()=>{
  body.style.backgroundColor = "pink";
})

const section = document.querySelector('.container');

section.addEventListener('click', (e) => {
  if (e.target === section) { // only trigger if clicked on empty space of section
    document.body.style.backgroundColor = 'white'; // reset body color
  }
});

