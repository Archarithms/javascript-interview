// function to filter out alphanumeric characters and return a new string
function titleCaseChange(str) {
  if (str === null) {
    throw new Error("Exception message");
  } else {
    var wordsArray = []; // an array to hold completed words found in str
    var singleWord = ""; // an string for each word
    var newString = "";
    var letterNumber = /^[0-9a-zA-Z]+$/; // regex validation

    // iterate through string to test each character against regex validation
    for (var i = 0; i < str.length; i++) {
      var temp = []; // clear temp array for new alphanumeric character
      temp = str[i].match(letterNumber); // check to see if character is alphanumeric
      // add alphanumeric characters to temp array until next non-alphanumeric character
      // is found, then save temp array into wordsArray

      if (temp != null) {
        // if alphanumeric character is found add to singleWord string
        if (singleWord.length < 1) {
          // make first letter of word upper case
          singleWord += temp[0].toUpperCase();
        } else {
          // otherwise make lower case
          singleWord += temp[0].toLowerCase();
        }
      }
      // if not alphanumeric character, check to see if singleWord has a word
      // if so add it to wordsArray, if not continue
      else if (singleWord.length != 0) {
        wordsArray.push(singleWord);
        singleWord = ""; // clear singleWord array for new word
      }
    }
    // if last character is letter, add last word to array
    if (singleWord.length != 0) {
      wordsArray.push(singleWord);
    }
    // concatinate arrays in wordsArray into new string with space between each word
    for (var x = 0; x < wordsArray.length; x++) {
      if (x < wordsArray.length - 1) {
        newString += wordsArray[x] + " ";
      } else {
        newString += wordsArray[x];
      }
    }
  }
  return newString;
}

titleCaseChange(".tHIS;WORD[[");
