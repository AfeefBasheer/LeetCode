//Problem - 12
//Beats 5% in time complexity
//Beats 31% in Space compleixty

var intToRoman = function (num) {
//   //Better Approach
//   var intToRoman = function (num) {
//     let number = num.toString(),
//       place = 0,
//       total = "";

//     // Roman numeral mappings for ones, tens, hundreds, thousands
//     const romans = [
//       ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
//       ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
//       ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
//       ["", "M", "MM", "MMM"], // thousands
//     ];

//     for (let i = number.length - 1; i >= 0; i--) {
//       let digit = parseInt(number[i]);
//       total = romans[place][digit] + total;
//       place++;
//     }
//     return total;
//   };

  let number = num.toString(),
    place = 0,
    total = "";
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    let n = digit * 10 ** place++;
    if (n >= 1000) {
      for (let j = 0; j < digit; j++) total = "M" + total;
    } else if (n >= 900) {
      total = "CM" + total;
    } else if (n >= 500) {
      let temp = "D";
      for (let j = 0; j < digit - 5; j++) temp += "C";
      total = temp + total;
    } else if (n >= 400) {
      total = "CD" + total;
    } else if (n >= 100) {
      let temp = "";
      for (let j = 0; j < digit; j++) temp += "C";
      total = temp + total;
    } else if (n >= 90) {
      total = "XC" + total;
    } else if (n >= 50) {
      let temp = "L";
      for (let j = 0; j < digit - 5; j++) temp += "X";
      total = temp + total;
    } else if (n >= 40) {
      total = "XL" + total;
    } else if (n >= 10) {
      let temp = "";
      for (let j = 0; j < digit; j++) temp += "X";
      total = temp + total;
    } else if (n == 9) {
      total = "IX" + total;
    } else if (n >= 5) {
      let temp = "V";
      for (let j = 0; j < digit - 5; j++) temp += "I";
      total = temp + total;
    } else if (n == 4) {
      total = "IV" + total;
    } else if (n >= 1) {
      let temp = "";
      for (let j = 0; j < digit; j++) temp += "I";
      total = temp + total;
    }
  }
  console.log(total);
  return total;
};
