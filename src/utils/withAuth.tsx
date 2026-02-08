/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import type { TRole } from "@/types/auth.type";
import { Loader2 } from "lucide-react";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper(props: any) {
    const { data: profileData, isLoading } = useGetMyProfileQuery(undefined);
    const user = profileData?.data;

    // 1. Loading State (Full Screen Spinner)
    if (isLoading) {
      return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-950">
          <Loader2 className="h-10 w-10 animate-spin text-emerald-500 mb-4" />
          <p className="text-slate-400 text-sm animate-pulse">Verifying credentials...</p>
        </div>
      );
    }

    // 2. Not Logged In -> Login
    if (!user?.email) {
      return <Navigate to="/login" replace />;
    }

    // 3. Wrong Role -> Unauthorized
    if (requiredRole && requiredRole !== user?.role) {
      return <Navigate to="/unauthorized" replace />;
    }

    // 4. Authorized -> Render Component
    return <Component {...props} />;
  };
};