// webpack的入口文件：src/index.tsx

import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Webpack V5 + React </h1>
      </header>
    </div>
  );
}
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
