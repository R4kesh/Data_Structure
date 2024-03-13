bfs(startVertex) {
    if (!this.adList[startVertex]) {
      return;
    }

    const visited = {};
    const queue = [];
    queue.push(startVertex);
    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      for (const child of this.adList[currentVertex]) {
        if (!visited[child]) {
          queue.push(child);
          visited[child] = true;
        }
      }
    }
  }