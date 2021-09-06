const initialState = {
  contactsList: [],
  favList: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSERSREQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GETUSERSSUCCESS":
      return {
        ...state,
        contactsList: action.payload.contactsList.data,
        loading: false,
      };

    case "GETUSERSERROR":
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case "ADD_CONTACT": {
      return {
        ...state,
        contactsList: [...state.contactsList, action.payload],
      };
    }

    case "REMOVE_CONTACT": {
      console.log("remove contact", action.payload);
      return {
        contactsList: state.contactsList.filter(
          (contact) => contact.id !== action.payload
        ),
        favList: state.favList.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }

    case "ADD_TO_FAV": {
      return {
        ...state,
        favList: [...state.favList, action.payload.newFav],
        contactsList: [
          ...state.contactsList.filter(
            (contact) => contact.id !== action.payload.id
          ),
        ],
      };
    }

    case "REMOVE_FROM_FAV": {
      return {
        ...state,
        contactsList: [...state.contactsList, action.payload.newFav],
        favList: [
          ...state.favList.filter(
            (contact) => contact.id !== action.payload.id
          ),
        ],
      };
    }

    default:
      return state;
  }
};

export default userReducer;
