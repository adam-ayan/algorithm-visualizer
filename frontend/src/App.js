import React from "react";
import BubbleSortVisualizer from "./BubbleSortVisualizer";
import DFSVisualizer from "./DFSVisualizer";

function App() {
  return (
    <div className="App">
      <h2>Bubble Sort</h2>
      <BubbleSortVisualizer />
      <h2>DFS Traversal</h2>
      <DFSVisualizer />
    </div>
  );
}

export default App;
