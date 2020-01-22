## Understanding the Problem --- RESTATE
1. Can I restate this in my own words?
2. What are the inputs?
3. What are the outputs?
4. Can outputs be determined from the inputs? Do I have enough info to solve the problem?
5. How should I label import pieces of data within the problem?

```
=============================================================
Write a function that takes two numbers and returns their sum.
=============================================================
Are the inputs integers? Floats? Strings for large numbers?
How large are the inputs?
Are the outputs integers? Floats? String?
What happens if someone only puts in one input? four?
```

## EXAMPLES
1. Start w/ simple examples, easiest use cases then more complex
2. Edge cases, empty imputs, invalid inputs

```
========================================================================================
Write a function that takes a string and returns counts of each character in the string.
========================================================================================
charCount('aaaa') //{a:4}
charCount('hello') //{h:1, e:1, l:2, o:1}
Are we returning just the letters included? What about letters not included?
Obj could be initialized with every letter in alphabet set to 0, just increment

"my phone number is 1234567890"
account for spaces? symbols($/_/-)? ignore character casing(H vs h)?
```

## Break it Down --- Detailed APPROACH

## Solve or Simplify --- CODE

Break down solving the problem into smaller pieces. Solve what you can and either ask interviewer for suggestions or try to solve later. With a detailed approach if you do not finish, interviewer can see where you are going.

## Look Back & Refractor --- TEST / OPTIMIZE

Review code, find code can be improved/optimized. Learn from other solutions.

========================================================================================

## Frequency Counters --- memoizing?

 Use obj or sets to collect values/freq of values
--> can help avoid using nested loops or O(n^2) operations
--> useful for multiple inputs/data and need to compare them
```
Example:
Function will accept two arrays and return true if every val in the first array has it's value squared in the second array. Frequency of vals must be the same.

same([1, 2, 3], [4, 1, 9]) //true
same([1, 2, 3], [1, 9]) //false
same([1, 2, 1], [4, 4, 1]) //false
```
