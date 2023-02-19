import { isOp, whenNumber, whenOperator, whenClear, whenDelete, whenEqual, whenPoint } from "./modules/utils/index.js";
import { dateAndTime } from "./modules/displayTime/index.js";


const numero = document.getElementById('numero');

const opAtual = document.getElementById('array');

const data = {
    array: ['0', '', '', '']
}

setInterval(dateAndTime, 1000);

document.querySelectorAll('.button')
    .forEach(el => {
        el.addEventListener('click', () => {
            const { value } = el.dataset;

            if (!isNaN(value)) {
                data.array = whenNumber(value, data.array, numero, opAtual);
            }

            if (isOp(value)) {
                data.array = whenOperator(value, data.array, opAtual);
            }

            if (value === 'clear') {
                data.array = whenClear(data.array, numero, opAtual);
            }

            if (value === 'delete') {
                data.array = whenDelete(data.array, numero, opAtual)
            }

            if (value === '=') {
                data.array = whenEqual(data.array, numero, opAtual);
            }

            if (value === '.') {
                data.array = whenPoint(value, data.array, numero, opAtual);
            }

        });
    });

window.addEventListener('keydown', (e)=>{
    console.log(e.key.toLowerCase())

    const value = verifyDigit(e.key);

    if (!isNaN(value)) {
        data.array = whenNumber(value, data.array, numero, opAtual);
    }

    if (isOp(value)) {
        data.array = whenOperator(value, data.array, opAtual);
    }

    if (value === 'clear') {
        data.array = whenClear(data.array, numero, opAtual);
    }

    if (value === 'delete') {
        data.array = whenDelete(data.array, numero, opAtual)
    }

    if (value === '=') {
        data.array = whenEqual(data.array, numero, opAtual);
    }

    if (value === '.') {
        data.array = whenPoint(value, data.array, numero, opAtual);
    }
})


function verifyDigit(key){
    if(key === '/') return '÷';
    if(key === '*') return '×';
    if(key === '-') return '-';
    if(key === '+') return '+';

    if(key.toLowerCase() === 'enter' || key === '=') return '=';

    if(key.toLowerCase() === 'c') return 'clear';
    if(key.toLowerCase() === 'backspace') return 'delete';

    if(!isNaN(key)) return key;
}