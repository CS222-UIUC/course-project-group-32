import React, { useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {Grid} from "@material-ui/core"
import {TextField} from "@material-ui/core"
import './Create.css';
import Axios from 'axios';
import Cookies from 'universal-cookie';

function Create () {
  const url = "http://localhost:3002";
  // const cookies = new Cookies();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [username, setUsername] = useState('');
  let arl = "";
  const login = () => {
    Axios.post(url + '/api/get/user/', {
        arl: arl
    }).then((response) => {
        let data = response.data[0];
        if (response.data.length > 0) {
            setUsername(data.username);
        }
      })
    }

  const upload = () => {
     const cookies = new Cookies();
        // console.log("REDIRECTING");
        arl = cookies.get('arl');
        login();
      Axios.post(url + '/api/insert/create/', {
          title: title,
          description: description,
          link: link,
          username: arl
      }).then((response) => {
          if (response.data.length === 0) {
              alert('error occurred');
              return;
          } else {
              // cookies.set('arl', username, {path: '/'});
              setTitle("");
              setDescription("");
              setLink("");
              // setUsername();
              // return <Navigate to='profile'/>
          }
      })
  }

  return (
    <div id="container" style={{padding:"20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div id="card" style={{borderRadius: "10px"}}>
            <h1>Upload</h1>
            <label style={{fontSize:"20px", fontWeight:"500"}}>Title<input id="cred-field" type="text" onChange={(e) => {
                setTitle(e.target.value);
            }} value={title}/></label>
            <label style={{fontSize:"20px", fontWeight:"500"}}>Description<input id="cred-field" type="text" onChange={(e) => {
                setDescription(e.target.value);
            }} value={description}/></label>
            <label style={{fontSize:"20px", fontWeight:"500"}}>Link<input id="cred-field" type="text" onChange={(e) => {
                setLink(e.target.value);
            }} value={link}/></label>
            <button className="btn" onClick={upload} style={{fontSize:"15px", fontWeight:"500", marginTop: "50px", width: "80%", marginLeft: "10%", borderRadius: "5px"}}>Submit!</button>
        </div>
    </div>
)
}

export default Create;