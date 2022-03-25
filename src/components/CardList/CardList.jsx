import React from "react";
import { connect } from "react-redux";

import "./CardList.scss";

const CardList = ({ activeCategoryNews, searchTerm }) => {
    // helper function
    const renderList = newsList => {
        return newsList.map(news => (
            <div className="card-item" key={news.title}>
                <a href={news.readMoreUrl} target="_blank">
                    <img className="card-img" src={news.imageUrl} />
                </a>
                <div className="info">
                    {news.author}, {news.date}
                </div>
                <div className="title">{news.title}</div>
                <div className="content">{news.content}</div>
            </div>
        ));
    };

    // If there is some term in search, render the searchTermArray
    if (searchTerm) {
        // Searching irrespective of the case of string
        const searchTermArray = activeCategoryNews.filter(newsObject =>
            newsObject.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return <div className="card-list">{renderList(searchTermArray)}</div>;
    }
    // Normally render the fetched news array
    else {
        return (
            <div className="card-list">{renderList(activeCategoryNews)}</div>
        );
    }
};

const mapStateToProps = state => {
    return {
        activeCategoryNews: state.activeCategoryNews,
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps, null)(CardList);
