import { PRODUCTS_URL, UPLOADS_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),

    getProductById: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`
      }),
      keepUnusedDataFor: 5
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Products']
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: PRODUCTS_URL,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: (result, error, { _id }) => [{ type: 'Product', id: _id }],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOADS_URL,
        method: 'POST',
        body: data
      })
    }),
    deleteProduct : builder.mutation({
      query : (productId) => ({
        url : `${PRODUCTS_URL}/${productId}`,
        method : 'DELETE'
      })
    })
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useCreateProductMutation, useUpdateProductMutation, useUploadProductImageMutation, useDeleteProductMutation } = productsApiSlice;
