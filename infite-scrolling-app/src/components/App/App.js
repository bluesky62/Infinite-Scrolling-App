import "../../App.css";
import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState();
  // const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1",{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }})
        .then(response => response.json()) 
        .then(data => console.log(data))
        .then(data => setQuery(data))
       

    
}, [])

  return (
    <div className="App">
      <h1>Infite Scrolling</h1>
      {query.map((item, index) => {
        return <h1 key={index}>{item.results.Array[index].gender}</h1>;
      })}
    </div>
  );
}

export default App;
