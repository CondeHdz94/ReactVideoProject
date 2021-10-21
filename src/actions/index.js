export const actions = {
    SET_FAVORITE: "SET_FAVORITE",
    DELETE_FAVORITE: "DELETE_FAVORITE",
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGOUT_REQUEST: "LOGOUT_REQUEST",
    REGISTER: "REGISTER",
    PLAYING_VIDEO:"PLAYING_VIDEO",
    SEARCH_VIDEO:"SEARCH_VIDEO",
    DATA_SEARCH: "DATA_SEARCH",
}

export const setFavorite = (payload) => ({
    type: actions.SET_FAVORITE,
    payload,
});

export const deteleFavorite = (payload) => ({
    type: actions.DELETE_FAVORITE,
    payload,
});

export const loginRequest = (payload) => ({
    type: actions.LOGIN_REQUEST,
    payload,
});

export const logoutRequest = (payload) => ({
    type: actions.LOGOUT_REQUEST,
    payload,
});

export const registerRequest = (payload) => ({
    type: actions.REGISTER,
    payload,
});

export const playingVideo = (payload) => ({
    type: actions.PLAYING_VIDEO,
    payload,
});

export const searchVideo = (payload) => ({
    type: actions.SEARCH_VIDEO,
    payload,
});

export const searchData = (payload) => ({
    type: actions.DATA_SEARCH,
    payload,
});