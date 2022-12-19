import Cookies from "js-cookie"
export function userReducer(state = { refresh: false }, action) {
    state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
    switch (action.type) {
        case "LOGIN":
            console.log(action.payload, 'actionnn');
            return action.payload;
        case "LOGOUT":
            return null;
        case 'REFRESH':
            console.log(state, 'previous');
            return { ...state, refresh: [] };
        case 'SAVED_POST':
            console.log(action)
            if(state.user?.savedPosts && state.user?.savedPosts?.length){
                state.user.savedPosts = [...state.user?.savedPosts,action.payload]
            }else{
                console.log(state.user)
                state.user["savedPosts"] = [action.payload]
            }
            return { ...state }
        case 'UNSAVE_POST':
            console.log(action)
            state.user?.savedPosts.filter((id) => id !== action.payload)
            return { ...state }

        default:
            return { ...state }
    }
}