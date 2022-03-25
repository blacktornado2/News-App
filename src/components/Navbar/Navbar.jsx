import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../actions";
import "./Navbar.scss";

const Categories = [
    "all",
    "national",
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile"
];

const Navbar = ({ activeCategory, fetchPosts }) => {
    // Run only the first time app loads
    useEffect(() => {
        fetchPosts("all");
    }, []);

    return (
        <div className="navbar">
            <div className="container">
                <ul className="nav-list">
                    {Categories.map((category, index) => {
                        return (
                            <li
                                className="nav-list-item"
                                key={index}
                                onClick={() => {
                                    // Reduce the number of network requests
                                    if (category !== activeCategory) {
                                        fetchPosts(category);
                                    }
                                }}
                            >
                                {category.toUpperCase()}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        activeCategory: state.activeCategory
    };
};

export default connect(mapStateToProps, { fetchPosts })(Navbar);
