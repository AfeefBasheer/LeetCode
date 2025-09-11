//Problem - 3
//Beats 30% in time complexity
//Beats 13% ub space complexity

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let maxLength = 0,
    subString = "" + s[0],
    j = 0,
    count = 0,
    i = 1,
    flag;
  while (i < s.length) {
    flag = true;
    for (let k = 0; k < subString.length; k++) {
      if (subString[k] === s[i]) {
        count = subString.length;
        if (maxLength < count) maxLength = count;
        flag = false;
        j++;
        subString = subString.slice(1);
        break;
      }
    }
    if (flag) {
      subString = subString + s[i];
      i++;
    }
    count = subString.length;
    if (maxLength < count) maxLength = count;

  }
  return maxLength;
};