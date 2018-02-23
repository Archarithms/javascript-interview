import test from 'ava';
import { toDateString } from './index';

test('Nominal', t => {
  const actual = 1485470818000;
  const expected = 'January 26, 2017';
  t.is(toDateString(actual), expected, 'Values should be equal');
});

