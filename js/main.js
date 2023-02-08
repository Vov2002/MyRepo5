let wh = document.querySelector('.wh');
let mc = document.querySelector('.mc');
let dc = document.querySelector('.dc');
let el = document.querySelector('.element');
let el2 = document.querySelector('.element2');
//Задание 1
wh.onclick = () =>{
    el.classList.add('el');
}
//Задание 2
mc.onclick = () =>{
    el2.classList.add('p', 'm', 'bc');
}
//Задание 3
dc.onclick = () =>{
    el2.classList.remove('m');
}