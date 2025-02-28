/* eslint-disable no-undef */
import {
  sum, capitalize, reverseString, calculator, caesarCipher,
} from './index';

test('testing sum', () => {
  expect(sum(2, 2)).toEqual(4);
});

test('testing capitalize', () => {
  expect(capitalize('ciaone')).toBe('Ciaone');
});

test('reversed string', () => {
  expect(reverseString('ciaone')).toBe('enoaic');
});

test('calculator', () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.subtract(2, 2)).toEqual(0);
  expect(calculator.multiply(4, 4)).toEqual(16);
  expect(calculator.divide(8, 2)).toEqual(4);
});

test('caesarCipher', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('ABC', 3)).toBe('DEF');
  expect(caesarCipher('aBc', 3)).toBe('dEf');
});
