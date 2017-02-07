const isDebug = process.env.NODE_ENV === 'debug'
import _ from 'lodash'

console.log('Get to coding!')
console.log(`Debug mode: ${isDebug ? 'on' : 'off'}`)

export const transform = (str) => {
  if (!str) {
    throw Error('str is required')
  }
  return _.startCase(str.toLowerCase())
}
