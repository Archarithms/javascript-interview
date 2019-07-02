# Archarithms Inc. Coding Challenge - 1 & 2

## Challenge 1
Create a function that takes in a constant-formatted (all caps,
words separated by underscores) string and returns the string
in "title case" (see examples below). The function should remove all non alphanumeric
characters and replace them with spaces. But no spaces at the end
of the result. A `null` input should throw an error.

If you so choose feel free to leverage third party libraries to complete your solution.

For example:
`"THIS_INPUT"` should return `"This Input"`
`"CASE-THREE_extra[chars]///"` should return `"Case Three Extra Chars"`


## Challenge 2
Create a function that takes in a unix epoch time in seconds (long data type) and returns a String
that is the input timestamp converted and formatted as month day, year (see below). If no timestamp is given the function
should return today’s date. If the input is null or has an incorrect type, an error should be
thrown.

If you so choose feel free to leverage third party libraries to complete your solution.

For example, passing a unix epoch time `1499144400` in seconds (long data type)
would return `"July 4, 2017"` in this date format (string data type).
