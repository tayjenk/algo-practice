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
// set up initial counter to the value of first numeral in string
//*roman numerals written from largest to smallest*
// loop through string, finding value for each numeral
// next numeral should always be larger than its previous numeral
// if current value is less than or equal to the previous value, add value to counter
// if current numeral's value is greater than the previous, subtract it from the counter and add to counter the difference btw the current and prev value
// ex: MCM --> M = 1000 C = 100 M = 1000
//counter = 1000
//curr = 100 prev = 1000 (curr is less than prev)
//counter = 1100
//curr = 1000 prev = 100 (curr is greater than prev)
//counter = (counter - prev) + (curr - prev) ---> counter - prev*2 + curr
//##remove prev value and add difference btw curr and prev value
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
