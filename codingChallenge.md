## Challenge 1
Create a function that takes in a constant-formatted (all caps, 
words separated by underscores) string and returns the string 
in “title case”. The function should remove all non alphanumeric
characters and replace them with spaces. But no spaces at the end
of the result. A `null` input should throw an error.

For example:
`"THIS_INPUT"` should return `"This Input"`
`"CASE-THREE_extra[chars]///"` should return `"Case Three Extra Chars"`


## Challenge 2
Create a function that takes in a timestamp and returns a String 
that is the input timestamp formatted as the the month, the day,
and the full year. If no timestamp is given the function
should return today’s date. If the input is null, an error should be
thrown.

For example, passing a unix epoch time `1499144400` in seconds
would return `"July 4, 2017"`. 

