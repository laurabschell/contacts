const initialState = {
  users: [],
  contactsTab: [],
  favoritesTab: [],
  favItems: [],
  notFavItems: [],
  loading: false,
  error: false,
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
        users: action.payload.users.data,
        notFavItems: action.payload.users.data,
        contactsTab: action.payload.users.data,
        loading: false,
      };

    case "GETUSERSERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };

    case "REMOVE_CONTACT": {
      return {
        contactsTab: state.contactsTab.filter(
          (contact) => contact.id !== action.payload
        ),
        favoritesTab: state.favoritesTab.filter(
          (contact) => contact.id !== action.payload
        ),
        notFavItems: state.notFavItems.filter(
          (contact) => contact.id !== action.payload
        ),
        favItems: state.favItems.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }

    case "ADD_CONTACT": {
      console.log(action.payload.first_name);
      if (action.payload.is_favorite) {
        return {
          ...state,
          favoritesTab: [...state.favoritesTab, action.payload],
          favItems: [action.payload, ...state.favItems],
        };
      } else {
        return {
          ...state,
          contactsTab: [...state.contactsTab, action.payload],
          notFavItems: [action.payload, ...state.notFavItems],
        };
      }
    }

    case "ADD_TO_FAV": {
      return {
        ...state,
        favItems: [action.payload.newFav, ...state.favItems],
        notFavItems: [
          ...state.notFavItems.filter((item) => item.id !== action.payload.id),
        ],
        favoritesTab: [...state.favoritesTab, action.payload.newFav],
        contactsTab: state.contactsTab.map((item) =>
          item.id === action.payload.id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        ),
      };
    }

    case "REMOVE_FROM_FAV": {
      return {
        ...state,
        favItems: [
          ...state.favItems.filter((item) => item.id !== action.payload.id),
        ],
        notFavItems: [...state.notFavItems, action.payload.newFav],
        favoritesTab: [
          ...state.favoritesTab.filter((item) => item.id !== action.payload.id),
        ],
        contactsTab: state.contactsTab.map((item) =>
          item.id === action.payload.id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default userReducer;
