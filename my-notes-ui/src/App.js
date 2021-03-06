import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Button, Container } from 'react-bootstrap';


const API_URL = "https://localhost:5001/";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    axios.get(API_URL + "api/Notes")
    .then(function(response) {
      setNotes(response.data);
    }); 

  }, [])
  

  return (
    <div className="App">
      <Container>
        <h1 className="mt-3">My Notes</h1>
        
        <ul>
          {notes.map((x, i) => <li key={i}>{x.title}</li>)}
        </ul>
      </Container>
    </div>
  );
}

export default App;
