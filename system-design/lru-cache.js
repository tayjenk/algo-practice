
/* LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item. --> invalidate the oldest item

The cache is initialized with a positive capacity. --> establish pre-set capacity

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

//create a new class of LRUcache that takes in a pre-determined capacity --> capacity is a property on the instance
//create put and get methods
// this.map = new Map
// put method:
// function takes a key and value --> key = 1, value = 1
// add to map the key/value pair
//Map = {
//    [1, 1]
 //   [2, 2]
//}
//put(1,1)
// check Map.size/length
// if map size < LRU capacity
// Map.add([1,1])
//if map.size = LRU capacity
// remove the least used item and add the new key/value
//get --> takes a key and returns the value
// delete from map the key/value pair associated with given key
//store in variable to be returned
// add key/value pair back into Map
//return value stored in variable

class LRU {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    const value = this.cache.get(key) //holds value at key or undefined
    if(!value) return -1
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key, value) {
    if(this.cache.has(key)) {
      this.cache.delete(key)
    }
    else if(this.cache.size === this.capacity) {
      const leastUsed = this.cache.keys().next().value
      this.cache.delete(leastUsed)
    }
    this.cache.set(key, value)
  }
}

//Map = {
//
 //   [2, 2]
//.   [1, 1]
//}
