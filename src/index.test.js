import test from 'ava'
import moment from 'moment'
import { makeDateStringFromUnixTimestamp } from './index'

test('if argument is given, date string is returned', t => {
  // If an argument is sent to the function, assume it is a unix timestamp
  // (in seconds) and return the date string.
  t.is(makeDateStringFromUnixTimestamp(1499144400), 'July 4, 2017')
})

test('if no argument is given, today\'s date string in returned', t => {
  t.is(makeDateStringFromUnixTimestamp(), moment().format('MMMM D, YYYY'))
})
