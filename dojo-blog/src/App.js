import React from 'react'
import Navbar from './Navbar';
import ButtonClickExample from './lessons/ButtonClickExample';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ButtonClickExample />
      </div>
    </div>
  );
}

export default App;
