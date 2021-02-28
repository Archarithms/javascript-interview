import moment from 'moment';
/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {

  if (!str) {
    throw new Error('no input was supplied');
  }

  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g," ").replace(/(^|\s)\S/g,  (first) => first.toUpperCase()).trimEnd()
  // first replace changes all non-alphanumeric chars to space
  // second replace uppercases the first char of the string and any char after a space
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString (timestamp) {
  let millis;
  if (timestamp !== undefined) {
    if (typeof timestamp !== 'number') {
      // if the type is not correct then throw error (catches nulls too)
      throw new Error('input has wrong type');
    }
    // converts seconds to milliseconds
    millis = timestamp*1000
  }
  // formats date, no input returns today's date
  return moment(millis).format('MMMM D, YYYY')
}