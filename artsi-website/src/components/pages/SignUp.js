import React, {useState} from 'react';
import Axios from 'axios';
import './SignUp.css';

function SignUp () {
    const url = "http://localhost:3002";
    const [username, setUsername] = useState('');
    const [rUsername, setRUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const login = () => {
        Axios.post(url + '/api/post/login/', {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.length === 0) {
                alert('wrong username or password!');
                return;
            } else {
                setUsername("");
                setPassword("");
            }
        })
    }
    const register = () => {
        Axios.post(url + '/api/insert/user/', {
          username: rUsername,
          password: rPassword,
          firstname: firstname,
          lastname: lastname
        }).then((response) => {
          alert(rUsername + " has been successfully registered!")
          setRUsername("");
          setRPassword("");
          setFirstname("");
          setLastname("");
        })
      }
    return (
        <div id="container" style={{padding:"20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div id="card" style={{borderRadius: "10px",}}>
                <h1>Log In</h1>
                <label style={{fontSize:"20px", fontWeight:"500"}}>Username: <input id="cred-field" type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }} value={username}/></label>
                <label style={{fontSize:"20px", fontWeight:"500"}}>Password: <input id="cred-field" type="password" onChange={(e) => {
                    setPassword(e.target.value);
                }} value={password}/></label>
                <button className="login-btn" onClick={login} style={{fontSize:"15px", fontWeight:"500", marginTop: "50px", width: "80%", marginLeft: "5%", borderRadius: "5px"}}>Log in</button>
            </div>
            <div style={{width: "100px"}}></div>
            <div id="card" style={{borderRadius: "10px"}}>
                <h1>Sign Up</h1>
                <label style={{fontSize:"20px", fontWeight:"500"}}>First Name: <input id="cred-field" type="text" onChange={(e) => {
                    setFirstname(e.target.value);
                }} value={firstname}/></label>
                <label style={{fontSize:"20px", fontWeight:"500"}}>Last Name: <input id="cred-field" type="text" onChange={(e) => {
                    setLastname(e.target.value);
                }} value={lastname}/></label>
                <label style={{fontSize:"20px", fontWeight:"500"}}>Username: <input id="cred-field" type="text" onChange={(e) => {
                    setRUsername(e.target.value);
                }} value={rUsername}/></label>
                <label style={{fontSize:"20px", fontWeight:"500"}}>Password: <input id="cred-field" type="password" onChange={(e) => {
                    setRPassword(e.target.value);
                }} value={rPassword}/></label>
                <button className="register-btn" onClick={register} style={{fontSize:"15px", fontWeight:"500", marginTop: "50px", width: "80%", marginLeft: "5%", borderRadius: "5px"}}>Register</button>
            </div>
        </div>
    )
}

export default SignUp;