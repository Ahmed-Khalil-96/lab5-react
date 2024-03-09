import { GET_PRODUCTS } from "../Actions/products";

const INITIAL_STATE = {
    list: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};

export default productsReducer;
