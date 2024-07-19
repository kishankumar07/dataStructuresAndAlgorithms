bfs(start) {
    const queue = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);

        for (let neighbor of this.adjacencyList[currentVertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}
