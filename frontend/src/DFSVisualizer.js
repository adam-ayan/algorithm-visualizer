import React, { useState } from "react";

function DFSVisualizer() {
  const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
  };

  const [visited, setVisited] = useState([]);
  const [order, setOrder] = useState([]);

  const dfs = (node) => {
    if (!visited.includes(node)) {
      setVisited((prev) => [...prev, node]);
      setOrder((prev) => [...prev, node]);
      graph[node].forEach((neighbor) => dfs(neighbor));
    }
  };

  return (
    <div>
      <h2>DFS Visualizer</h2>
      <button onClick={() => {setVisited([]); setOrder([]); dfs("A");}}>Run DFS from A</button>
      <div>Visited Order: {order.join(" -> ")}</div>
    </div>
  );
}

export default DFSVisualizer;
