
const appReducer = (state = { movies: [], users: [] }, action) => {

    switch (action.type) {
        case "LOAD_MOVIES":
            return { ...state, movies: action.payload };

        default:
            return state;
    }
}

export default appReducer;