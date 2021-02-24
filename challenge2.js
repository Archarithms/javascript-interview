// used npm install moment --save to convert UET to date format
function dateString(timestamp) {
  var returnedDate = "";
  // if timestamp is null, throw error
  try {
    // if timestamp left blank on input, use today's date
    if (timestamp === " ") {
      returnedDate = new Date.now();
    } else {
      // using moment to convert timestamp to desired date format
      return (returnedDate = new moment(timestamp).format("LL"));
    }
    // using moment to convert timestamp to desired date format
    return (returnedDate = new moment(timestamp).format("LL"));
  } catch (error) {
    console.error(error);
  }
}

dateString(1499144400);
