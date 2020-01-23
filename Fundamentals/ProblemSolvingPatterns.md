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

## Sliding Window

Perform a required operation on a specific window size of a given array or linked list. Such as finding the longest subarray containing all 1s. Starts from the first element and keeps shifting and adjusting the window according to the problem.
--> input is a linear data structute (linked list, array, string)
--> prompt is asking to find the longest/shortest substring, subarray, or desired val

```
Maxium sum subarray of size 'K' - E
Longest substring w/ 'K' distinct characters - M
String anagrams - H
```

## Two Pointers / Iterators

Two pointers iterate through the data structure until one or both hit a condition.
Searching pairs in a sorted array or linked list.
Comparing each element of an array to its other elements.
Can help find solution without iterating back and forth with one pointer, can have better runtime or space complexity.
--> dealing with sorted arrays or linked lists, need to find set of elements meeting certain constraints
--> not useful in a singly linked list where you cannot move backwards
--> set of elements in array is a pair, triplet, or subarray

```
Squaring a sorted array - E
Triplets that sum to zero - M
Comparing strings that contain backspaces - M
```

## Fast & Slow Pointers / Hare & Tortoise

Two pointers move through the array, or linked list at differing speeds.
Useful for cyclic linked lists or arrays.
Fast pointer sho0uld catch the slower once both are in a cyclic loop.
--> loop in a linked list or array
--> need to know the position of a certain element, or overall length of linked list
--> determining if a linked list is a palindrome (word or phrase that reads the same backwards and forwards)

```
Linked List Cycle - E
Palindrome Linked List - M
Cycle in a Circular Array - H
```

## Merge Intervals

Dealing with overlapping intervals. Need to find overlapping intervals or merge if intervals overlap.

Example:
Given two intervals ('a' and 'b'), there will be 6 different ways the two can relate

------time--->
1. --A--    --B--  (a and b do not overlap)
2. --A--B--        (a and b overlap, b ends after a)
3. ---A---         (a completely overlaps b)
     -B-
4. --B--A--        (a and b overlap, a ends after b)
5.   -A-           (b completely overlaps a)
   ---B---
6. ----B----    --A-- (a and b do not overlap)

--> asked to produce a list with only mutually exclusive intervals
--> term `overlapping intervals`

```
Intervals Intersection - M
Max CPU load - H
```

## Cyclic Sort
Deal with arrays containing numbers in a given range.
Iterates over one number, if current num is not at correct index, swap with number at its correct idx.
--> sorted array with nums in a given range
--> asked to find missing/duplicate/smallest num in a sorted/rotated array

```
Find the missing number - E
Find the smallest Missing Positive Num - M
```
