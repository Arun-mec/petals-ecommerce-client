import { ORDERS_URL, PAYPAL_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: data,
            })
        }),
        getOrderDetails : builder.query({
            query : (orderId) => ({
                url : `${ORDERS_URL}/${orderId}`,
            }),
            keepUnusedDataFor: 5
        }),
        payOrder : builder.mutation({
            query : ({orderId, paymentDetails}) => ({
                url : `${ORDERS_URL}/${orderId}/payment`,
                method : 'PUT',
                body : {...paymentDetails}
            })
        }),
        getPaypalClientId : builder.query({
            query : () => ({
                url : PAYPAL_URL,
            }),
            keepUnusedDataFor : 5
        }),
        getMyOrders : builder.query({
            query : () => ({
                url:`${ORDERS_URL}/myorders`,
                method : 'GET'
            }),
            keepUnusedDataFor : 5
        }),
        getAllOrders : builder.query({
            query : () => ({
                url : ORDERS_URL,
                method : 'GET'
            }),
            keepUnusedDataFor : 5
        }),
        deliverOrder : builder.mutation({
            query : (orderId) => ({
                url : `${ORDERS_URL}/${orderId}/deliver`,
                method:'PUT'
            })
        })
    })
});

export const { 
    useCreateOrderMutation, 
    useGetOrderDetailsQuery, 
    useGetPaypalClientIdQuery, 
    usePayOrderMutation, 
    useGetMyOrdersQuery,
    useGetAllOrdersQuery,
    useDeliverOrderMutation } = orderApiSlice;