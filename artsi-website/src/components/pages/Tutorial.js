import React, { useState } from 'react';
import {Grid} from "@material-ui/core"
import { useLocation } from 'react-router-dom'
import './Tutorial.css'
import {RiHeart3Fill, RiBookmarkFill} from 'react-icons/ri';
import Board from './Board';
import Axios from 'axios';
import Cookies from 'universal-cookie';


function Tutorial({title="Tutorial Title", videosource=""}) {
  const location = useLocation()
  const url = "http://localhost:3002";
  const { t, v } = location.state
  title = t; videosource=v;
  let arl = "";
  const cookies = new Cookies();
  arl = cookies.get('arl');
  // const like = () => {
  //   console.log("Liking " + arl + " " + id);
  //   Axios.post(url + '/api/post/like/', {
  //       username: arl,
  //       lessonID: id
  //   });
  // }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => { setIsActive(true); };
 return ( 
    <div role='tutorial-exists'>
      <Grid container direction="row" alignItems="center" justify="center" spacing="7px">
        <Grid item style={{padding: 0, margin: 0}}>
            <br></br>
            <div style={{marginLeft: 0}}>
              <h1>{title}</h1>
            </div>
            <br></br>
            <iframe width="500" height="450" src={videosource}></iframe>
            <div>
              <RiHeart3Fill 
                className="heart"
                style={{ 
                  color: isActive ? 'red' : '',
                }} 
                role = "heart"
                onClick={handleClick}
              />
              {/* // <RiBookmarkFill 
              //   className="bookmark"
              //   style={{ 
              //     color: isActive2 ? 'gold' : '',
              //   }} 
              //   role = "bookmark"
              //   onClick={handleClick2}
              // /> */}
            </div>
        </Grid>
        <Grid item style={{padding: 50}}>

        </Grid>
        <Grid item style={{marginTop: 50}}>
          <Board></Board>
        </Grid>
      </Grid>
      </div>
    );
}

export default Tutorial;