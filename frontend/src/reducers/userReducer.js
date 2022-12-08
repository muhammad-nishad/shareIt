import Cookies from "js-cookie"
export function userReducer(state, action) {
    state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return null;
        case 'REFRESH':
            return { ...state, refresh:true };

        default:
            return { ...state }
    }
}