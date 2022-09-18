import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect,useState } from "react";

function App() {
  const [msg,setMsg] = useState("")

  useEffect(()=>{
    getHello()
  },[])

  const getHello = async () => {
    const res = await axios.get('http://localhost/api/v1')
    setMsg(res.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
