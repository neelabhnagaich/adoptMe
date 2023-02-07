import React from 'react'
import { createRoot } from 'react-dom';
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet  animal='dog' name='luna' breed='havanese'/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
