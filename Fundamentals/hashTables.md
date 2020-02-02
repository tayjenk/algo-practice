# Hash Tables

Used to store key-value pairs, like an array, but unordered. FAST for finding, adding, and removing values.

Hash tables store key-value pairs using a `hash function`. This function takes a key,
hashes it into a int and stores the value at that int. Important elements of a hash function is that it: `fast/constant time, distributes outputs (no clustering of data,randomized as often as possible), deterministic (same input -> same output)`

The best length of a hash table is a prime number - helpful in spereading out keys uniformly

## Handling Collisions
Seperate Chaining vs Linear Probing

Seperate Chaining: if two inputs have the same hash number output, key and values are stored in a nested data structure, such as an array. Can be problematic if multiple key/values are stored at one hash number, increases time complexity having to loop over nested array.

Linear Probing: if two inputs have the same hash number ouput, key/value is stored in the next open space in the hash table. Can be problematic if you run out of space in a hash table, will need to seperate chain or remove key/values. Can lose determinstic feature of hash table.
