import { ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT_PRODUCTS } from './actionType'


const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        }
        case REMOVE_PRODUCT: {
            let ans = state.cart.filter((ele) => {
                return ele.id !== payload
            })

            return {
                ...state,
                cart: ans
            }
        }
        case CHECKOUT_PRODUCTS: {
            return {
                ...state,
                cart: []
            }
        }
        default: {
            return state
        }
    }
}