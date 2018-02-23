import moment from 'moment';

export function titleCase (str) {
  if (str === null) {
    throw Error('invalid input');
  }
  const splitStr = str.toLowerCase().split(/[^\w]|_/g);
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ').trim();
}

export function toDateString (timestamp) {
  if (timestamp === null) {
    throw Error('invalid input');
  }
  return moment(timestamp).format('MMMM DD, YYYY');
}

