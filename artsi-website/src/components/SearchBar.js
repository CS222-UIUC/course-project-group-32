import React, { useState } from "react";
import "./SearchBar.css";
<<<<<<< .merge_file_a04448
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
=======
import { Routes, Route, Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Search from "./pages/Search.js";
>>>>>>> .merge_file_a17072

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
<<<<<<< .merge_file_a04448
      setFilteredData([]);
=======
      // setFilteredData([]);
>>>>>>> .merge_file_a17072
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
<<<<<<< .merge_file_a04448
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
=======
    // setFilteredData([]);
    // setWordEntered("");
  };

  return (
    <div role ='search' className="search">
>>>>>>> .merge_file_a17072
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
<<<<<<< .merge_file_a04448
=======
        <Link to={"/search/" + wordEntered} style={{'text-decoration': 'none', 'color': 'black'}}>
>>>>>>> .merge_file_a17072
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
<<<<<<< .merge_file_a04448
=======
        <Routes>
              <Route path={"/search/" + wordEntered}/>
        </Routes>
        </Link>
>>>>>>> .merge_file_a17072
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