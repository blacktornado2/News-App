import axios from "axios";

// We can return function/object if using redux-thunk
export const fetchPosts = category => async dispatch => {
    const categoryWithPostfix = category === "all" ? "" : `=${category}`;

    // Asynchronous code below
    const response = await axios.get(
        `https://inshortsapi.vercel.app/news?category${categoryWithPostfix}`
    );

    const newsArray = response.data.data; //extracting data from response object

    dispatch({
        type: "FETCH_POSTS",
        payload: {
            category: category,
            news: newsArray
        }
    });
};

// No need of asynchronous code, therefore directly returning action object
export const onChangeSearchTerm = searchValue => {
    const trimmedSearchValue = searchValue.trim(); //Removes extra whitespaces

    // No searchTerm
    if (trimmedSearchValue === "") {
        return {
            type: "SEARCHING",
            payload: {
                search: false,
                searchTerm: ""
            }
        };
    }
    // Some search term is present
    return {
        type: "SEARCHING",
        payload: {
            search: true,
            searchTerm: trimmedSearchValue
        }
    };
};
