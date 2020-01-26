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

Creating pointers that iterate through the data structure until one or both hit a condition.
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

1. --A-- --B-- (a and b do not overlap)
2. --A--B-- (a and b overlap, b ends after a)
3. ---A--- (a completely overlaps b)
   -B-
4. --B--A-- (a and b overlap, a ends after b)
5. -A- (b completely overlaps a)
   ---B---
6. ----B---- --A-- (a and b do not overlap)

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

## Divide and Conquer / Modified Binary Search

Dividing a data set into smaller chunks, then repeating with a subset of data in order to find a certain element(key).
Identify start and end and calculate middle.
If key === middle, return middle otherwise determine if key is < or >= middle.
Repeat process of finding middle and determining direction until key is or is not found. Cuts data to search through by half with every iteration.
--> given a `sorted` array, linked list, or matrix
--> can TREMENDOUSLY decrease time complexity
--> data must be sorted

```
Order-agnostic Binary Search - E
Search in a Sorted Infinite Array - M
```

## In-place Linked List Reversal

Reversing nodes of a linked list in-place (using existing nodes w/o using extra memory --> optimized space complexity?).
Two variables (current and previous) pointing to the head and the previous node (initialized to null).
Reverse current node by pointing it to the previous before moving onto the next node.

previous = null
2(current) - 4 - 6 - 8 - 10 - null

null - 2(previous) | 4(current) - 6 - 8 - 10 - null

null - 2 - 4(previous) | 6(current) - 8 - 10 - null

```
Reverse a Sub-list - M
Reverse every K-element Sub-list - M
```

## Tree BFS

BFS (breadth first search) technique to traverse a tree - traversing a tree level by level.
Use a queue to keep track of nodes of current level before moving to the next.
Push the root node into the queue and keep iterating until the queue is empty.
Each iteration, "visit"/ remove the head node from the queue and insert all its children into the queue.
--> traverse a tree level by level or level order

```
Binary Tree Level Order Traversal - E
Zigzag Traversal - M
```

## Tree DFS ---> have to be binary search tree??

DFS (depth first search) technique to traverse a tree - pre-order vs in-order vs post-order. Going all the way to the bottom of a tree first.
Use recursion or stack(iterative approach) to keep track of previous/parent nodes while traversing.
Start at the root node, if the node is not a leaf(end), process either 3:

- PRE-ORDER: process current node first
- IN-ORDER: between processing two children
- POST-ORDER: after processing both children
  Recursively call on both child nodes to process them.
  --> asked to traverse a tree pre-order, in-order, or post-order
  --> searching for a node that is closer to a leaf(end)

```
Sum of Path Numbers - M
All Paths for a Sum - M
```

## Two Heaps --> elements have to be sorted?? Heap another tree??

Set of elements that can be divided into two parts.
Uses two heaps: mix and max heap.
Store first half of numbers in a max heap to find the largest number in the first half.
Store second half in a min heap to find the smallest number in the second half.
At any time, the median of the current list of numbers can be calculated from the top element of the two heaps.
--> useful in priority queue, scheduling
--> problem states need to find smallest/largest/median of elements in a set
--> sometimes useful for BTS

```
Find the Median of a Number Stream - M
```

## Subsets

Efficient BFS approach to handle problems of permutations/combinations of a given set of elements.
Given set: [1, 5, 3]
Start w/ empty set: [ [] ]
Adding first number to all existing subsets to create new subsets:
[ [](copy), [1] ]

Add second number: [ [], [1](copy), [5], [1, 5] ]

Add third number: [ [], [1], [5], [1, 5](copy), [3], [1, 3], [1, 5, 3], [5, 3] ]

---> Problems where you need to find the combinations or permutations of a given set

```
Subsets With Duplicates - E
String Permutations by changing case - M
```

## Top K Elements ---> order of heap??

Finding the top/smallest/frequent ‘K’ elements among a given set.
Heap best data structure to keep track of ‘K’ elements.
Insert ‘K’ elements into the min-heap or max-heap based on the problem.
Iterate through the remaining numbers and if you find one that is larger than what you have in the heap, then remove that number and insert the larger one.

Given array: [3, 1, 5, 12, 2, 11]
First three(K) numbers into the heap:
  1
/   \
5   3
array = [12, 2, 11]

Root(1) is smaller than 12 so take out 1 and insert 12:
  3
/  \
5  12
array = [2, 11]

Root(3) is larger than 2 so skip.
array = [11]

Root(3) is smaller than 11 so take out 3 and insert 11:
  5
/  \
11  12

No need for a sorting algorithm because the heap will keep track of the elements for you.
---> asked to find the top/smallest/frequent ‘K’ elements of a given set
---> asked to sort an array to find an exact element

```
Top ‘K’ Numbers - E
Top ‘K’ Frequent Numbers - M
```

## K-way Merge

Helps you solve problems that involve a set of sorted arrays.
Whenever you’re given ‘K’ sorted arrays, you can use a Heap to efficiently perform a sorted traversal of all the elements of all arrays.

Given lists:
L1 [2, 6, 8]
L2 [3, 6, 7]
L3 [1, 3, 4]

Insert first element of each lists into heap:
 1
/  \
2  3

Take out the smallest(top) element from the heap and add it to the merged list.
Insert the next element of the same list into the heap.
Merged list: 1
 2
/  \
3  3

Repeat steps populate the merged list in sorted order.
Merged list: 1 - 2
 3
/  \
6  3

---> problem will feature sorted arrays, lists, or a matrix
---> problem asks you to merge sorted lists, find the smallest element in a sorted list

```
Merge K Sorted Lists - M
K Pairs with Largest Sums - H
```

## Topological Sort(Graph)
Topological: way in which constituent parts are interrelated or arranged

Used to find a linear ordering of elements that have dependencies on each other.
Example: if event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’ in topological ordering.

1. Initialization
 - Store the graph in adjacency lists by using a HashMap
 - To find all sources, use a HashMap to keep the count of in-degrees. Build the graph and find in-degrees of all vertices.

 2. Build the graph from the input and populate the in-degrees HashMap.

 3. Find all sources
 - All vertices with ‘0’ in-degrees will be sources and are stored in a Queue.

4. For each source, do the following things:
 - Add it to the sorted list.
 - Get all of its children from the graph.
 - Decrement the in-degree of each child by 1.
 - If a child’s in-degree becomes ‘0’, add it to the sources Queue.
 - Repeat until the source Queue is empty.

--> dealing with graphs that have no directed cycles
--> asked to update all objects in a sorted order
--> have a class of objects that follow a particular order

```
Task scheduling - M
Minimum height of a tree - H
```
