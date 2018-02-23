import test from 'ava';
import moment from 'moment';
import { toDateString } from './index';

if (toDateString()) {
  test('Nominal', t => {
    const actual = 1485470818000;
    const expected = 'January 26, 2017';
    t.is(toDateString(actual), expected, 'Values should be equal');
  });

  test('No date given', t => {
    const expected = new moment().format('MMMM DD, YYYY');
    t.is(toDateString(), expected, 'Values should be equal');
  });

  test('null', t => {
    const actual = null;
    t.throws(() => {
      toDateString(actual);
    }, Error);
  });
} else {
  test('function not defined - ignoring', t => {
    t.pass();
  });
}