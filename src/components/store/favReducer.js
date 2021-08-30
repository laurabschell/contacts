export const favTrue = (value) => {
    return {
        type: "FAVTRUE",
        value
    };
};

export const favFalse = (value) => {
    return {
        type: "FAVFALSE",
        value
    };
};

const favReducer = (state = true, action) => {
switch (action.type) {
    case "FAVTRUE":
    return state + action.value;
    case "FAVFALSE":
    return state - action.value;
    default:
    return state;
}
};

export default favReducer;
  