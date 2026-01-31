import { useGetMyProfileQuery } from "@/redux/api/userApi";
import type { TRole } from "@/types/auth.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";


export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {

    return function AuthWrapper() {

    const { data: profileData, isLoading } = useGetMyProfileQuery(undefined);

    const user = profileData?.data; // FIXED SHAPE
    console.log("withAuth - user profile data:", user);

    if (!isLoading && !user?.email) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== user?.role) {
      return <Navigate to="/unauthorized" />;
    }
    return <Component />;
  };
};