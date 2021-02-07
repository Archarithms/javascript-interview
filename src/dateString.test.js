import test from 'ava';
import moment from 'moment';
import { dateString } from './index';

if (dateString()) {
  test('Nominal', t => {
    const actual = 1485470818000;
    const expected = 'January 26, 2017';
    t.is(dateString(actual), expected, 'Values should be equal');
  });

  test('No date given', t => {
    const expected = new moment().format('MMMM DD, YYYY');
    t.is(dateString(), expected, 'Values should be equal');
  });

  test('null', t => {
    const actual = null;
    t.throws(() => {
      dateString(actual);
    }, Error);
  });

  test("I'm not a number", t => {
    const actual = "I'm not a number";
    t.throws(() => {
      dateString(actual);
    }, Error);
  });
} else {
  test('function not defined - ignoring', t => {
    t.pass();
  });
}