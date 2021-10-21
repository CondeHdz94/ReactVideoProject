import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.some((items) => items.id === action.payload.id)
          ? [...state.mylist]
          : [...state.mylist, action.payload],
      };
    case actions.DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload.id),
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case actions.REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.PLAYING_VIDEO:
      console.log(
        state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          state.mylist.find((item) => item.id === Number(action.payload))
      );
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          state.mylist.find((item) => item.id === Number(action.payload)),
      };
    case actions.SEARCH_VIDEO:
      const fullList = [...state.trends, ...state.originals];
      if (action.payload.searching === '' || action.payload.searching === ' ') return { ...state, search: [] };
      return {
        ...state,
        search: fullList.filter((item) => 
        item.title.toLowerCase().includes(action.payload.searching.toLowerCase())) 
        || [],
      };
      case actions.DATA_SEARCH:
        return {
          ...state,
          dataSearch: action.payload,
        };

    default:
      return state;
  }
};

export default reducer;
