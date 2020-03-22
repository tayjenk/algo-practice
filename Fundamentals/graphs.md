## Graphs

Data structure consisting of a set of nodes with connections btw the ndoes

Uses for graphs:
Social networks, location/mapping, routing algos, vsiual hierarchy, file system optimizations

`Vertex` - a node within a node
`Edge` - connection btw nodes
`Undirected Graph` - no direction to the edges, two-way directions between vertices (ex. fb friends/linkedin, not a one way relationship)
`Directed Graph` - often represented with arrows to show the direction btw verticies (ex. twitter/insta, i can follow you but you dont automatically follow me)
`Unweighted/weighted Graph` - edges have no values vs assigning values, adding information to edges makes a graph weighted

Storing Graphs:
`Adjacency Matrix`
2D matrix storing the edges btw verticies

`Adjacency List`
Array or list to store the edges
[
0  [1, 5],
1  [0, 2],
2  [1, 3],
3  [2, 4],
4  [3, 5],
5  [4, 0]
]
ex: vertex 3 is connected to vertex 2 and vertex 4

also can use a hash table, for a given key(graph vertex), the values are the connections from that key/vertex

### Big O of Adjacency Lists vs Matrix
V = number of verticies
E = number of edges

Adjacency List:
Space: O(E) - how many connections in the graph
takes up less space in smaller graphs
better for iterating over just edges
looking up a specific edge can be slow

Adjacency Matrix:
Space: O(V^2) - adding a new vertex, req adding a new row/column in the matrix, not good if there aren't alot of connections
slower iterating over edges
looking up if there is a specific edge btw to verticies is fast

*in the real world, data is often sparce. lots of vertices, not many connections

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
    edges.forEach(edge => removeEdge(edge))
    delete this.adjacencyList[vertex]
  }
}
```
