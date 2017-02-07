import test from 'ava'
import {transform} from './index'

test('runs tests', t => {
  t.pass()
})

test('transform', t => {
  t.true(transform('THIS_INPUT') === 'This Input')
  t.throws(() => {
    transform(null)
  }, Error)
})
