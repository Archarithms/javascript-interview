
import moment from 'moment';

/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {

  //deal with pesky null input
  if (str === null) {
    throw new Error();
  }

  //replace non-alpha chars with spaces,
  // then trim and lowerCase all chars
  let str2 = str.replace(/[^a-z0-9]/gmi,' ').trim().toLowerCase();

  //split into array of words
  let words = str2.split(' ');

  //capitalize first char of each word
  let capWords = words.map(s => s.charAt(0).toUpperCase() + s.substr(1));

  //return joined words
  return capWords.join(' ');
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function toDateString (timestamp) {

  //deal with pesky null input
  if (timestamp === null) {
    throw new Error();
  }

  //return formatted, localized output (i.e. "March 30, 2018")
  return moment(timestamp).format('LL');

}

