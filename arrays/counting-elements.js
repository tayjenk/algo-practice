/*
Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.

Input: arr = [1,2,3]
Output: 2

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0

Input: arr = [1,3,2,3,5,0]
Output: 3

Input: arr = [1,1,2,2]
Output: 2

FIRST APPROACH:
initialize counter of valid elements
//create obj to store seen elements and element + 1
{
 1 : 2
 2 : 3
 3 : 4
}
//loop through array ex: [1,2,3]
// i=0 --> 1
check if element - 1 is key in object && element is value
if not store in obj, set to null
{
 1 : null
}
i=1 --> 2
if element - 1 is key && value = null, set [element - 1] = element
and create key from element, value set to null
{
    1:2
    2:null
}
i=2 --> 3
{
    1:2
    2:3
    3:null
}
loop through object count number of values !== null

EDGE CASE: finding if x+1 is in the arr is not a 1:1 relationship
[1, 1, 2, 2] --> 2
[1, 1, 2] --> 2
for every element check if element + 1 exists period, do not need element + 1 for each element

NEW APPROACH:
create set of elements in array
loop through array and check if set contains element + 1, if so counter++
*/
var countElements = function(arr) {
    const elements = new Set(arr)
    return arr.reduce((total, el) => {
      (elements.has(el + 1)) && (total++)
      return total
      }, 0)
};

//O(N) time | O(N) space
