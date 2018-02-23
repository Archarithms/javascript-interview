import test from 'ava';
import { titleCase } from './index';

test('Nominal', t => {
  const actual = 'CASE_ONE';
  const expected = 'Case One';
  t.is(titleCase(actual), expected);
});

test('With number', t => {
  const actual = 'CASE_2';
  const expected = 'Case 2';
  t.is(titleCase(actual), expected);
});

test('With other chars', t => {
  const actual = 'CASE-THREE_extra[chars]///';
  const expected = 'Case Three Extra Chars';
  t.is(titleCase(actual), expected);
});

test('null', t => {
  const actual = null;
  t.throws(() => {
    titleCase(actual);
  }, Error);
});
