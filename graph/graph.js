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
}
module.exports = Graph;

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
