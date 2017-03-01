import { startCase } from 'lodash'

const isDebug = process.env.NODE_ENV === 'debug'

console.log('Get to coding!')
console.log(`Debug mode: ${isDebug ? 'on' : 'off'}`)

export const makeTitleCase = (s) => {
  return startCase(s.toLowerCase())
}
