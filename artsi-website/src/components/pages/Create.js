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
    <div id="container">
        <div id="card">
            <h1>Upload</h1>
            <label>Title<input id="cred-field" type="text" onChange={(e) => {
                setTitle(e.target.value);
            }} value={title}/></label>
            <label>Description<input id="cred-field" type="text" onChange={(e) => {
                setDescription(e.target.value);
            }} value={description}/></label>
            <label>Link<input id="cred-field" type="text" onChange={(e) => {
                setLink(e.target.value);
            }} value={link}/></label>
            <button className="btn" onClick={upload}>Submit!</button>
        </div>
    </div>
)
}

export default Create;