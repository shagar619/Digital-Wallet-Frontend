/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import type { ISignup, ILogin } from "@/types/auth.type";
// import { baseApi } from "./baseApi";



// const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     // Signup
//     createUser: builder.mutation({
//       query: (userData) => ({
//         url: "/user/register",
//         method: "POST",
//         body: userData,
//       }),
//       invalidatesTags: ["Auth"],
//     }),

//     loginUser: builder.mutation<
//       { data: any; message: string; token: string },
//       ILogin
//     >({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//       invalidatesTags: ["Auth"],
//     }),
//     logoutUser: builder.mutation<{ message: string }, void>({
//       query: (credentials) => ({
//         url: "/auth/logout",
//         method: "POST",
//         body: credentials,
//       }),
//       invalidatesTags: ["Auth"],
//     }),
//   }),
// });

// const {
//   useCreateUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
// } = authApi;




import type { ILogin, ISignup } from "@/types/auth.type";
import { baseApi } from "../baseApi";





export const authApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     // Register User
     register: builder.mutation<{ message: string }, ISignup>({
     query: (userData) => ({
          url: "/user/register", // Matches user.routes.ts
          method: "POST",
          data: userData,
     }),
     invalidatesTags: ["Auth"],
     }),

     // Login User
     login: builder.mutation<{ data: any; message: string; token: string }, ILogin>({
     query: (userInfo) => ({
          url: "/auth/login", // Matches the new auth.route.ts
          method: "POST",
          data: userInfo,
     }),
     }),

     // Logout User
     logout: builder.mutation<{ message: string }, void>({
     query: () => ({
          url: "/auth/logout", // Matches the new auth.route.ts
          method: "POST",
     }),
     invalidatesTags: ["Auth"],
     }),
}),
});




export const {
     useRegisterMutation,
     useLoginMutation,
     useLogoutMutation,
} = authApi;