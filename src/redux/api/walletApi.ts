import type { IApiResponse } from "@/types/user.type";
import { baseApi } from "../baseApi";




export interface IWallet {
     _id: string;
     balance: number;
     status: "ACTIVE" | "BLOCKED";
     user: string;
}

export const walletApi = baseApi.injectEndpoints({

     endpoints: (builder) => ({

     getMyBalance: builder.query<IApiResponse<IWallet>, void>({
     query: () => ({
          url: "/wallets/my-balance",
          method: "GET",
     }),
     providesTags: ["Wallet"],
     }),
     }),
});

export const { 
     useGetMyBalanceQuery,
} = walletApi;