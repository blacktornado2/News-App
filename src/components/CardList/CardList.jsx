import React, { Component } from "react";
import "./CardList.scss";

export default class CardList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card-list'>
                {this.props.activeCategoryNews.map((news, index) => (
                    <div className='card-item' key={news.title}>
                        <a href={news.readMoreUrl} target='_blank'>
                            <img className='card-img' src={news.imageUrl} />
                        </a>
                        <div className='info'>
                            {news.author}, {news.date}
                        </div>
                        <div className='title'>{news.title}</div>
                        <div className='content'>{news.content}</div>
                    </div>
                ))}
            </div>
        );
    }
}
