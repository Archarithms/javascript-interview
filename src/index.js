import moment from 'moment';

/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase(str) {
  return str === null ? (() => { throw new Error('Illegal Argument'); })() : str.split('').map(c => c.toLowerCase()).map(c => (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) || (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) ? c : ' ').join('').split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ').trim();
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString(timestamp) {
  return timestamp ? new moment(timestamp).format('MMMM DD, YYYY') : timestamp !== null ? new moment().format('MMMM DD, YYYY') : (() => { throw new Error('Illegal Argument'); })();
}
