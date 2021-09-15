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
        contactsList: action.payload.contactsList.data.map((contact) => ({
          ...contact,
          is_favorite: false,
        })),
        loading: false,
      };

    case "GETUSERSERROR":
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case "ADD_CONTACT": {
      console.log(action.payload.first_name);
      if (!action.payload.fav) {
        return {
          ...state,
          contactsList: [...state.contactsList, action.payload],
        };
      } else {
        return {
          ...state,
          favList: [...state.favList, action.payload],
        };
      }
    }

    case "REMOVE_CONTACT": {
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
        contactsList: [
          ...state.contactsList,
          { ...action.payload.newFav, isFav: !action.payload.newFav.isFav },
        ],
        // favList: [
        //   ...state.favList.filter(
        //     (contact) => contact.id !== action.payload.id
        //   ),
        // ],
      };
    }

    default:
      return state;
  }
};

export default userReducer;
