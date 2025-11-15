import { baseApi } from "@/redux/baseApi";


export const agentApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({

     getCommission: builder.query({
     query: () => ({
          url: "/com/agent-com",
          method: "GET",
     }),
     providesTags: ["Agent"],
     }),

     createAddMoney: builder.mutation({
     query: (body) => ({
          url: "/wallet/add",
          method: "POST",
          body,
     }),
     invalidatesTags: ["Agent"],
     }),

}),
});

export const { 
     useGetCommissionQuery, 
     useCreateAddMoneyMutation
} = agentApi;