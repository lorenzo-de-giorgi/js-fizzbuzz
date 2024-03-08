//creo il div
const square = document.createElement('div');
//do una classe al div
square.className = 'd-flex justify-content-between align-content-center flex-wrap';
//assegno un id al div
square.setAttribute('id','boxes');
// definisco il numero dei box da mostrare
let numBox = 101;
let tmpHtml = '';
// ciclo for per creare i 100 quadrati
for(let i = 1; i < numBox; i++){
    if(i % 3 == 0 && i % 5 == 0){
        tmpHtml += ` <div class="box fizzbuzz-box">fizzbuzz</div>`;
    } else if(i % 3 == 0){
        tmpHtml += ` <div class="box fizz-box">fizz</div>`;
    } else if(i % 5 == 0){
        tmpHtml += ` <div class="box buzz-box">buzz</div>`;
    } else {
        tmpHtml += ` <div class="box">${i}</div>`;
    }
}

square.innerHTML = tmpHtml;
console.dir(square);
// display with append
const container = document.querySelector('.container');
container.append(square);