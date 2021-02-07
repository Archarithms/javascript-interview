import moment from 'moment';

/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {
  if(str != null) {
    str = JSON.stringify(str); //To deal with unescaped special characters that the regex won't be able to deal with, i.e. //
    str = str.replace(/[^0-9a-z]/gi, ' '); //Find and replace all non-alphanumeric characters with spaces
    str = str.trim(); //Remove excess left on str
    str = str.toLowerCase(); //Change entire string to lower case - easier to do that 
                            // and convert first letter of each word to capital letter rather than find and replace each capital with a lower case.
    
    let splitSentence = str.split(" "); //Splitting into an array makes it easy to cycle through and capitalize first letter of each word

    for (let i = 0; i < splitSentence.length; i++){
      let item = splitSentence[i];
      splitSentence[i] = item[0].toUpperCase()+item.substr(1);
    }

    str = splitSentence.join(" ");  //Join the fixed array back into single string
     return str;
  }
  else{
    throw new Error("Parameter was empty!");
  }

}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString (timestamp) {
  let dateStr = '';

  if(typeof(timestamp) == 'number'){
    let dateObj = new Date(timestamp);
    let month = dateObj.toLocaleString('default', { month: 'long' });
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();
    dateStr = month + " " + day + ", " + year;
  }
  else if(timestamp === undefined){
    dateStr = new moment().format('MMMM DD, YYYY');
  }
  else if(timestamp === null){
    throw new Error("Parameter is a null value.");
  }
  else if(timestamp !== Number.isFinite(timestamp)){
    throw new Error("Parameter is not a number.");
  }
  
}

