import { baseApi } from "@/redux/baseApi";


export const authApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     // Signup
     createUser: builder.mutation({
     query: (userData) => ({
          url: "/user/register",
          method: "POST",
          data: userData,
     }),
     invalidatesTags: ["Auth"],
     }),

     loginUser: builder.mutation({
     query: (credentials) => ({
          url: "/auth/login",
          method: "POST",
          data: credentials,
     }),
     invalidatesTags: ["Auth"],
     }),

     logoutUser: builder.mutation({
     query: () => ({
          url: "/auth/logout",
          method: "POST",
     }),
     invalidatesTags: ["Auth"],
     }),
}),
});

export const {
     useCreateUserMutation,
     useLoginUserMutation,
     useLogoutUserMutation,
} = authApi;