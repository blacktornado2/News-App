const initialState = {
    activeCategory: "all",
    activeCategoryNews: [],
    search: false,
    searchTerm: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS": {
            return {
                ...state,
                activeCategory: action.payload.category,
                activeCategoryNews: action.payload.news
            };
        }
        case "SEARCHING": {
            if (action.payload.search) {
                return {
                    ...state,
                    search: true,
                    searchTerm: action.payload.searchTerm
                };
            }
            return {
                ...state,
                search: false,
                searchTerm: ""
            };
        }
        default:
            return state;
    }
};

export default rootReducer;
