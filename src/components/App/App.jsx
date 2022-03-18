import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";

class App extends React.Component {
    state = {
        activeCategory: "",
        activeCategoryNews: []
    };

    fetchNews = async () => {
        let category = this.state.activeCategory;

        if (category === "all") {
            category = "";
        } else {
            category = `=${category}`;
        }
        const response = await axios.get(
            `https://inshortsapi.vercel.app/news?category${category}`
        );

        const news = response.data.data;

        this.setState({
            activeCategoryNews: news
        });
    };

    setActive = category => {
        if (category === this.state.activeCategory) return;

        this.setState(
            {
                activeCategory: category
            },
            this.fetchNews
        );
    };

    componentDidMount() {
        this.fetchNews();
    }

    render() {
        return (
            <div className='app'>
                <Navbar
                    activeCategory={this.state.active}
                    setActiveCategory={this.setActive}
                />
                <CardList activeCategoryNews={this.state.activeCategoryNews} />
            </div>
        );
    }
}

export default App;
