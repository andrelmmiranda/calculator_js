import { operate } from "../operacoes/index.js";
import { maxLength } from "../operacoes/index.js";

export const isNumber = val => /[0-9]/.test(val);

export const isOp = digit => ['+', '-', '×', '÷'].includes(digit);

export function whenNumber(val, array, numero, opAtual) {
    if (array[0][0] === '0' && !array[0].includes('.')) array[0] = '';
    if (array[2][0] === '0' && !array[2].includes('.')) array[2] = '';


    if (isOp(array.at(-1))) {
        numero.value = '';
    }

    if (array[3] === '=') {
        array = [val, '', '', ''];
        numero.value = array[0];
        opAtual.innerText = array.join('');

        return array;
    }

    if (array[1] === '') {
        array[0] += val;
        array[0] = maxLength(array[0]);
        numero.value = array[0];
        opAtual.innerText = array.join('');

        return array;
    }

    if (array[1] !== '') {
        array[2] += val;
        array[2] = maxLength(array[2]);
        numero.value = array[2];
        opAtual.innerText = array.join('');

        return array;
    }
}

export function whenOperator(val, array, opAtual) {
    if (array[0] === '0' && val !== '-') return array;

    if (array[0] === '0' && val === '-') {
        array[0] = val;
        opAtual.innerText = array.join('');
        return array;
    }

    if (array[1] !== '') {
        array = [operate(array[1], Number(array[0]), Number(array[2])), val, '', ''];
    }

    array[1] = val;
    opAtual.innerText = array.join('');

    return array;
}

export function whenClear(array, numero, opAtual) {
    numero.value = '0';
    array = ['0', '', '', ''];
    opAtual.innerText = ''

    return array;
}

export function whenDelete(array, numero, opAtual) {

    if (array[1] !== '' && array[2] === '') {
        array[1] = '';
        numero.value = array[0];
        opAtual.innerText = array.join('');

        return array;
    }

    if (array[2] === '') {
        array[0] = array[0].substring(0, array[0].length - 1);
        array[0] = array[0] === '' ? '0' : array[0];
        numero.value = array[0];
        opAtual.innerText = array.join('');

        return array;
    }

    if (array[3] === '=') {
        array[2] = '';
        array[3] = '';
        numero.value = '0';
        opAtual.innerText = array.join('');

        return array;
    }

    array[2] = array[2].substring(0, array[2].length - 1);
    numero.value = array[2];
    opAtual.innerText = array.join('');

    return array;
}

export function whenEqual(array, numero, opAtual) {

    if(array[2] === '') return array;

    const op = array.filter(el => !Number(el)).at(0);
    const [n1, n2] = array.filter(el => !isNaN(Number(el)));

    array[3] = '=';
    opAtual.innerText = array.join('');

    numero.value = operate(op, Number(n1), Number(n2));

    return array;
}


export function whenPoint(val, array, numero, opAtual) {
    if (array[1] === '' && !array[0].includes('.')) {
        if (numero.value === '0') {
            array[0] = '0.';
            numero.value = array[0];
            opAtual.innerText = array.join('');
        } else {
            array[0] += val;
            numero.value = array[0];
            opAtual.innerText = array.join('');
        }

        return array;
    }

    if (array[1] !== '' && !array[2].includes('.')) {
        if (array[2] === '') {
            array[2] = '0.';
            numero.value = array[2];
            opAtual.innerText = array.join('');
            console.log(array)
        } else {
            array[2] += val;
            numero.value = array[2];
            opAtual.innerText = array.join('');
            console.log(array)
        }
        return array;
    }

    return array;
}