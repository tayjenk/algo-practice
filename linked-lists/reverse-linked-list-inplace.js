/*
function takes head of singly linked list and reverses in place
will always have at least one node
every node has a value and next property

edge case:
if there is only one node

head = 0 -> 1 -> 2 -> 3 -> 4 -> 5
       |    |
			 p1.  p2

while p2 !== null

swap p1.value & p2.value
head = 1 -> 0 -> 2 -> 3 -> 4 -> 5
       |         |
			 p1.       p2
swap p1.value & p2.value
swap p1.next.value & p2.value
head = 2 -> 1 -> 0 -> 3 -> 4 -> 5
       |         |
			 p1.       p2
swap p1.value & p2.value
while p2 !== 0
swap p1.next.value & p2.value
head = 3 -> 2 -> 1 -> 0 -> 4 -> 5
       |              |
			 p1.            p2
swap p1 & p2 values
node = p1.next (2)
while p2.value !== 0
swap n.value & p2.value
node = node.next
head = 4 -> 3 -> 2 -> 1 -> 0 -> 5
       |                   |
			 p1.                 p2
swap p1 & p2 values
n = p1.next (3)
while p2.value !== 0
swap n.value & p2.value
node = node.next
head = 5 -> 4 -> 3 -> 2 -> 1 -> 0
       |                   N    |
			 p1.                      p2

head = 5 -> 4 -> 3 -> 2 -> 1 -> 0
*/

function reverseLinkedList(head) {
  //only one node
	if(!head.next) return head
	let p1 = head, p2 = head.next
	//console.log({p1, p2})
	while(p2) {
		//console.log({p1, p2})
		let hold = p1.value
		p1.value = p2.value
		p2.value = hold
		//console.log('swaping p1, p2', p1.value, p2.value)
		let n = p1.next
		//console.log({n, p2})
		while(p2.value !== 0) {
			hold = n.value
			n.value = p2.value
			p2.value = hold
      n = n.next
		}
		//console.log({p1, p2})
		p2 = p2.next
		//console.log('p2 shift', p1, p2)
	}
	return head
}

function reverseLinkedList(head) {
  //p1 is the head of the reversed linked list
  //p2 is the node moving
  let p1 = null, p2 = head
	while(p2) {
    //p3 holds the next node to visit
    const p3 = p2.next
    //connect p1 and o2 by shifting p2 in front of p1
    p2.next = p1
    //reassing p1 to the head of the new linked list
    p1 = p2
    //assign p2 to the next node to visit
		p2 = p3
	}
	return p1
}
/*
build new linked list off of a new variable p1
while p2 & p3 follow the remainder of the orig linked list
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5
       |    |
       p2  p3

p1 = null
p2.next = p1
p1 = p2
p1 = 0 -> null

p2 = p3
p3 = p2.next

p2.next = p1
p1 = p2
p1 = 1 -> 0 -> null
*/
