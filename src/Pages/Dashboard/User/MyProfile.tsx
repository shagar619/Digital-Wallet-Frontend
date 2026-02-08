/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGetMyProfileQuery, useUpdateMyProfileMutation } from "@/redux/api/userApi";
import MyProfileUi from "./MyProfileUi";
import { Loader2 } from "lucide-react";

// --- VALIDATION SCHEMA ---
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 chars"),
  phone: z.string().optional(),
  address: z.string().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine((data) => {
  if (data.password && data.password !== data.confirmPassword) {
    return false;
  }
  return true;
}, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileSchema>;



const MyProfile = () => {

  const { data: profileData, isLoading, isError } = useGetMyProfileQuery(undefined);
  const [updateProfile, { isLoading: isUpdating }] = useUpdateMyProfileMutation();
  const [isEditing, setIsEditing] = useState(false);

  const user = profileData?.data;

  // React Hook Form Setup
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Populate form when data loads
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        phone: user.phone || "",
        address: user.address || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user, form]);

  const onSubmit = async (values: ProfileFormValues) => {
    if (!user) return;

    // Filter out empty fields and only send what changed (optional optimization)
    const payload: any = { _id: user._id, name: values.name, phone: values.phone, address: values.address };
    
    // Only add password if the user actually typed one
    if (values.password && values.password.length > 0) {
      payload.password = values.password;
    }

    try {
      const res = await updateProfile(payload).unwrap();
      if (res.success) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        form.resetField("password");
        form.resetField("confirmPassword");
      }
    } catch (err: any) {
      console.log("Update profile error:", err);
      toast.error(err.data?.message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />
      </div>
    );
  }

  if (isError || !user) {
    return <div className="text-center text-red-400 mt-10">Failed to load profile.</div>;
  }

  return (
    <MyProfileUi 
      user={user}
      form={form}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      isUpdating={isUpdating}
      onSubmit={onSubmit}
    />
  );
};

export default MyProfile;