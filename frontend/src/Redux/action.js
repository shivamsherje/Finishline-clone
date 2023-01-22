import { ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT_PRODUCTS } from './actionType'


export const addProduct = (value) => ({
    type: ADD_PRODUCT, payload: value
})

export const removeProducet = (id) => ({
    type: REMOVE_PRODUCT, payload: id
})

export const checkOut = () => ({
    type: CHECKOUT_PRODUCTS
})