import React, {useState} from 'react';
import Axios from 'axios';
import './SignUp.css';
import Cookies from 'universal-cookie';

function SignUp () {
    const url = "http://localhost:3002";
    const cookies = new Cookies();
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
                cookies.set('arl', username, {path: '/'});
                setUsername("");
                setPassword("");
                // return <Navigate to='profile'/>
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
        <div id="container">
            <div id="card">
                <h1>Log In</h1>
                <label>Username <input id="cred-field" type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }} value={username}/></label>
                <label>Password <input id="cred-field" type="password" onChange={(e) => {
                    setPassword(e.target.value);
                }} value={password}/></label>
                <button className="btn" onClick={login}>Log in</button>
            </div>
            <div id="card">
                <h1>Sign Up</h1>
                <label>First Name: <input id="cred-field" type="text" onChange={(e) => {
                    setFirstname(e.target.value);
                }} value={firstname}/></label>
                <label>Last Name: <input id="cred-field" type="text" onChange={(e) => {
                    setLastname(e.target.value);
                }} value={lastname}/></label>
                <label>Username: <input id="cred-field" type="text" onChange={(e) => {
                    setRUsername(e.target.value);
                }} value={rUsername}/></label>
                <label>Password: <input id="cred-field" type="password" onChange={(e) => {
                    setRPassword(e.target.value);
                }} value={rPassword}/></label>
                <button className="btn" onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default SignUp;