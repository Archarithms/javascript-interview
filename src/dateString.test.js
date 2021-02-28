import test from 'ava';
import moment from 'moment';
import { dateString } from './index';

if (dateString()) {
  test('Nominal', t => {
    const actual = 1485470818;
    const expected = 'January 26, 2017';
    t.is(dateString(actual), expected, 'Values should be equal');
  });

  test('Example data', t => {
    const actual = 1499144400;
    const expected = 'July 4, 2017';
    t.is(dateString(actual), expected, 'Values should be equal');
  });

  test('No date given', t => {
    const expected = new moment().format('MMMM D, YYYY');
    t.is(dateString(), expected, 'Values should be equal');
  });

  test('Wrong type', t => {
    const actual = 'test';
    t.throws(() => {
      dateString(actual);
    }, Error);
  });

  test('null', t => {
    const actual = null;
    t.throws(() => {
      dateString(actual);
    }, Error);
  });
} else {
  test('function not defined - ignoring', t => {
    t.pass();
  });
}