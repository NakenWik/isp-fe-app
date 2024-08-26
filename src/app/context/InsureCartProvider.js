'use client';
import { createContext, useContext, useReducer } from "react";
import application from "@/data/application-submit-data";
import CartReducer from "@/app/reducer/CartReducer";

const CartContext = createContext();
const initState = {
    application: application,
    total: 0.00,
    amount: 0.00
};

export const InsureCartProvider=({ children })=>{
    const[state, dispatch] = useReducer(CartReducer, initState);
    return(
        <CartContext.Provider value = {{...state}}>{ children }</CartContext.Provider>
    );
};

export const useCart=()=>{
    return useContext(CartContext);
};
