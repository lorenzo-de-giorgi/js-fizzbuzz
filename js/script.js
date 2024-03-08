//creo il div
const square = document.createElement('div');
//do una classe al div
square.className = 'd-flex justify-content-between align-content-center flex-wrap';
//assegno un id al div
square.setAttribute('id','boxes');
// definisco il numero dei box da mostrare
let numBox = 100;
let tmpHtml = '';
// ciclo for per creare i 100 quadrati
for(let i = 0; i < numBox; i++){
    tmpHtml += ` <div class="box">${i + 1}</div>`;
}
square.innerHTML = tmpHtml;
console.dir(square);
// display with append
const container = document.querySelector('.container');
container.append(square);