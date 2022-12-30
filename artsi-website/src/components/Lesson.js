import React from 'react';
import './Lesson.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function Lesson (props) {
    let categories = {5: 'General', 4: 'Shading', 3: 'Sketching'};
    let title = props.lesson.Title;
    let description = props.lesson.Description;
    let id = props.lesson.lessonID;
    let url = props.lesson.link;
    let categoryID = 5;// props.lesson.categoryID;
    return (
        <div id="outer-outer">
        <Link to='/tutorial' state={{ t: title, v: url, id: id}} style={{marginLeft: "10px", marginTop: "10px"}}>
            <div id="outer">
                <p>{categories[categoryID] + " category"}</p>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
        </div>
    )
}

export default Lesson;