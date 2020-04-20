# Data Structures Overview

## Random Access Memory (RAM)

Variables (nums, strings, arrays, etc) stored in `random access memory (RAM)` or 'working memory' or 'memory'. Memory is faster but has less space
(differs from storage which has more space to store files, documents, and programs live but is slower)

RAM is like a bookcase with billions of numbered shelves, numbers designating a shelf's address. A shelf holds `8 bits / 0's and 1's`.

**8 bits === 1 byte**

A processor does all the work within the computer and goes through a `memory controller` which reads and writes to and from the RAM. Has a direct connection to each shelf of RAM. *access the bits at any random address in memory right away*

The processor stores a `cache` where it stores a copy of data read recently from RAM. Cache is faster than reading from RAM, saves time for processor. When a processor asks for data from a given memory address, the memory controller also sends data from nearby memory addresses which is all stored in the cache. Reading from sequential memory is faster than jumping around.

## Binary Numbers

Standard number system uses base 10 (decimal), each digit has 10 possible values(1, 2, 3, ... 9, 0)</br>
vs.</br>
computers use **Base 2** numbers (binary), each digit has 2 possible values (0 & 1)

```
Base 10:
101 (100s - 10s - 1s) = 1 hundred + 0 tens + 1 one = 101
10^0 = 1
10^1 = 10
10^2 = 100
10^3 = 1000
etc...

Base 2:
101 (4s - 2s - 1s) = 1 four + 0 twos + 1 one = 5
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 16
etc...
```
**unsigned integers:** unsigned = non-negative, integer = whole number, not fractional or decimal. Signed integers reserve the leftmost bit for the sign </br>
`0 = positive, 1 = negative`

## Fixed Width Integers

1 byte = 8 bits</br>
2^8 = 256 numerical possibilities with 8 bits / 255 possibilities in an 8 bit unsigned integer</br>
4 bytes = 32 bits (8 * 4) = 2^4 possibilities</br>
8 bytes = 64 bits (8 * 8) = 2^8 possibilities</br>

**with 'n' bits, 2^n expresses the different numerical possibilities**

Anything higher than the number of possibilities is an `integer overflow`</br>
Integers are `fixed width or fixed length`, number of bits doesn't change.</br>
ex: 64 bit integer - 0 or 193,457 will still take up 64 bits.</br>

**ADVANTAGE:**
Space Complexity: 0(1) / constant space. Simple operations on fixed witdh integers is 0(1) time (addition, subtraction, division)

**TRADEOFF:**
Values are limited to 2^n possibilities

## [Hash Tables](hashTables.md)

Hash Tables / Hash maps can be thought of as array-like table with two columns. Column for `keys` and `values`. Any given piece of data (number, character, string) can be translated into a key / index in the array through a `hashing function`. And the value is stored at that index.

`Methods: set, get, keys, values`

**ADVANTAGE:**
Time Complexity: `0(1) constant lookup time` for values

**TRADEOFF:**
Due to hash collisons, if a hash function is not optimal, lookups can take 0(n) time. Collions are rare enough with a good hash function that the average lookup is 0(1). Looking up a key by value is 0(n)

### Big O of Hash Tables
* space	O(n)
* insert	O(1)	(worst case: O(N))
* lookup	O(1)	(worst case: O(N))
* delete	O(1)	(worst case: O(N))

## Arrays
Organizes items sequentially in memory at numbered indicies. Each slot in the array corresponds to a slot(s) in RAM.</br>
Every item in an array must be the same size/same number of bytes.</br>
Array is uninterrupted(contingous) in memory. No gaps or "skipping over" spots of memory. `O(n) space`

**ADVANTAGE:**
The memory controller has a direct connection to each slot in RAM, fast lookups array `O(1) time`. </br>
Fast appends to the end of an array, `O(1) time`. </br>
If content stored in an array are of differing sizes, data can be stored wherever in memory and each array element will hold the address in memory / "pointer".

**TRADEOFF:**
Each array item must be the same size,requires a block of uninterupted free memory. Pointer-based arrays require less uninterupted memory and are slower / not cache friendly as the memory controller cannot send sequential / nearby data (0(1) lookup time remains).</br>
Costly inserts and deletes in the middle or beginning. Other elements must be moved / shifted. O(n) time.

### Big O of Arrays
* space	O(n)
* lookup	O(1)
* append	O(1)
* insert/prepend	O(n)
* delete	O(n)

## [Linked Lists](singlyLinkedLists.md)
A linked list organizes items in nodes, with each node storing a pointer to the next. Best uses for `stacks and queues` that only need fast operations on the ends.

`Methods: push, pop, shift, unshfit, get, set, insert, remove, reverse`

**ADVANTAGE:**
Fast appends and prepends, O(1) time.

**TRADEOFF:**
Costly lookups, to access or edit a node within a linked list requires walking from the head to the wanted node, taking O(i) time.

### Big O of Singly Linked Lists
* space O(N)
* prepend O(1)
* append O(1)
* lookup O(N)
* insert O(1) (actual act of insertion, lookup for insertion is O(N))
* removal O(N)

### [Doubly Linked Lists](doublyLinkedLists.md)
In a basic linked lists, nodes contain pointers to only the following node. Doubly linked lists have pointers to the *next* and *previous* nodes. DLL allow traversing a linked list `backwards`.

### Big O of Doubly Linked Lists
* space O(N)
* prepend O(1)
* append O(1)
* lookup O(N)
* insert O(1)
* removal O(N)

## [Stacks and Queues](stacksQueues.md)
Stacks store data in a last in, first out `LIFO` order. Can be created using an array or singly linked list.
`Stack Methods: push(val), pop, peek, isEmpty`

Queues store data in a first in, first out `FIFO` order. Can be created using an array or singly linked list.
` Queue Methods: enqueue(add to tail), dequeue(remove from head)`

**ADVANTAGE:**
Fast operations, all adds and removals take O(1) time

## [Trees](trees.md)
Non-linear data structures that contain root and child nodes

`Binary Trees` can have values of any type but at most two children for every parent node
`Binary Search Trees` more specific binary trees where every node to the left of a parent is less than its value and every node to the right is greater than. BST must only have data that is comparable to each other

Traverse trees using `BFS` (going across the levels of a tree) or `DFS` (going to down the height of a tree - PreOrder, PostOrder, or InOrder)

## [Binary Heap](binaryHeaps.md)
Binary Tree-like data structure useful for sorting or creating priority queues.

Either a `MaxBinaryHeap` where all children are smaller than its parent element or `MinBinaryHeap` where all children are larger than its parent element. Every level of a heap must be filled before adding to a new level of the tree, no implied relationship btw siblings.

Can be easily represented with an array.

## [Graphs](graphs.md)

Data structure that organizes items in an interconnected network.
Each item is a node(`vertex`) connected by `edges`

Can be represented by an `adjacency matrix` (good for identifying the existance of connections/edges quickly, ideal for elemenets with a lot of connections) or `adjacency list` (good for looking up a specific edge btw two vertices, ideal for more elements than connections)

**ADVANTAGE:**
Representing links. Graphs ideal for working with elements connected to other elements (cities, highways, ethernet cables, social media connections)

**TRADEOFF:**
Scaling challenges. Most have a 0(n log n) time complexity or slower. Depending on graph size, running across nodes may not be feasible

## Dynamic Programming

Method of solving a complex problem by breaking it down into smaller, overlapping subproblems.
Finding th optimal solution to each of those subproblems and storing each solution so as not to repeat subproblems
ex:
memoization / top down - factorials, fibonnaci (has limit and could cause stack overflow)
tabulation / btm up - storing the result of a previous result, reverse fibonnaci, usually dont using iteration, better space complexity (does not take up stack space)

**Time Complexity:** O(N)
**Space Complexity:** memoization is worse due to size of callstack
```
const fib_memo = (n, memo = {}) => {
  if(memo[n]) return memo[n]
  if(n <= 2) return 1
  memo[n] = fib(n-1, memo) + fib(n-2, memo)
  return memo[n]
}

const fib_table = n => {
  if(n <= 2) return 1
  const fibNums = [0,1,1]
  for(let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}
```
