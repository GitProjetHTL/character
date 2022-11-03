'use strict';

let character = document.querySelectorAll('.character')
console.log(character);
let nameCharacter = document.querySelector('p');


function character_affiche0() {

    let character1 = document.querySelector('.character1')
    character1.src = "img/character_affiche/Hakumen.png";
    nameCharacter.innerText = "HAKUMEN";


}
function character_affiche1() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/character_affiche/Ragna.png";
    nameCharacter.innerText = "RAGNA";
}
function character_affiche2() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "NOELLE";
    character1.src = "img/character_affiche/Noel.png";


}

function character_affiche3() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "BANG";
    character1.src = "img/character_affiche/Bang.png";
}

function character_affiche4() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "JIN";
    character1.src = "img/character_affiche/Jin.png";
}

function character_affiche5() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "IRON TAGER";
    character1.src = "img/character_affiche/IronTager.png";
}

function character_affiche6() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "HAZAMA";
    character1.src = "img/character_affiche/Hazama.png";
}

function character_affiche7() {
    let character1 = document.querySelector('.character1')
    nameCharacter.innerText = "KOKONOE";
    character1.src = "img/character_affiche/Kokonoe.png";
}

function character_affiche8() {
    let character1 = document.querySelector('.character1');
    nameCharacter.innerText = "JUBEI";
    character1.src = "img/character_affiche/Jubei.png";
}

// for (let i = 0; i < character.length; i++) {
//     character[i].addEventListener('mouseover',character_affiche`[i]`);
// }

character[0].addEventListener('mouseover', character_affiche0);
character[1].addEventListener('mouseover', character_affiche1);
character[2].addEventListener('mouseover', character_affiche2);
character[3].addEventListener('mouseover', character_affiche3);
character[4].addEventListener('mouseover', character_affiche4);
character[5].addEventListener('mouseover', character_affiche5);
character[6].addEventListener('mouseover', character_affiche6);
character[7].addEventListener('mouseover', character_affiche7);
character[8].addEventListener('mouseover', character_affiche8);


//animation


function character_animate0() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/hakumen.gif";
}

function character_animate1() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/ragna.gif";
}

function character_animate2() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/noel.gif";
}



function character_animate3() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/bang.gif";
}

function character_animate4() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/jin.gif";
}

function character_animate5() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/IronTager.gif";
}

function character_animate6() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/hazama.gif";
}
function character_animate7() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/kokonoe.gif";
}

function character_animate8() {
    let character1 = document.querySelector('.character1')
    character1.src = "img/animate/jubei.gif"
}

character[0].addEventListener('click', character_animate0);
character[1].addEventListener('click', character_animate1);
character[2].addEventListener('click', character_animate2);
character[3].addEventListener('click', character_animate3);
character[4].addEventListener('click', character_animate4);
character[5].addEventListener('click', character_animate5);
character[6].addEventListener('click', character_animate6);
character[7].addEventListener('click', character_animate7);
character[8].addEventListener('click', character_animate8);
