class Graph{
      private adjacencyList: {[key:string]:Set<string>}
      constructor(){
            this.adjacencyList = {}
      }
      addVertex(vertex:string):void{
            if(!this.adjacencyList[vertex]){
                  this.adjacencyList[vertex]= new Set();
            }
      }
      addEdge(vertex1:string,vertex2:string):void{
            this.addVertex(vertex1);
            this.addVertex(vertex2);

            this.adjacencyList[vertex1].add(vertex2);
            this.adjacencyList[vertex2].add(vertex1);
      }
      removeVertex(vertex:string):void{
            if(!this.adjacencyList[vertex])return
            for(let x of this.adjacencyList[vertex]){
                   this.adjacencyList[x].delete(vertex)
            }
            delete this.adjacencyList[vertex]
      }
      removeEdge(vertex1:string,vertex2:string):void{
            if(this.adjacencyList[vertex1]){
                  this.adjacencyList[vertex1].delete(vertex2)
            }
            if(this.adjacencyList[vertex2]){
                  this.adjacencyList[vertex2].delete(vertex1)
            }
      }
      display():void{
            for(let x in this.adjacencyList){
                  console.log(x + ' -> ' + [...this.adjacencyList[x]])
            }
      }
      bfs(start:string):string[]{
            if(!this.adjacencyList[start]){
                  return []
            }
            const queue:string[] = [start]
            const result:string[] = []
            const visited:Set<string> = new Set()
            visited.add(start)

            while(queue.length>0){
                  const currentVertex = queue.shift()!;
                  result.push(currentVertex)
                  for(let x of this.adjacencyList[currentVertex]){
                        if(!visited.has(x)){
                              visited.add(x);
                              queue.push(x)
                        }
                  }
            }
            return result;
      }
      dfs(start:string):string[]{
            if(!this.adjacencyList[start])return []

            const stack:string[] = [start]
            const result:string[] = []
            const visited:Set<string> = new Set();

            visited.add(start)

            while(stack.length>0){
                  const currentVertex = stack.pop()!;
                  result.push(currentVertex);
                  for(let neighbour of this.adjacencyList[currentVertex]){
                        if(!visited.has(neighbour)){
                              visited.add(neighbour);
                              stack.push(neighbour);
                        }
                  }
            }
            return result;
      }
      dfsRecursive(start: string): string[] {
            const result: string[] = [];
            const visited: Set<string> = new Set();
            const adjacencyList = this.adjacencyList;
    
            function dfsHelper(vertex: string): void {
                if (!vertex) return;
                visited.add(vertex);
                result.push(vertex);
    
                adjacencyList[vertex].forEach((neighbor) => {
                    if (!visited.has(neighbor)) {
                        dfsHelper(neighbor);
                    }
                });
            }
    
            dfsHelper(start);
            return result;
        }
    }

const graph = new Graph()
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D')
graph.addEdge('C','D')
graph.addEdge('D','E')
// graph.removeVertex('A')
// graph.display()
console.log('bfs:',graph.bfs('A'))
console.log('dfs :',graph.dfs('A'))
