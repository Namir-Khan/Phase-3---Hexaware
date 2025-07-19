import { useState } from "react"
import './App.css';
import { useNavigate } from "react-router-dom";
 
const Login = () => {

    let [Id,setId] = useState();
    let [pass,setPass] = useState();
    let [updatePass, setUpdatepass] = useState();

    const nav = useNavigate();

    const handleUserId = (event) => {
        setId(event.target.value);
    }

    const handleUserPass = (event) => {
        setPass(event.target.value);
    }

    const handleUpdatePass = (event) => {
        setUpdatepass(event.target.value);
    }

    const signUp = () => {
        localStorage.setItem(Id,pass);
        alert("Account Created");
    }

    const signIn = () => {
        let p = localStorage.getItem(Id);
        if(p === pass) {
            nav("/welcome",{state:{Id, pass}});
        } else {
            alert("Try again");
        }
    }

    const updatePassword = () => {
        let p = localStorage.getItem(Id);
        if(p === pass) {
            localStorage.setItem(Id, updatePass);
            alert("Updated");
        } else {
            alert("Try again");
        }
    }

    return(
        <>
            <div className = "cont">
                <input type = "text" placeholder = "enter user id " onChange = {handleUserId}/>
                <input type = "password" placeholder = "enter Password " onChange = {handleUserPass}/>
                <input type = "password" placeholder = "enter updated Password " onChange = {handleUpdatePass}/>
                <button onClick = {signIn}> Sign In</button>
                <button onClick = {signUp}> Sign up</button>
                <button onClick = {updatePassword}> Update Password</button>
            </div>
        </>
    ) 
}

export default Login