//RESTATE...
// given a string of roman numerals, convert to integer
// account for 6 instances such as IV where a numeral is subtracted from the numeral next to it
// IV, IX
// XL, XC
// CD, CM
// checking the numerals next to any I, V, C
//*EDIT: may not be an efficient solution bc need to move to next numeral, check 6 additional numerals after that, and then add or subtract the two numerals and move further in the string, maybe try working forward or backwards through the string and checking if its value is greater or less than the one before it and add or subtract its value

//EXAMPLES...
// "III" --> 1 + 1 + 1 = 3
// "IV" --> -1 + 5 = 4
// "IX" --> -1 + 10 = 9
// "LVIII" --> 58
// L = 50; V = 5; III = 3 --> 50 + 5 + 3 = 58
// "MCMXCIV" --> 1994
// M = 1000; CM = 900 ( or 1000 - 100);

//APPROACH...
// create Map object setting roman numeral symbols and values as key/value pairs
//[['I', 1], ['V', 5]...etc]
// set up initial counter to 0
//*roman numerals written from largest to smallest*
// start and end of string and loop through, finding value for each numeral and add to counter
// next numeral should always be larger than its previous numeral
// if current numeral's value is smaller than the previous, subtract it from the counter
// return final counter

//CODE...

var romanToInt = function(s) {
  const numerals = [
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
  ]
  const numeralMap = new Map(numerals)
  let numeralVal = numeralMap.get(s[0])
  let curr, prev
  for (let i = 1; i < s.length; i++) {
    curr = numeralMap.get(s[i])
    prev = numeralMap.get(s[i-1])
    if (curr <= prev) {
      numeralVal += curr
    } else {
      numeralVal = numeralVal - prev*2 + curr
    }
  }
  return numeralVal
};
