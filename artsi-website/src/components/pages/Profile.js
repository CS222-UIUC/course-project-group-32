import React from 'react';
import './Profile.css'
import {Grid} from "@material-ui/core"
import pf from './test.png';
import brush from './brush.png';
import { Link } from 'react-router-dom'

function Profile ({username = "username", firstname="first", lastname="last"}) {
    return (
        <div style={{ padding: 30 }}>
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
                            <b>Uploaded Videos</b>
                            <br/><br/>
                        </div>
                        <div className="tut-links">
                            <img className="tut-img" src={brush} alt="Profile Picture"/>
                            <Link to='/tutorial' state={{ t: "tutorial title", v: ""}} style={{marginLeft: "10px", marginTop: "10px"}}>
                                Tutorial Name
                            </Link>
                        </div>
                    </Grid>
                    <Grid className="tut-item" style={{color: 'black', backgroundColor: 'skyblue'}}>
                        <div>
                            <b>Liked Videos</b>
                            <br/><br/>
                        </div>
                        <div className="tut-links">
                            <img className="tut-img" src={brush} alt="Profile Picture"/>
                            <Link to='/tutorial' state={{ t: "tutorial title", v: ""}} style={{marginLeft: "10px", marginTop: "10px"}}>
                                Tutorial Name
                            </Link>
                        </div>
                    </Grid>
                    <Grid className="btn-prof">
                        <button style={{width:"90%", height:"150%"}}>
                            <Link to='/create'>
                                <b>Create New Video</b>
                            </Link>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;