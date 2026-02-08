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

}),
});

export const {
     useGetMyProfileQuery,
     useUpdateMyProfileMutation
} = userApi;