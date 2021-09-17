export const getUsersRequest = () => {
  return {
    type: "GETUSERSREQUEST",
  };
};

export const getUsersSuccess = ({ users }) => {
  return {
    type: "GETUSERSSUCCESS",
    payload: { users },
  };
};

export const getUsersError = ({ error }) => {
  return {
    type: "GETUSERSERROR",
    payload: { error },
  };
};

export const addContact = (contact) => {
  console.log(contact);
  return {
    type: "ADD_CONTACT",
    payload: contact,
  };
};

export const removeContact = (id) => {
  return {
    type: "REMOVE_CONTACT",
    payload: id,
  };
};

export const addToFav = (id, newFav) => {
  return {
    type: "ADD_TO_FAV",
    payload: { id, newFav },
  };
};

export const removeFromFav = (id, newFav) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: { id, newFav },
  };
};
