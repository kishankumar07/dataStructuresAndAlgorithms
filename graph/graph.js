class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '->' + [...this.adjacencyList[vertex]])
        }
    }
    bfs(begin){
        let arr = [begin];
        let outPut = [];
        let visited  = new Set();
        visited.add(begin);

        while(arr.length){
            let currentVertex = arr.shift();
            outPut.push(currentVertex);

            for(let vertex of this.adjacencyList[currentVertex]){
                if(!visited.has(vertex)){
                    visited.add(vertex);
                    arr.push(vertex);
                }
            }
        }
        return outPut;
    }
    dfs(value){
        let stack = [value];
        let output = [];
        let visited = new Set();
        visited.add(value);

        while(stack.length){
            let currentVertex = stack.pop();
            output.push(currentVertex);

            for(let vertex of this.adjacencyList[currentVertex]){
                if(!visited.has(vertex)){
                    visited.add(vertex);
                    stack.push(vertex)
                }
            }
        }
        return output;
    }

}
let graph = new Graph();
graph.addEdges('A','B');
graph.addEdges('A','C');graph.addEdges('B','D');graph.addEdges('C','D');
graph.display();
console.log('bfs traversal :',graph.bfs('A'));
console.log('dfs traversal :',graph.dfs('A'));