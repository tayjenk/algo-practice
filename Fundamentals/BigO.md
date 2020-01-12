# Big O Notation

Analyzing the overall performance of an algorithim and how the runtime grows as input size grows.

"worst case scenario"

## Time Complexity
Analizing the runtime of an algorithm as input size increases.
```
Shorthands:
* Aritmetic operations are CONSTANT
* Variable assignments are CONSTANT
* Accessing elements in an array or object is CONSTANT
* Loops: complexity = length of loop x complexity of what is inside of loop
```

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

##### Big O of Objects
Objects are unordered, fast

```
Insertion
Removal       ---> 0(1) constant
Access

Searching     ---> O(N) would need to search through each key and/or value
```

##### Big O of Arrays
Ordered lists
> use when you need order, as it can be a cost to performance

```
Access             ---> O(1)
Searching          ---> O(N) would need to search through each element
Insertion:
(at the end)       ---> O(1)
(at the beginning) ---> O(N) would need to reassign indices of any following elements
Removal:
(at the end)       ---> O(1)
(at the beginning) ---> O(N) would need to reassign indices of any following elements
```

Not advised to insert or remove from the beginning of an array as it is not as efficient.
PUSH & POP
(faster array methods performed at the end)
vs.
SHIFT & UNSHIFT
(methods a cost to performance, performed at the beginning)
