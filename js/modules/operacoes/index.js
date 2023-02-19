const add = (n1, n2) => n1 + n2;

const subtract = (n1, n2) => n1 - n2;

const multiply = (n1, n2) => n1 * n2;

const divide = (n1, n2) => n1 / n2;

export const maxLength = num => (num).toString().substring(0,14);

export function operate(op, n1, n2) {
    if (op === '+') return maxLength(add(n1, n2));
    if (op === '-') return maxLength(subtract(n1, n2));
    if (op === '×') return maxLength(multiply(n1, n2));
    if (op === '÷') return maxLength(divide(n1, n2));
}