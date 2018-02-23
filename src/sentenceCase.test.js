import test from 'ava';
import { sentenceCase } from './index';

test('pass', t => {
  t.pass();
});

// test('Nominal', t => {
//   const actual = 'CASE_ONE';
//   const expected = 'Case One';
//   t.is(sentenceCase(actual), expected);
// });

// test('With number', t => {
//   const actual = 'CASE_2';
//   const expected = 'Case 2';
//   t.is(sentenceCase(actual), expected);
// });

// test('With other chars', t => {
//   const actual = 'CASE-THREE_extra[chars]';
//   const expected = 'Case Three Extra Chars';
//   t.is(sentenceCase(actual), expected);
// });

// test('With null', t => {
//   const actual = null;
//   const expected = null;
//   t.is(sentenceCase(actual), expected);
// });

