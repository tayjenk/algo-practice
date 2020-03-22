## Graphs

Data structure consisting of a set of nodes with connections btw the ndoes

Uses for graphs:
Social networks, location/mapping, routing algos, vsiual hierarchy, file system optimizations

`Vertex` - a node within a node
`Edge` - connection btw nodes
`Undirected Graph` - no direction to the edges, two-way directions between vertices (ex. fb friends/linkedin, not a one way relationship)
`Directed Graph` - often represented with arrows to show the direction btw vertices (ex. twitter/insta, i can follow you but you dont automatically follow me)
`Unweighted/weighted Graph` - edges have no values vs assigning values, adding information to edges makes a graph weighted
`Cyclic/acyclic` - a graph is cyclic if it contains a cycle / unbroken series of vertices vs acyclic w/o cycles
`legal coloring` - graph coloring is when colors are assigned to each vertex, legal coloring means no adjacent vertices have the same color

Storing Graphs:
`Adjacency Matrix`
2D matrix storing the edges btw vertices

`Adjacency List`
Array or list to store the edges
[
0 [1, 5],
1 [0, 2],
2 [1, 3],
3 [2, 4],
4 [3, 5],
5 [4, 0]
]
ex: vertex 3 is connected to vertex 2 and vertex 4

also can use a hash table / object, for a given key(graph vertex), the values are the connections from that key/vertex - useful if keys are not represented cleanly by array indicies

sometimes can be helpful to pair the list with a list all nodes, if a vertex had no connections, it would not show up in the adjacency list

### Big O of Adjacency Lists vs Matrix

V = number of vertices
E = number of edges

Adjacency List:
Space: O(E) - how many connections in the graph
takes up less space in smaller graphs
better for iterating over just edges
looking up a specific edge can be slow

Adjacency Matrix:
Space: O(V^2) - adding a new vertex, req adding a new row/column in the matrix, not good if there aren't alot of connections
slower iterating over edges
looking up if there is a specific edge btw to is fast

\*in the real world, data is often sparce. lots of vertices, not many connections

Undirected Graph/Adjacency List Structure:
Methods: `addVertex(vertexName), addEdge(vertex1, vertex2), removeEdge(vertex1, vertex2), removeVertex(vertexName)`

```
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertexName) {
    if(!this.adjacencyList[vertexName])this.adjacencyList[vertexName] = []
  }

  addEdge(vertex1, vertex2) {
    //for a directed graph, only push one vertex into the other, not both
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1)
  }

  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex]
    edges.forEach(edge => this.adjacencyList[edge] = this.adjanceyList.filter(e => e !== vertex))
    delete this.adjacencyList[vertex]
  }
}
```
