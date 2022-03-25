import React from "react";

import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";
// import { GiDarkSquad } from "react-icons";

// Implement the following features
// 1. Hamburger Menu
// 2. Sorting
// 3. Improve UI

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <SearchBar />
            <CardList />
        </div>
    );
};

export default App;
