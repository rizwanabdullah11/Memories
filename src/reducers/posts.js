const postsReducer = (posts = [], action) => {  // Changed 'posts' to 'state' and added an initial state of []
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}

export default postsReducer;
