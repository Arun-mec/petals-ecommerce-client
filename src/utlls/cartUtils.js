export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
} 

export const updateCart = (state) => {
    // Calculate Item price
    state.itemPrice = addDecimals(state.cartItems.reduce((acc, curr) => { return acc + (Number(curr.price) * Number(curr.qty)) }, 0));

    // Calculate Shipping price (if order is over 999, no shipping fee otherwise 40rs)
    state.shippingPrice = addDecimals((Number(state.itemPrice) < 999) ? 40 : 0);

    // Calculate Tax price (30%)
    state.taxPrice = addDecimals(Number((0.15*state.itemPrice).toFixed(2)));

    // Calculate Total price
    state.totalPrice = addDecimals((
        Number(state.itemPrice) + 
        Number(state.taxPrice) + 
        Number(state.shippingPrice)));

    // state = {cartItems:[]}

    localStorage.setItem("cart", JSON.stringify(state));
}