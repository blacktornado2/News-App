import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";

class App extends React.Component {
    state = {
        active: "",
        news: [],
    };

    setActive = async category => {
        let requestCategory = "";
        if (category === "all") {
            requestCategory = "";
        } else {
            requestCategory = `=${category}`;
        }
        const response = await axios.get(
            `https://inshortsapi.vercel.app/news?category${requestCategory}`
        );
        this.setState({
            active: category,
            news: response.data.data,
        });
    };

    async componentDidMount() {
        const response = await axios.get(
            `https://inshortsapi.vercel.app/news?category=${this.state.active}`
        );
        this.setState({ news: response.data.data });
    }

    render() {
        return (
            <div className='app'>
                <Navbar active={this.state.active} setActive={this.setActive} />
                <CardList news={this.state.news} />
            </div>
        );
    }
}

export default App;
