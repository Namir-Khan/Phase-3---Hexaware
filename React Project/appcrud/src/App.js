import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  
  let [actno, setActno] = useState('');
  let [name, setName] = useState('');
  let [balance, setBalance] = useState(0);
  let [type, setType] = useState('');
  let [msg, setMsg] = useState("")
  let [amt, setAmt] = useState();
  let [user, setUser] = useState([]);
  let [flag, setFlag] = useState(true);

  useEffect( () => {
    showAll();
  }, [flag])

  const saveData = async () => {
    let data={actno, name, balance, type}
    const res = await axios.post("http://localhost:8081/saveData", data);
    if(res) {
      <h1>Data Saved</h1>
    }
    console.log(res);
    setMsg(res.data);
    setFlag(!flag);
  }

  const removeData = async () => {
    const res = await axios.delete(`http://localhost:8081/deleteAc/${actno}`);
    console.log(res);
    setMsg(res.data);
    setFlag(!flag);
  }

  const deposit = async () => {
    const res = await axios.put(`http://localhost:8081/deposit/${actno}/${amt}`);
    console.log(res);
    setMsg(res.data);
    setFlag(!flag);
  }

  const withdraw = async () => {
    const res = await axios.put(`http://localhost:8081/withdraw/${actno}/${amt}`);
    console.log(res);
    setMsg(res.data);
    setFlag(!flag);
  }

  const searchByAct = async () => {
    let res = await axios.get(`http://localhost:8081/getdataAc/${actno}`);
      console.log(res.data);
      setMsg("ActId :" + res.data.actno + ", Balance :" + res.data.balance + ", Name :" + res.data.name + ", Type : " + res.data.type);
  }

  const showAll = async () => {
    let res = await axios.get("http://localhost:8081/getUsers");
    console.log(res);
    setUser(res.data);
  }

  return (
    <div className="cont">
      <input type="text" placeholder='Enter Actno' onChange={(e)=>setActno(e.target.value)}/>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="number" placeholder='Enter Balance' onChange={(e)=>setBalance(e.target.value)}/>
      <input type="text" placeholder='Enter Type' onChange={(e)=>setType(e.target.value)}/>
      <input type="number" placeholder='Enter Deposite/Withdraw Amount' onChange={(e)=>setAmt(e.target.value)}/>
      <button onClick={saveData}>Submit</button>
      <button onClick={removeData}>Delete</button>
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>WithDraw</button>
      <button onClick={searchByAct}>Search</button>

      {msg && <p style={{ color: 'green', textAlign: 'center' }}>{msg}</p>}

      {user.length > 0 ? (
        <div className="user-list">
          <h3>Get All Users</h3>
          {user.map((u) => ( <p> ActId: {u.actno}, Name: {u.name}, Balance: {u.balance}, Type: {u.type} </p> ))}
        </div>
      ) :
        <p>No users</p> 
      }
      </div>
  );
}

export default App;