import test from 'ava'
import { titleCase, toDate } from './index'

test('runs tests', t => {
  t.pass()
})

test('title case test', t => {
  t.is(titleCase('TITLE_CASE'), 'Title Case')
})

test('date test', t => {
  t.is(toDate(1485470818000), 'January 26, 2017')
})

test('date test', t => {
  t.is(toDate(), 'January 26, 2017')
})
