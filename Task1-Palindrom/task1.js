function palindrome(str) {
  //we use regular expression.
  var re = /[^A-Za-z0-9]/g;
  //This is mean that Replace a-z, A-z or 0-9 than different characters and spaces with "".
  str = str.toLowerCase().replace(re, "");

  // We take string length
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      // As long as the characters from each part match, the FOR loop will go on
      // When the characters don't match anymore, false is returned and we exit the FOR loop
      return "It isn't a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = palindrome(string);

console.log(value);
