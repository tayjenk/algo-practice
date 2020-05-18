
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

//using object and linkedlist approach
/*
create a least recently used cache class
all methods should perform in constand time

cache = {
  "a" : Value {value: 2, next, prev},
  "b" : Value {value: 1, next, prev},
  "c" : Value {value: 3, next, prev}
 }
*/

class Value {
  constructor(key, value) {
    this.key = key,
    this.value = value,
    this.next = null,
    this.prev = null
  }
}


class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    //cache should have order [most used --> least used]
    //use linked list for constant access
    this.currSize = 0
    this.head = null, //most used
    this.tail = null, //least recently used
    this.cache = {} //cache keys point to nodes on linked list
  }

  //if cache reaches max, least recently used pair is evicted
  //new pair should replace it
  //**//insertly pair with a key that exists, should replace the value
  insertKeyValuePair(key, value) {
		if(this.currSize === 1 && this.cache[key]) {
			this.cache[key].value = value
			return
		}
    if(this.cache[key]) {
      this.removeConnections(this.cache[key])
      this.currSize--
    }
    //if the cache has reached the max size, remove LRU/tail from cache
    if(this.currSize === this.maxSize) this.removeLRUFromCache()
    //otherwise create a new value node
    //store key in cache with value equal to value node
    const newValue = new Value(key, value)
    this.cache[key] = newValue
    //the there is no head, assign head and tail to the newValue
    if(!this.head) this.head = this.tail = newValue
    else {
      //otherwise add newest key to head of nodes
      this.head.prev = newValue
      newValue.next = this.head
      this.head = newValue
    }
    //increase currSize
    this.currSize++
		console.log(this)
  }

  //retreving a value from a given key that is nonexistant returns null
  //if key in cache exists, shift node to the head of linked list
  //return the value of the head value
  getValueFromKey(key) {
    //if key does not exist in cache, return null
    if(!this.cache[key]) return null

		const getKey = this.cache[key]
    if(getKey === this.head) return this.head.value
    
    //if the key is anything but the head
    //get the node through the cache, close connections btw the prev and next
    // shift node to the head of the list
    else {
      this.removeConnections(getKey)
      this.head.prev = getKey
      getKey.next = this.head
      getKey.prev = null
      this.head = getKey
		}
    //otherwise the key is the head and do not need to rearrange anything
    //return the current head's value
    return this.head.value
  }

  //gets most recently entered key --> this.head.key
  //if !this.head does not exist return null
  getMostRecentKey() {
    return this.head ? this.head.key : null
  }

  removeLRUFromCache() {
    //LRU will always be tail node of cache
    //delete the key of tail node from the cache
    //reassign the tail to the prev node and set next property to null
    //reduce the currSize of cache
		if(!this.tail) return
		delete this.cache[this.tail.key]
		if(this.currSize === 1) {
			this.tail = this.head = null
		} else {
			this.tail = this.tail.prev
			if(this.tail) this.tail.next = null
		}
    this.currSize--
  }

  removeConnections(node) {
    if(node.prev) node.prev.next = node.next
    if(node.next) node.next.prev = node.prev
		else this.tail = node.prev
    node.prev = node.next = null
  }
}


