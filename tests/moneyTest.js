import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency')
console.log('converts cents to dollars')
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('Failed')
}

console.log('rounds off to the nearest cent')
if (formatCurrency(2000.5) === '20.01') {
    console.log('Passed');
} else {
    console.log('Failed')
}