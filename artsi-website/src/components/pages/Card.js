import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import {Grid} from "@material-ui/core"


function Card({title,imageUrl,body, video=""}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // if(window.innerWidth <= 960) {
        //     setButton(false);
        // } else {
        //     setButton(true);
        // }
    }

    window.addEventListener('resize', showButton);
    return (
        <div role='card-test' className='card-container'>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <img src={imageUrl} alt=''/>
                </Grid>
            </Grid>
            <div className='card-content'>
                <div className="card-title">
                    {title}
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <Link to='/tutorial' state={{ t: title, v: video}} onClick={closeMobileMenu}>
                        Learn more!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card