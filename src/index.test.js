import test from 'ava'
import { titleCase } from './index'

test('runs tests', t => {
  t.pass()
})

test('title case test', t => {
  t.is(titleCase('TITLE_CASE'), 'Title Case')
})
