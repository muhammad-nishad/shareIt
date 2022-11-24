export function postsReducer(state, action) {
    switch (action.type) {
      case "POSTS_SUCCESS":
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: "",
        };
      default:
        return state;
    }
  }