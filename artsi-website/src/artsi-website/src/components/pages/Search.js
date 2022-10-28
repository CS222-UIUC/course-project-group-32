import React, {useEffect, useState} from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Axios from 'axios';
import "./Search.css";


export default function Search () {
    const url = "http://localhost:3002";
    const [query, setQuery] = useState('');
    const [lessonsList, setLessonsList] = useState([]);
    let params = useParams();
    const searchLessons = () => {
        // // console.log("searching " + query.toString());
        Axios.post(url + '/api/post/search/lessons/', {
          query: params.id.toString()
        }).then((response) => {
          // // console.log(response);
          if (response.data.length === 0) {
            alert('no results');
            return;
          }
          setLessonsList(response.data);
        })
    }
    useEffect(() => {
        setLessonsList([]);
        setQuery(params.id);
        searchLessons();
    }, [params.id]);
    return (
        <div>
            <h2>Search results for {params.id}</h2>
            {lessonsList.map((val) => {
                // when lessons are implemented, make an onClick go to /lesson/{val.id}
                return <div className="card">
                    <p>{val.id}</p>
                    <h3>{val.Title}</h3>
                    <p>{val.Description}</p>
                </div>
            })}
        </div>
    )
}