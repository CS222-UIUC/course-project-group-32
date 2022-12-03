import React, { useState } from "react";
import "./SearchBar.css";
import { Routes, Route, Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Search from "./pages/Search.js";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      // setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    // setFilteredData([]);
    // setWordEntered("");
  };

  return (
    <div role ='search' className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <Link to={"/search/" + wordEntered} style={{'text-decoration': 'none', 'color': 'black'}}>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <Routes>
              <Route path={"/search/" + wordEntered}/>
        </Routes>
        </Link>
      </div>
      {/* {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )} */}
    </div>
  );
}

export default SearchBar;