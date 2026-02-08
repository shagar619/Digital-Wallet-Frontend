import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";


export const baseApi = createApi({
     reducerPath: "baseApi",
     baseQuery: axiosBaseQuery(),
     tagTypes: ["Admin", "User", "Agent", "Auth", "Wallet", "Transactions", "Stats"],
     endpoints: () => ({}),
});