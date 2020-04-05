/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
^^^ wording is confusing....cannot buy again if you have not sold current stock, but can sell stock and buy new stock on the same day
ex: Buy on day 1 (price = 1) and sell on day 2 (price = 2) and buy on day 2(price = 2)
**would need to clarify in interview setting
*/

//simple pass through solution
const maxProfit = function(prices) {
  let profit = 0
  for(let i = 0; i < prices.length; i++) {
      (prices[i] < prices[i+1]) && (profit += (prices[i+1] - prices[i]))
  }
  return profit
};

//O(N) time | O(1) space

//peak valley approach
const maxProfit = function(prices) {
  //initialize peak and valley at the same position
  let peak = prices[0]
  let valley = prices[0]
  let maxProfit = 0
  let i = 0

  //since we're always checking the price after current price, loop only up to prices.length - 1 (exclude last price from loop)
  while(i < prices.length - 1) {
      //find valley first: if current price is higher than tomorrow, peak will stay the same and increase i and valley = price[i]
      //continue to check at each step if i is less than prices.length - 1 as i increase throughout the loop
      //store condiitonals in while loops so we dont have to calculate at every step...
      while(i < prices.length - 1 && prices[i] >= prices[i+1]) {
        i++
      }
      valley = prices[i]
      //ultimately profit is obtained by subtracting peaks ahead and valley, incorrect to subtract current peak at this point and current valley
      //ex: [7, 1, 5, 3, 6, 4] peak = 7 valley = 1
      //after establishing valley, find the following peak
      //ex: [1,2,3,4,5] valley = 1 peak = 2
      //as peak is consistently less than the price after, just keep increasing peak
      while(i < prices.length - 1 && prices[i] <= prices[i+1]) {
          i++
      }
      //need to assign peak and valley valyes AFTER determining i
      //ex: [7,1,5,3,6,4]
      // when i = 4
      // i < length - 1 && 6 > 4 so i = 5 and valley = 4
      // i !<length - 1 (if assignment of peak was in this statement, peak would = 6 and maxProfit += 6 - 4)
      //by having assingment after conditional, peak = i = 4 and maxProfite += 4-4
      peak = prices[i]
      maxProfit += peak - valley
  }
  return maxProfit
};
//O(N) time | O(1) space
