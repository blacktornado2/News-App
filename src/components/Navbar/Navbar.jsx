import React from "react";
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

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container'>
                    <ul className='nav-list'>
                        {Categories.map((category, index) => {
                            return (
                                <li
                                    className='nav-list-item'
                                    key={index}
                                    onClick={() =>
                                        this.props.setActiveCategory(category)
                                    }
                                >
                                    {category.toUpperCase()}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
