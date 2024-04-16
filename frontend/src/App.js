import React,{ useState, useEffect } from "react"

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
      fetchData();
    }, [message]);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        console.log(response);
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>React App with Flask Backend</h1>
          <p>{message}</p>
        </header>
      </div>
    );
}

export default App