
import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  const axiosUser = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  useEffect(() => {
    axiosUser();
  }, [])

  useEffect(() => {
    console.log(users);
  }, [users]);

  const [name, setName] = useState("");

  const n = useRef();

  const handleSubmit = () => {
    console.log(name)
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        placeholder='Name'
        size={30}
        ref={n}
        onChange={handleNameChange}

      ></input>
      <br />
      <button
        style={{ margin: "10px" }}
        onClick={handleSubmit}
      >Submit</button>
    </>
  )
}

export default App
