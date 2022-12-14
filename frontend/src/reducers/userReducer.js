import Cookies from "js-cookie"
export function userReducer(state={refresh:false}, action) {
    state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
    switch (action.type) {
        case "LOGIN":
            console.log(action.payload,'actionnn');
            return action.payload;
        case "LOGOUT":
            return null;
        case 'REFRESH':
            return { ...state, refresh:[] };

        default:
            return { ...state }
    }
}