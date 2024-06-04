import React, { useState } from "react";
import "./App.css";
import BubbleSort from "./components/BubbleSort";
import SelectionSort from "./components/SelectionSort";
import InsertionSort from "./components/InsertionSort";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("BubbleSort");

  const handleChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const renderAlgorithm = () => {
    switch (selectedAlgorithm) {
      case "BubbleSort":
        return <BubbleSort />;
      case "SelectionSort":
        return <SelectionSort />;
      case "InsertionSort":
        return <InsertionSort />;
      case "QuickSort":
        return <QuickSort />;
      case "MergeSort":
        return <MergeSort />;
      default:
        return <BubbleSort />;
    }
  };

  return (
    <div className="App">
      <h1>Sorting Algorithm Visualizer</h1>
      <div className="dropdown-container">
        <select value={selectedAlgorithm} onChange={handleChange}>
          <option value="BubbleSort">Bubble Sort</option>
          <option value="SelectionSort">Selection Sort</option>
          <option value="InsertionSort">Insertion Sort</option>
          <option value="QuickSort">Quick Sort</option>
          <option value="MergeSort">Merge Sort</option>
        </select>
      </div>
      <div className="algorithm-container">{renderAlgorithm()}</div>
      <div className="footer">
        <p>
          &copy; Designed and Developed by <a href="https://babaafrid.in/" target="_blank" rel="noreferrer">Baba Afrid S</a> | Mr Developer. All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default App;
