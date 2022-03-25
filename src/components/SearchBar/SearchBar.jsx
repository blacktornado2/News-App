import React from "react";
import { connect } from "react-redux";

import "./SearchBar.scss";
import { onChangeSearchTerm } from "../../actions";

const SearchBar = ({ searchTerm, onChangeSearchTerm }) => {
    return (
        <div className="search-input">
            <input
                type="text"
                name=""
                id=""
                value={searchTerm}
                onChange={e => onChangeSearchTerm(e.target.value)}
                placeholder="Enter Search Text"
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps, { onChangeSearchTerm })(SearchBar);
