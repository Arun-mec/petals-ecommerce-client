import { createContext, useState } from "react";

const CartDrawerContext = createContext();

export const CartDrawerProvider = ({children}) => {

    const [isCartDrawOpen, setIsCartDrawOpen] = useState(false);

    return (
        <CartDrawerContext.Provider value={{isCartDrawOpen, setIsCartDrawOpen}}>
            {children}
        </CartDrawerContext.Provider>
    )
}

export default CartDrawerContext;