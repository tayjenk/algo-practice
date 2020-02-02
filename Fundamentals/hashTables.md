# Hash Tables

Used to store key-value pairs, like an array, but unordered. FAST for finding, adding, and removing values.

Hash tables store key-value pairs using a `hash function`. This function takes a key,
hashes it into an index and stores the value at that index. Important elements of a hash function is that it: `fast/constant time, distributes outputs evenly (no clustering of data,randomized indexes as often as possible), deterministic (same input -> same output)`

The best length of a hash table is a prime number - helpful in spereading out keys uniformly

## Handling Collisions

Seperate Chaining vs Linear Probing

**Seperate Chaining:** if two inputs have the same hash number output, key and values are stored together in a nested structure, such as an array. Can be problematic if multiple key/values are stored at one hash number, increases time complexity having to loop over nested array.

**Linear Probing:** if two inputs have the same hash number ouput, key/value is stored in the next open space in the hash table. Can be problematic if you run out of space in a hash table, will need to seperate chain or remove key/values. Can lose determinstic feature of hash table.

## Method: SET

Accepts a key/value pair
Hashes the key
Stores key/value pair in the hash table array via separate chaining

## Method: GET

Accepts a key
Hashes the key
Find key/value pair in hash table, returns corresponding value
Returns undefined if key isn't found

## Method: KEYS

Loops through hash table array and returns all keys in the table as an array

## Method: VALUES

Loops through hash table array and returns all values in the table as an array

* how do hangle duplicate keys or values?? Keys should always be unique (maybe adjust set function?) values usually return one set of value

```
class HashTable {
  //default prime number size of hash table/array
  constructor (size=53) {
    this.keyMap = new Array(size )
  }

  //hash function
  _hash(key) {
    let total = 0
    let weirdPrime = 31
    //sets a limit to amount of looping if input key is 1000 characters long
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      //gets character code and converts to location number in alphabet ex: 'a' = 1
      let value = char.charCodeAt(0) - 96
      //using modulo sign to find number within the length of the keyMap/hash table
      let total = (total * weirdPrime + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let hashNum = this._hash(key)
    if (!this.keyMap[hasNum]) {
      this.keyMap[hashNum] = []
    }
    this.keyMap[hashNum].push([key,value])
  }

  get(key) {
    let hashNum = this._hash(key)
    if (this.keyMap[hashNum]) {
      const found = this.keyMap.hashNum.find(keyVal => keyVal[0] === key)
      return found[1]
    }
    return undefined
  }

  keys() {
    let tableKeys = []
    this.keyMap.forEach(keyVal => {
      if(keyVal) {
        tableKeys.push(keyVal[0])
      }
    })
    return tableKeys
  }

  values() {
    let tableValues = []
    this.keyMap.forEach(keyVal => {
      //only unique values are pushed into new array
      if(keyVal && !tableValues.includes(keyVal[1])) {
        tableValues.push(keyVal[1])
      }
    })
    return tableValues
  }
}
```

## Big O of Hash Tables
In general: Insertion - Deletion - Acessing = 0(1) constant time
Ultimately dependent on how good the hash function used is, how evenly data is distributed. Bad hash functions that cluster data or distrubes data into one spot would create a list resulting in 0(n) time.
Best to use hash functions already created through librabries.
