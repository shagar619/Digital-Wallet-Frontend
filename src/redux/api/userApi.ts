import type { IApiResponse, IUser } from "@/types/user.type";
import { baseApi } from "../baseApi";


const userApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     getMyProfile: builder.query<IApiResponse<IUser>, void>({
     query: () => ({
          url: "/user/my-profile", // Make sure this matches your backend route prefix
          method: "GET",
     }),
     providesTags: ["User"],
     }),

     updateMyProfile: builder.mutation<IApiResponse<IUser>, Partial<IUser>>({
     query: (data) => ({
          url: `/user/${data._id}`, // Assuming your backend takes ID in param, or remove ID if it uses token
          method: "PATCH",
          data: data,
     }),
     invalidatesTags: ["User"], // 👈 Critical: Forces Navbar & Profile to refresh data
     }),

     // UpdateMyProfile: builder.mutation<ProfileResponse, Record<string, string>>({
     // query: (payload) => ({
     //      url: "/user/update-profile",
     //      method: "PATCH",
     //      body: payload,
     // }),
     // invalidatesTags: ["User"],
     // }),

//     getYourTrans: builder.query<TransactionApiResponse, { page: number; limit: number; type?: string; startDate?: string; endDate?: string }>(
//       {
//         query: ({ page, limit, type, startDate, endDate }) => ({
//           url: "/trans/your-transactions",
//           method: "GET",
//           params: { page, limit, type, startDate, endDate },
//         }),
//         providesTags: ["User"],
//       }
//     ),

//     getYourWallet: builder.query<AllWalletApiResponse, void>({
//       query: () => ({
//         url: "/wallet/my-wallet",
//         method: "GET",
//       }),
//       providesTags: ["User"],
//     }),

//     createWithdraw: builder.mutation<WithdrawResponse, void>({
//       query: (body) => ({
//         url: "/wallet/withdraw",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["User"],
//     }),

//     createTransfer: builder.mutation<TransferResponse, { receiver_id: string, amount: number }>({
//       query: (body) => ({
//         url: "/wallet/transfer-money",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["User"],
//     }),

    // getAllUser: builder.query<UsersResponse, { searchTerm?: string } | void>({
    //   query: (params) => ({
    //     url: "/user/all-users",
    //     method: "GET",
    //     body: params,
    //   }),
    //   providesTags: ["User"],
    // }),

    // /redux/api/userApi.ts
    // getAllUser: builder.query<UsersResponse, { page?: number; limit?: number; searchTerm?: string; email?: string; phone?: string }>({
    //   query: (params) => ({
    //     url: '/api/w1/user/all-users',
    //     method: 'GET',
    //     params, // <-- this attaches ?page=&limit=&email=&phone=&searchTerm=
    //   }),
    // }),



//     getAllUser: builder.query<UsersResponse, GetAllUserParams>({
//       query: (params) => ({
//         url: "/user/all-users",
//         method: "GET",
//         params, // ✅ this works
//       }),
//     }),

}),
});

export const {
     useGetMyProfileQuery,
     useUpdateMyProfileMutation
     // useGetYourTransQuery,
     // useGetYourWalletQuery,
     // useCreateWithdrawMutation,
     // useCreateTransferMutation,
     // useLazyGetAllUserQuery
} = userApi;