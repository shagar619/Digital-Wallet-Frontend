import { baseApi } from "@/redux/baseApi";


export const adminApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({

     // redux/api/userApi.ts
     getAllUser: builder.query({
     query: () => ({
          url: "/user/all-users",
          method: "GET",
     }),
     providesTags: ["Admin"],
     }),

     getAllAgent: builder.query({
     query: () => ({
          url: "/user/all-agents",
          method: "GET",
     }),
     providesTags: ["Admin"],
     }),

     getAllTrans: builder.query(
     {
     query: ({ page, limit, type, startDate, endDate }) => ({
          url: "/trans/all-transactions",
          method: "GET",
          params: { page, limit, type, startDate, endDate },
     }),
     providesTags: ["Admin"],
     }
     ),

     getAllCommission: builder.query({
     query: () => ({
          url: "/com/all-agent-com",
          method: "GET",
     }),
     providesTags: ["Admin"],
     }),

     getAllWallet: builder.query({
     query: () => ({
          url: "/wallet/all-wallet",
          method: "GET",
     }),
     providesTags: ["Admin"],
     }),

     getCapitalWallet: builder.query({
     query: () => ({
          url: "/wallet/capital-wallet",
          method: "GET",
     }),
     providesTags: ["Admin"],
     }),

     createBlockWallet: builder.mutation({
     query: ({ id, body }) => ({
          url: `/wallet/${id}`,
          method: "PATCH",
          body,
     }),
     invalidatesTags: ["Admin"],
     }),

     updateUserRoleStatus: builder.mutation({
     query: ({ id, body }) => ({
          url: `/user/${id}`,
          method: "PATCH",
          body,
     }),
     invalidatesTags: ["Admin"],
     }),

}),
});

export const {
     useGetAllUserQuery,
     useGetAllAgentQuery,
     useGetAllTransQuery,
     useGetAllCommissionQuery,
     useGetAllWalletQuery,
     useCreateBlockWalletMutation,
     useUpdateUserRoleStatusMutation,
     useGetCapitalWalletQuery
} = adminApi;