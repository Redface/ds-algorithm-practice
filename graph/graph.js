class Graph {
  constructor(numberOfVertices) {
    this.vertices = numberOfVertices;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.marked[i] = false;
    }
    this.edgeTo = [];
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let str = `${i} -> `;
      for (let j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] !== undefined) str += `${this.adj[i][j]} `;
      }
      console.log(str);
    }
  }

  dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) console.log(`Visited vertex : ${v}`);
    this.adj[v].forEach((w) => {
      if (!this.marked[w]) this.dfs(w);
    });
  }

  bfs(s) {
    const queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      const v = queue.shift();
      if (v !== undefined) console.log(`Visited vertex : ${v}`);
      this.adj[v].forEach((w) => {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      });
    }
  }

  pathTo(v) {
    const source = 0;
    const hasPathTo = v => this.marked[v];
    if (!hasPathTo(v)) return undefined;
    const path = [];
    for (let i = v; i !== source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    return path;
  }
}
module.exports = Graph;
