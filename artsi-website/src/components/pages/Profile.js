import React, { useEffect, useState } from 'react';
import './Profile.css'
import SignUp from './SignUp.js';
import {Grid} from "@material-ui/core"
import pf from './test.png';
import brush from './brush.png';
import { Link } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Lesson from '../Lesson';

function Profile () {
    const url = "http://localhost:3002";
    let arl = "";
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [lessons, setLessons] = useState([]);
    const [uploaded, setUploaded] = useState([]);
    const login = () => {
        Axios.post(url + '/api/get/user/', {
            arl: arl
        }).then((response) => {
            let data = response.data[0];
            if (response.data.length > 0) {
                setUsername(data.username);
                setFirstname(data.firstname);
                setLastname(data.lastname);
            }
        })
    }
    const getLiked = () => {
        Axios.post(url + '/api/get/user_likes/', {
            arl: arl
        }).then((response) => {
            let data = response.data;
            if (response.data.length > 0) {
                setLessons(data);
                // console.log(lessons);
            }
        })
    }
    const getUploaded = () => {
        Axios.post(url + '/api/get/user_uploads/', {
            arl: arl
        }).then((response) => {
            let data = response.data;
            if (response.data.length > 0) {
                setUploaded(data);
                // console.log(lessons);
            }
        })
    }
    useEffect(() => {
        const cookies = new Cookies();
        // console.log("REDIRECTING");
        arl = cookies.get('arl');
        login();
        getLiked();
        getUploaded();
        if (username === '') {
            return <Navigate to='/sign-up'/>
        } else {
            // console.log(username);
        }
    }, []);
    return username != '' ?
        <div style={{ padding: 30 }}>
            <h1>Your Profile</h1>
            <Grid className="pf-container" direction="row" container spacing={2}>
                <Grid className="info" style={{color: 'black', backgroundColor: 'skyblue'}}>
                    <div className='username'>
                        <center data-testid="username" style={{color: 'black'}}><b>{username}</b></center>
                    </div>
                    <br></br>
                    <center><img className="pfpic" src={pf} alt="Profile Picture"/></center>
                    <br></br>
                    <div className="pf-item">
                        <b>Name: </b><p data-testid="name">{firstname} {lastname}</p>
                    </div>
                    <br></br>
                    <div className="pf-item">
                        <b>About</b>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Grid>
                <Grid className="tutorials">
                    <Grid className="tut-item" style={{color: 'black', backgroundColor: 'skyblue'}}>
                        <div>
                            <b>Uploaded Lessons</b>
                            <br/><br/>
                            {uploaded.map((uploaded) => {
                                return <Lesson lesson={uploaded} arl={arl} key={uploaded.lessonID}/>
                            })}
                        </div>
                        {/* <div className="tut-links">
                            <img className="tut-img" src={brush} alt="Profile Picture"/>
                            <Link to='/tutorial' state={{ t: "tutorial title", v: ""}} style={{marginLeft: "10px", marginTop: "10px"}}>
                                Tutorial Names
                            </Link>
                        </div> */}
                    </Grid>
                    <Grid className="tut-item" style={{color: 'black', backgroundColor: 'skyblue'}}>
                        <div>
                            <b>Liked Lessons</b>
                            <br/><br/>
                            {lessons.map((lesson) => {
                                return <Lesson lesson={lesson} key={lesson.lessonID}/>
                            })}
                        </div>
                        {/* <div className="tut-links">
                            <img className="tut-img" src={brush} alt="Profile Picture"/>
                            <Link to='/tutorial' state={{ t: "tutorial title", v: ""}} style={{marginLeft: "10px", marginTop: "10px"}}>
                                Tutorial Name
                            </Link>
                        </div> */}
                    </Grid>
                    <Grid className="btn-prof">
                        <button style={{width:"90%", height:"150%"}}>
                            <Link to='/create'>
                                <b>Upload New Video</b>
                            </Link>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </div> : <h1>Please sign in</h1>
}

export default Profile;