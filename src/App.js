
import React from 'react';
import ListMemes from './components/ListMemes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
function App() {

  return (
    <div className="App">
       <Nav className="justify-content-center bg-dark" >
          <div className="text-center mt-4 mb-4">MEMEsDAY</div>
       </Nav>
        <ListMemes ></ListMemes>
    </div>
  );
}

export default App;
