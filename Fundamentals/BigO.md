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

#### Adding vs. Multiplying vs. Halving Runtimes:

##### Add Runtimes: O(A+B)
"When A work is done first, then do work B"
example: two separate for loops

##### Multiply Runtimes: O(A*B)
"When B work is done for each element of A"
example: nested for loop

#### O(log n) Runtime:
If number of elements in a problem is halved each time

## Space Complexity
How much additional memory is needed to run the code.
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
