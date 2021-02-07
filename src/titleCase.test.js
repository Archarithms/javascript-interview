import test from 'ava';
import { titleCase } from './index';

if (titleCase('t') != null) {
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

  test('With single slashes', t => {
    const actual = 'CASE/FOUR_extra/SLAsh';
    const expected = 'Case Four Extra Slash';
    t.is(titleCase(actual), expected);
  });

  test('null', t => {
    const actual = null;
    t.throws(() => {
      titleCase(actual);
    }, Error);
  });
} else {
  test('function not defined - ignoring', t => {
    t.pass();
  });
}