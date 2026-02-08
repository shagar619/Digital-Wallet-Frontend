/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IApiResponse, IUser } from "@/types/user.type";
import { baseApi } from "../baseApi";





interface IQueryParam {
     searchTerm?: string;
     page?: number;
     limit?: number;
}

export interface ISystemStats {
     totalUsers: number;
     totalAgents: number;
     totalMoney: number;
     recentTransactions: any[];
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
          url: `/user/${id}`,
          method: "DELETE",
     }),
     invalidatesTags: ["User", "Agent"], // Refresh both lists
     }),

     // Analytics
     getSystemStats: builder.query<IApiResponse<ISystemStats>, void>({
     query: () => ({
          url: "/transactions/analytics",
          method: "GET",
     }),
     providesTags: ["Stats"],
     }),

     // Wallet Management
     getAllWallets: builder.query<IApiResponse<any[]>, { page?: number; limit?: number; searchTerm?: string }>({
     query: (params) => ({
          url: "/wallets/all-wallets",
          method: "GET",
          params,
     }),
     providesTags: ["Wallet"],
     }),

     updateWalletStatus: builder.mutation<IApiResponse<any>, { id: string; status: "ACTIVE" | "BLOCKED" }>({
     query: ({ id, status }) => ({
          url: `/wallets/${id}`,
          method: "PATCH",
          data: { status },
     }),
     invalidatesTags: ["Wallet"],
     }),

}),
});


export const { 
     useGetAllUsersQuery, 
     useGetAllAgentsQuery,
     useUpdateUserStatusMutation,
     useDeleteUserMutation,
     useGetSystemStatsQuery,
     useGetAllWalletsQuery, 
     useUpdateWalletStatusMutation,
} = adminApi;

