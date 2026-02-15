/* eslint-disable @typescript-eslint/no-explicit-any */
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
     // 👇 THIS IS CRITICAL. It forces "getMyProfile" in Navbar to re-run.
     invalidatesTags: ["User"],
     }),

     // Logout User
     logout: builder.mutation<{ message: string }, void>({
     query: () => ({
          url: "/auth/logout", // Matches the new auth.route.ts
          method: "POST",
     }),
     // Clear all cached data on logout
     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
     try {
          await queryFulfilled;
          dispatch(baseApi.util.resetApiState()); // Clears all Redux cache
     } catch (err) {
          console.error("Logout failed", err);
          console.log(arg)
     }
     },
     invalidatesTags: ["User"],
     }),
}),
});



export const {
     useRegisterMutation,
     useLoginMutation,
     useLogoutMutation,
} = authApi;