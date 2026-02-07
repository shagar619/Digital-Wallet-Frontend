/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IApiResponse } from "@/types/user.type";
import { baseApi } from "../baseApi";




export interface ITransaction {
     transactionId: string;
     amount: number;
     type: "SEND_MONEY" | "CASH_IN" | "WITHDRAW" | "DEPOSIT";
     status: "COMPLETED" | "FAILED";
     createdAt: string;
     senderId: { _id: string; name: string; phone: string };
     receiverId: { _id: string; name: string; phone: string };
}



export const transactionApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     // Send Money
     sendMoney: builder.mutation<IApiResponse<any>, { receiverPhone: string; amount: number; pin?: string }>({
     query: (data) => ({
          url: "/transactions/send-money",
          method: "POST",
          data,
     }),
     invalidatesTags: ["Wallet", "Transactions"], // Updates Balance & History instantly
     }),

     // Withdraw
     withdraw: builder.mutation<IApiResponse<any>, { agentPhone: string; amount: number; pin?: string }>({
     query: (data) => ({
          url: "/transactions/withdraw",
          method: "POST",
          data,
     }),
     invalidatesTags: ["Wallet", "Transactions"],
     }),

     // Get History
     getMyTransactions: builder.query<IApiResponse<ITransaction[]>, { type?: string; limit?: number }>({
     query: (params) => ({
          url: "/transactions/my-history",
          method: "GET",
          params,
     }),
     providesTags: ["Transactions"],
     }),

     // Agent Cash In
     cashIn: builder.mutation<IApiResponse<any>, { userPhone: string; amount: number; pin: string }>({
     query: (data) => ({
          url: "/transactions/cash-in",
          method: "POST",
          data,
     }),
     invalidatesTags: ["Wallet", "Transactions"],
     }),

}),
});

export const { 
     useSendMoneyMutation, 
     useWithdrawMutation, 
     useGetMyTransactionsQuery,
     useCashInMutation
} = transactionApi;