export const favin = (value) => {
    return {
        type: "FAVTRUE",
        value
    };
};

export const favout = (value) => {
    return {
        type: "FAVFALSE",
        value
    };
};

const favReducer = (state = false, action) => {
    switch (action.type) {
        case "FAVTRUE":
            return action.value;
        case "FAVFALSE":
            return action.value;
        default:
            return state;
    }
};

export default favReducer;
  