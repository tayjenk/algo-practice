# Big O Notation

Analyzing the overall performance of an algorithim and how the runtime grows as input size grows.

"worst case scenario"

Preferred as measuring the average and best cases don't show an algo's efficiency
> If a manager wants to calculate the time complexity for a day's worth of tasks and get a "safe" measure of how long it may take, we need to factor the max time the task will take to complete.

## Time Complexity
Analizing the runtime of an algorithm as input size increases.
The rate of growth of time with respect to the input.
```
Shorthands:
* Aritmetic operations are CONSTANT
* Variable assignments are CONSTANT
* Accessing elements in an array or object is CONSTANT
* Programs that take the same units of time regardless of input size are CONSTANT
* Loops: complexity = length of loop x complexity of what is inside of loop
```

TO COMPUTE:
1. list all basic operations --> assignment, comparison, arithmetic
2. number of times each operation is executed
3. sum all the counts
4. drop leading constants
5. ignore lower order terms

```
                                         (# of executions)
const n = 10                                     1
const pie = 3.14                                 1
let sum = 0                                      1

for (let i = 1; i < n; i+=3) {
  console.log(pie)                             1 * n/3
  for (let j = 1; j< n; j+=2) {
    sum += 1                                 1 * n/2 * n/3
    console.log(sum)                         1 * n/2 * n/3
  }
}
Time Complexity = O(n^2)
= 3 + n/3 + (n/2 * n/3) + (n/2 * n/3)
= 3 + n/3 + 2n^2/6
= 3 + 2n^2 + n/3
--> drop the constants = n^2 + n
--> drop lower order terms = n^2
```

### Adding vs. Multiplying vs. Halving Runtimes:

##### Add Runtimes: O(A+B)
"When A work is done first, then do work B"
example: two separate for loops

##### Multiply Runtimes: O(A*B)
"When B work is done for each element of A"
example: nested for loop

Ranked worst to best:
O(n!) > O(2^n) > O(n^2)<--quadratic time > O(n log n) > O(n)<--linear time > O(log n)<--logarithmic time > O(1)<--constant time

### Amortized Time:
Time complexity when an algorithm has a very bad time complexity only once in a while besides the time complexity that happens most of time.
Example: An ArrayList, a data structure in Java that contains an array that gets doubles in size when it hits original capacity.
In ArrayList, two time complexities exist: O(1) for insertion and O(n) to copy old to new bigger array.
Amortized time looks at an algorithm from the viewpoint of total running time rather than individual operations. We don’t care how long one insert takes, but rather the average time of all the calls to insert. </br>
Dynamic arrays don't require size to be specified ahead of time but the average or amortized appends can be expensive.

### O(log n) Runtime:
If number of elements in a problem is halved each time
Example: binary search

### Recursive Runtime:
Simple recursive call: O(n) time, O(n) space
When recursive function makes multiple calls, it's O(branches^depth)
Example: Recursive Fibonacci sequence with 2 branches: O(2^n)

## Space Complexity
How much additional memory is needed to run the code.
NEW variables
> Auxiliary Space Complexity --> space required by the algo, not including space taken by the inputs/the algo itself
```
Shorthands:
* Most primiives (booleans, integers, etc) --> O(1)
* Strings --> O(N) --> N = length of string
* Reference types (arrays, objects) --> O(N) --> N = length or number of keys
```
## Objects vs Arrays

#### Big O of Objects
Objects are unordered, fast

```
Insertion
Removal       ---> 0(1) constant
Access

Searching     ---> O(N) would need to search through each key and/or value
```

#### Big O of Arrays
Ordered lists
> use when you need order, as it can be a cost to performance

```
Access             ---> 0(1)
Searching          ---> O(N) would need to search through each element
Insertion:
(at the end)       ---> 0(1)
(at the beginning) ---> O(N) would need to reassign indices of any following elements
Removal:
(at the end)       ---> 0(1)
(at the beginning) ---> O(N) would need to reassign indices of any following elements
```

Not advised to insert or remove from the beginning of an array as it is not as efficient.
PUSH & POP
(faster array methods performed at the end)
vs.
SHIFT & UNSHIFT
(methods a cost to performance, performed at the beginning)

#### In-Place vs Out-of-Place Functions
In-place functions modify the original data structures or objects performed on. (ex: Array.splice)
`O(1) space`. Saves time and space, but altering inputs can cause side effects and affect code outside the function. Use if space constrained or sure original input is not needed, even for debugging. 

Out-of-place functions do not alter the data structure or object it is performed on. Makes a copy that is manipulated and changed. (ex: Array.map) `O(n) space`. Safer, avoids side effects.

Primitive values (int, characters) are copied when passed as arguments, complex data structures (arrays, objects) are passed by reference(point to different places in memory)

## Examples:
Big O Excercises Derived From Cracking the Coding Interview

Ex1:</br>
2 variable assignments --> 2</br>
1 for loop --> n</br>
nested arithmetic --> 1</br>
2nd for loop --> n</br>
nested arithmetic --> 1</br>
print statement --> 1</br>
= 3 + 2n = **0(N)**

Ex2:</br>
1 for loop --> n</br>
nested for loop --> n</br>
nested print statement --> 1</br>
= n * n * 1 = **O(N^2)**

Ex3:</br>
1 for loop --> n steps</br>
nested for loop (starting at i + 1) --> n-1 steps</br>
nested print statement --> 1</br>
= (n * n-1)/2 * 1 = n^2 - n = **O(N^2)** </br>
*(need clarification on the "/2")*

Ex4:</br>
1 for loop of length A --> n</br>
nested loop of length B --> m</br>
nested comparison if statement --> 1</br>
nested print statement --> 1</br>
= n * m * 1 * 1 = **O(NM)**</br>
*(not n^2 because their are two different inputs)*

Ex5:</br>
1 for loop of length A --> n</br>
nested for loop of length B --> m</br>
nested for loop of length C (k<100,000, not dependent on input size, constant) --> 1</br>
nested print statement --> 1</br>
= n * m * o * 1 = **O(NM)**

Ex6:</br>
1 for loop of half input length --> n</br>
nested assignment --> 1</br>
nested assignment --> 1</br>
nested assignment --> 1</br>
nested assignment --> 1</br>
= log n * 1 = **O(N)**</br>
*(even if loop only goes through half the array, doesn't impact big O, still goes through indiv. elements)*

Ex7:</br>
- O(N + P), where P < n/2 = O(N) *N is the dominant term*
- O(2N) = O(N) *drop the constant*
- O(N + log N) = O(N) *N dominated log*
- O(N + M) != O(N) *no established relationship btw N & M, so keep both*

Ex8:</br>
s = length of longest string</br>
a = length of array</br>
fn(array of strings) {</br>
  sort each string; --> s log s *(each string)* --> a * s log s *(for all strings in array)*</br>
  sort entire array of sorted strings --> s *(string comparison)* --> a log a *(total comparisons)* --> s * a log a </br>
} </br>
= (a * s log s) + (a * s log a) = 2a*s(log s + log a) = **O(a * s(log s + log a))**

Ex9:</br>
if comparsion statement --> 1</br>
return statement --> 1</br>
return 1 recursive call + arithmetic + 2nd recursive call --> 2^n</br>
