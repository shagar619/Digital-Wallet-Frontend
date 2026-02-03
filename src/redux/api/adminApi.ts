// /* eslint-disable @typescript-eslint/no-explicit-any */
// import type {
//   AllWalletApiResponse,
//   CommissionResponse,
//   TransactionApiResponse,
//   UpdateUserRoleApiResponse,
//   UsersResponse,
//   WalletApiResponse,
// } from "@/types/admin.type";
// import { baseApi } from "../baseApi";


// export const adminApi = baseApi.injectEndpoints({

//      endpoints: (builder) => ({
//      // redux/api/userApi.ts
//     getAllUser: builder.query<UsersResponse, { searchTerm?: string } | void>({
//       query: () => ({
//         url: "/user/all-users",
//         method: "GET",
//       }),
//       providesTags: ["Admin"],
//     }),

//     getAllAgent: builder.query<UsersResponse, void>({
//       query: () => ({
//         url: "/user/all-agents",
//         method: "GET",
//       }),
//       providesTags: ["Admin"],
//     }),
//     getAllTrans: builder.query<TransactionApiResponse, { page: number; limit: number; type?: string; startDate?: string; endDate?: string }>(
//       {
//         query: ({ page, limit, type, startDate, endDate }) => ({
//           url: "/trans/all-transactions",
//           method: "GET",
//           params: { page, limit, type, startDate, endDate },
//         }),
//         providesTags: ["Admin"],
//       }
//     ),

//     getAllCommission: builder.query<CommissionResponse, void>({
//       query: () => ({
//         url: "/com/all-agent-com",
//         method: "GET",
//       }),
//       providesTags: ["Admin"],
//     }),
//     getAllWallet: builder.query<AllWalletApiResponse, void>({
//       query: () => ({
//         url: "/wallet/all-wallet",
//         method: "GET",
//       }),
//       providesTags: ["Admin"],
//     }),
//     getCapitalWallet: builder.query<AllWalletApiResponse, void>({
//       query: () => ({
//         url: "/wallet/capital-wallet",
//         method: "GET",
//       }),
//       providesTags: ["Admin"],
//     }),
//     createBlockWallet: builder.mutation<WalletApiResponse, { id: string; body: any }>({
//       query: ({ id, body }) => ({
//         url: `/wallet/${id}`,
//         method: "PATCH",
//         body,
//       }),
//       invalidatesTags: ["Admin"],
//     }),

//     updateUserRoleStatus: builder.mutation<UpdateUserRoleApiResponse, { id: string; body: any }>({
//       query: ({ id, body }) => ({
//         url: `/user/${id}`,
//         method: "PATCH",
//         body,
//       }),
//       invalidatesTags: ["Admin"],
//     }),

//   }),
// });











import type { IApiResponse, IUser } from "@/types/user.type";
import { baseApi } from "../baseApi";





interface IQueryParam {
     searchTerm?: string;
     page?: number;
     limit?: number;
}

export const adminApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     getAllUsers: builder.query<IApiResponse<IUser[]>, IQueryParam>({
     query: (params) => ({
          url: "/user/all-users",
          method: "GET",
          params: params, // Automatically converts object to query string
     }),
     providesTags: ["User"],
     }),

     getAllAgents: builder.query<IApiResponse<IUser[]>, IQueryParam>({
     query: (params) => ({
          url: "/user/all-agents",
          method: "GET",
          params: params,
     }),
     providesTags: ["Agent"],
     }),

     // Admin Update Status (Moved here as it's an admin action)
     updateUserStatus: builder.mutation<IApiResponse<IUser>, { id: string; data: Partial<IUser> }>({
     query: ({ id, data }) => ({
          url: `/user/${id}`,
          method: "PATCH",
          data: data,
     }),
     invalidatesTags: ["User", "Agent"],
     }),

     // 👇 ADD THIS MUTATION
     deleteUser: builder.mutation<IApiResponse<null>, string>({
     query: (id) => ({
          url: `/users/${id}`,
          method: "DELETE",
     }),
     invalidatesTags: ["User", "Agent"], // Refresh both lists
     }),

}),
});


export const { 
     useGetAllUsersQuery, 
     useGetAllAgentsQuery,
     useUpdateUserStatusMutation,
     useDeleteUserMutation
} = adminApi;

