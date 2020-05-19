'use strict';
function palindrome(str) {
  let regExp = /[^A-Za-z0-9]/g;
 let newStr = str
  .toLowerCase()
  .replace(regExp, '');
  console.log(newStr);
  let newerStr = newStr.split('').reverse().join('');
  if(newStr === newerStr) {
    return true;
  }
  return false;
}

console.log(palindrome("almostomla"));
