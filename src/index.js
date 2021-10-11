/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase(str) {
  // CODE HERE
  // try {
    // if (str != null) {
      const strReplace = str.replace(/[^a-zA-Z0-9]+/g, " ");
      const lowCase = strReplace.toLowerCase().trim();
      const splitWords = lowCase.split(" ");

      for (let i = 0; i < splitWords.length; i++) {
        splitWords[i] =
          splitWords[i][0].toUpperCase() + splitWords[i].substr(1);
      }

      return splitWords.join(" ");
  //   }
  // } catch (error) {
    // throw new Error("Null Input");
    // error = new Error("Null Input")
    // console.log(error + " ERROR")
    // return new Error("Null Input")
  // }
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString(timestamp) {
  // CODE HERE
  return false;
}
