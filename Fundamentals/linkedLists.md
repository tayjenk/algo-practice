# Linked Lists

A piece of data(string, charater, etc) can be stored in a `node` object. A series of nodes each containing a pointer to the next node in the series, in addition to data is a `linked list`.

Nodes can be stored anywhere in memory and connected nodes do not have to be next to each other and do not have to be in order.

`head` the first node in a linked list
`tail` the last node in a linked list (some refer everthing after the head as the "tail")

When prepending to the beginning of a linked list: new nodes "next" pointer is assigned to the current head and the head is reassigned to the new node.

When appending to the end of a linked list: the current tail's next pointer is assigned from null to the new node and IF there is a tail variable, it is reassigned to the new tail node.

Linked list appends and prepends take O(1) time but better than the worst case O(N) time for dynamic arrays.
*Can tail appends take O(N) time if there is no pointer to the tail node? We don't know how long our tail is...

Quick appends and prepends are possible because nodes of a linked list can be stored anywhere in memory and do not have to be stored next to each like (vs. array). The advantage of an array is constant O(1) lookup time, since all elements are stored in next to each other in memory.

To find the ith node in memory of linked list requires traversing the list and keeping count until the desired node is found. Lookups take O(i) time, where i is the node trying to find. Linkedlists are also not cache friendly (vs. arrays) because the next node could be stored *anywhere* in memory

```
function getIthItemInLinkedList(head, i) {

    if (i < 0) {
        throw new Error("i can't be negative: " + i);
    }

    var currentPosition = 0;
    var currentNode = head;

    while (currentNode) {

        if (currentPosition === i) {
            // found it!
            return currentNode;
        }

        // move on to the next node
        currentNode = currentNode.next;
        currentPosition++;
    }

    throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");
}
```
