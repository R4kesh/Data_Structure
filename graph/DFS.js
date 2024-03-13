dfs(startVertex) {
    const visited = {};
    const result = [];
    const dfsHelper = (currentVertex) => {   // function dfsHelper(currentVertex) {}
      if (!currentVertex) return;
      visited[currentVertex] = true;
      result.push(currentVertex);
      for (const child of this.adList[currentVertex]) {
        if (!visited[child]) {
          dfsHelper(child);
        }
      }
    };

    dfsHelper(startVertex);
    return result;
  }