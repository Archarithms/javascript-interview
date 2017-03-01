import moment from 'moment'
const isDebug = process.env.NODE_ENV === 'debug'

console.log('Get to coding!')
console.log(`Debug mode: ${isDebug ? 'on' : 'off'}`)

export const makeDateStringFromUnixTimestamp = (timestamp) => {
  if (timestamp === undefined) {
    return moment().format('MMMM D, YYYY')
  }
  return moment((timestamp * 1000)).format('MMMM D, YYYY')
}
