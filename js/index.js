'use strict';

const button = document.querySelector('button');

const form = document.querySelector('#form');
// const theButton = document.querySelector('button');

// const userName = document.querySelector('#username');

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');
const e = document.querySelector('#e');
const f = document.querySelector('#f');
const g = document.querySelector('#g');
const h = document.querySelector('#h');
const i = document.querySelector('#i');

console.log(a);

// const placeHolder = document.querySelector('#placeholder');

const uA = document.querySelector('#uA');
const uB = document.querySelector('#uB');
const uC = document.querySelector('#uC');
const uD = document.querySelector('#uD');
const uE = document.querySelector('#uE');
const uF = document.querySelector('#uF');
const uG = document.querySelector('#uG');
const uH = document.querySelector('#uH');
const uI = document.querySelector('#uI');

console.log(uA);

form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Fin!')

    // let inputVal = userName.value;
    // placeHolder.innerHTML = inputVal;

    let inputA = a.value;
    uA.innerHTML = inputA;

    let inputB = b.value;
    uB.innerHTML = inputB;
    
    let inputC = c.value;
    uC.innerHTML = inputC;
    
    let inputD = d.value;
    uD.innerHTML = inputD;
    
    let inputE = e.value;
    uE.innerHTML = inputE;
    
    let inputF = f.value;
    uF.innerHTML = inputF;
    
    let inputG = g.value;
    uG.innerHTML = inputG;
    
    let inputH = h.value;
    uH.innerHTML = inputH;
    
    let inputI = i.value;
    uI.innerHTML = inputI;

})

form.addEventListener('clearForm', function(event){
    
})