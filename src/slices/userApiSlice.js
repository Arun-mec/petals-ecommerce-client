import { USERS_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
        body: data
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: 'POST',
        body: data
      })
    }),
    udpateProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data
      })
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/password`,
        method: 'POST',
        body: data
      })
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: USERS_URL,
        method: 'GET'
      }),
      keepUnusedDataFor: 5
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
      })
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'GET'
      }),
      keepUnusedDataFor: 5
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data._id}`,
        method: 'PUT',
        body: data
      })
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUdpateProfileMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation } = usersApiSlice;
