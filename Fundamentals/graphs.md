## Graphs

Data structure consisting of a set of nodes with connections btw the ndoes

Uses for graphs:
Social networks, location/mapping, routing algos, vsiual hierarchy, file system optimizations

Graph Traversal Uses:
Peer to peer networking, web crawlers, finding the "closest" match/recommendation, shortest path for gps navigation, solving mazes, AI(shortest path to win game)

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

Graph traversal methods: `DF traversal`(following down all possible connections from a given start point first) `BF traversal`(visiting all neighbors of a given vertex first, visit all neighbors at the same "height")

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

  dfRecursive(startVertex) {
    const result = [] //store all visted nodes
    const visited = {} //tracker to whether vertex has been visted or not
    const list = this.adjacencyList;

    //defining and invoking function at the same time
    // helper function takes a vertex, if vertex has not been visted, add into visted obj and results array otherwise return null
    //run the helper function recursively on all neighbors of vertex passed in
    (function _df(vertex) {
      if(!visited[vertex]) {
        visited[vertex] = true
        result.push(vertex)
        for(let neighbor of list[vertex]) {
          _df(neighbor)
        }
      } else {
        return null
      }
    })(startVertex)
  return result
  }

  //takes a starting vertex and initializes stack and visted with given vertex and empty result array
  dfIterative(startVertex) {
    const stack = [startVertex]
    const result = []
    const visited = {}
    visited[startVertex] = true
    const list = this.adjacencyList

    //while vertices are on the stack, pop and push onto result array, then for each neighbor check if it has been visted, if not add to visited obj and add to stack
    while(stack.length) {
      let vertex = stack.pop()
      result.push(vertex)
      list[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
```
