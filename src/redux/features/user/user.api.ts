import { baseApi } from "@/redux/baseApi";


export const userApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     GetMyProfile: builder.query({
     query: () => ({
          url: "/user/my-profile",
          method: "GET",
     }),
     providesTags: ["User"],
     }),

     UpdateMyProfile: builder.mutation({
     query: (payload) => ({
          url: "/user/update-profile",
          method: "PATCH",
          body: payload,
     }),
     invalidatesTags: ["User"],
     }),

     getYourTrans: builder.query({
     query: ({ page, limit, type, startDate, endDate }) => ({
          url: "/trans/your-transactions",
          method: "GET",
          params: { page, limit, type, startDate, endDate },
     }),
     providesTags: ["User"],
     }),

     getYourWallet: builder.query({
     query: () => ({
          url: "/wallet/my-wallet",
          method: "GET",
     }),
     providesTags: ["User"],
     }),

     createWithdraw: builder.mutation({
     query: (body) => ({
          url: "/wallet/withdraw",
          method: "POST",
          body,
     }),
     invalidatesTags: ["User"],
     }),

     createTransfer: builder.mutation({
     query: (body) => ({
          url: "/wallet/transfer-money",
          method: "POST",
          body,
     }),
     invalidatesTags: ["User"],
     }),

     getAllUser: builder.query({
     query: (params) => ({
          url: "/user/all-users",
          method: "GET",
          params, // ✅ this works
     }),
     }),

}),
});

export const {
     useGetMyProfileQuery,
     useUpdateMyProfileMutation,
     useGetYourTransQuery,
     useGetYourWalletQuery,
     useCreateWithdrawMutation,
     useCreateTransferMutation,
     useLazyGetAllUserQuery
} = userApi;