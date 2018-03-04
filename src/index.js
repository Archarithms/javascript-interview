
/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {
  if ((str === null) || (str === '')) {
    throw new Error("Value is null!");

  }

  else
    str = str.toString();
  var nStr = str.replace(/[\W_]+/g, " ");
  var chpStr = nStr.toLowerCase().split(' ');
  for (var i = 0; i < chpStr.length; i++) {

    chpStr[i] = chpStr[i].charAt(0).toUpperCase() + chpStr[i].substring(1);
  }
  var Lstr = chpStr.join(' ');
  Lstr = Lstr.trim();
  return (Lstr);

}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function toDateString (timestamp) {
  // CODE HERE
  return null;
}

