
/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {
  // Error out if null state (check undefined too?)
  if (str == null || str == undefined) {
    throw new Error("Title string is null or undefined")
  }

  // Strip trailing white space (and future trailing white space)
  const trailingChars = /[^a-zA-Z0-9]*$/g;
  var str2 = str.substr(0,str.search(trailingChars));

  // Replace remaining non alphanumeric characters with spaces
  const nonAlphanumericChars = /[^a-zA-Z0-9]/g;
  var str3 = str2.replace(nonAlphanumericChars, " ");

  // Convert to title case
  const words = /\w\S*/g;
  function toTitleCase(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }
  var str4 = str3.replace(words,toTitleCase)

  return str4;
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString (timestamp) {
  // CODE HERE
  return false;
}

