import test from 'ava'
import { makeTitleCase } from './index'

test('runs tests', t => {
  t.is(makeTitleCase('SOMETHING_ELSE'), 'Something Else')
})
