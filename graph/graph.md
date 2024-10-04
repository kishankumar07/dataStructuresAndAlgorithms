Graph is used for modelling relationships between entities

- There will be a set of vertices and edges connecting them.

      Types of Graphs:
      1) Directed Graphs:Each edge will have a direction. i.e from one vertex to the other.
      2) Undirected graphs: Edges not having a direction, so both direction traverse is possible "u" --> 'v' and "v" <-- 'u'
      3) Weighted graphs : Edges having weight ( eg: Distance, cost)
      

Two types of representation:
      1) Adjacency Matrix
      2) Adjacency List

1) Adjacency Matrix

const matrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0]
]
console.log(matrix[0][2]) // Gives 0 as A is not connected to C
console.log(matrix[1][2]) // Gives 1 as B is connected to C

2) Adjacency List

const adjacencyList = {
      'A' : ['B'],
      'B' : ['A','C'],
      'C' : ['B']
}
console.log(adjacencyList['B']) , gives the output
console.log(adjacencyList['C']), gives corresponding output also for adjacencyList['A'] gives similarly its output.

                  AdjacencyList vs Adjacency Matrix
- With an adjacency list , only need to store the values for the edges that exists.But with an adjacency matrix irrespective or edges between them need to be stored. Storage wise adjacency list is more efficient
- Constant time complexity for inserting and finding adjacent nodes in adjacency list, but linear time complexity for adjacency matrix.
- adjacency list helps to store additional values with an edge such as weight of edge. For adjacency matrix it have to be stored externally .


            Time complexities
1) addVertex(vertex)            
Time complexity: O(1), adjacency list lookup and insertion at constant time.

2) addEdges (vertex1,vertex2);
O(1) constant time complexity

3) removing edge: O(1)constant time complexity
4) remove vertex : O(v), v is the number of other vertices connected to the vertex

5) BFs and DFS : O(V + E) , V is the number of vertices and E is the number of edges