import React, { useState } from 'react';
import Books from './Books';  // Import Books component
import './App.css';  // Import your CSS file for styling


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Books Lists</h1>
        <Books />  {/* Render the Books component */}
       
      </header>
    </div>
  );
}

export default App;
