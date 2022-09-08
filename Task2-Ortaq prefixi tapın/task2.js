const prefix = (words) => {
  // check border cases size 1 array and empty first word)
  if (!words[0] || words.length == 1) return words[0] || "";
  let i = 0;
  // while all words have the same character at position i, increment i
  while (words[0][i] && words.every((w) => w[i] === words[0][i])) i++;
  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].substr(0, i);
};

console.log(1, prefix(["almxa", "albali", "alca"]));
console.log(2, prefix(["alim", "‘müəllim’", "‘şagirdə"]));
