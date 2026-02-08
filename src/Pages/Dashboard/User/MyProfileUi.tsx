/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { UseFormReturn } from "react-hook-form";
import type { IUser } from "@/types/user.type";
import { 
  User, Phone, MapPin, Mail, ShieldCheck, 
  Calendar, Edit3, Save, X, Lock, Camera, CheckCircle2 
} from "lucide-react";

interface MyProfileUiProps {
  user: IUser;
  form: UseFormReturn<any>;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  isUpdating: boolean;
  onSubmit: (values: any) => void;
}

const MyProfileUi: React.FC<MyProfileUiProps> = ({
  user,
  form,
  isEditing,
  setIsEditing,
  isUpdating,
  onSubmit,
}) => {
  const { register, handleSubmit, formState: { errors } } = form;

  // Visual formatting
  const joinDate = new Date(user.createdAt || Date.now()).toLocaleDateString("en-US", { 
    month: 'long', year: 'numeric' 
  });

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      {/* 1. HEADER BANNER */}
      <div className="relative h-48 rounded-3xl overflow-hidden mb-16 bg-slate-900 border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-blue-900/40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        {/* Animated Shapes */}
        <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full" />
      </div>

      {/* 2. PROFILE HEADER CARD */}
      <div className="relative px-6 sm:px-10 -mt-24">
        <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
          
          {/* Avatar with Glow */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-950 bg-slate-800 relative z-10 overflow-hidden shadow-2xl">
              {user.profilePhoto ? (
                <img src={user.profilePhoto} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-emerald-500 font-bold text-4xl">
                  {user.name.charAt(0)}
                </div>
              )}
              
              {/* Edit Photo Overlay (Visual Only) */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="text-white w-8 h-8" />
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 z-20 bg-slate-950 p-1 rounded-full">
              <div className="bg-emerald-500 text-slate-950 p-1.5 rounded-full">
                <ShieldCheck size={16} />
              </div>
            </div>
          </div>

          {/* Name & Role */}
          <div className="flex-1 mb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{user.name}</h1>
              {user.IsVerified && <CheckCircle2 className="text-blue-400 w-6 h-6" fill="rgba(59, 130, 246, 0.2)" />}
            </div>
            <div className="flex items-center gap-4 mt-2 text-slate-400 text-sm">
              <span className="flex items-center gap-1"><Mail size={14} /> {user.email}</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span className="flex items-center gap-1 uppercase tracking-wider font-bold text-xs bg-slate-800 px-2 py-0.5 rounded text-emerald-400">
                {user.role}
              </span>
            </div>
          </div>

          {/* Edit Toggle Button */}
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 transition-all shadow-lg mb-4 md:mb-0"
            >
              <Edit3 size={18} /> <span className="font-medium">Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="mt-12 grid gap-8"> 
        
        <AnimatePresence mode="wait">
          {isEditing ? (
            /* --- EDIT MODE FORM --- */
            <motion.form 
              key="edit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Edit Information</h3>
                <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800">
                  <X size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
                    <input {...register("name")} className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs">{String(errors.name.message)}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
                    <input {...register("phone")} className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-400">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
                    <input {...register("address")} className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-8 mb-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Lock size={18} /> Security</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">New Password</label>
                    <input type="password" {...register("password")} placeholder="Leave blank to keep current" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Confirm Password</label>
                    <input type="password" {...register("confirmPassword")} placeholder="Re-type new password" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
                    {errors.confirmPassword && <p className="text-red-400 text-xs">{String(errors.confirmPassword.message)}</p>}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition-colors font-medium">
                  Cancel
                </button>
                <button type="submit" disabled={isUpdating} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2">
                  {isUpdating ? <span className="animate-spin">⏳</span> : <Save size={18} />} 
                  Save Changes
                </button>
              </div>
            </motion.form>
          ) : (
            /* --- VIEW MODE GRID --- */
            <motion.div 
              key="view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Personal Info Card */}
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <User size={20} className="text-emerald-500" /> Personal Details
                </h3>
                <div className="space-y-6">
                  <InfoRow label="Phone Number" value={user.phone} icon={<Phone size={16} />} />
                  <InfoRow label="Address" value={user.address} icon={<MapPin size={16} />} />
                  <InfoRow label="Member Since" value={joinDate} icon={<Calendar size={16} />} />
                </div>
              </div>

              {/* Account Stats / Security Card (Placeholder for visual balance) */}
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-blue-500" /> Account Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-sm">Verification Level</span>
                      <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded">Tier 2 Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-sm">Two-Factor Auth</span>
                      <span className="text-slate-500 font-bold text-sm">Disabled</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                  <p className="text-slate-500 text-xs">
                    Your account is secured with 256-bit encryption.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

// Helper Component for View Mode Rows
const InfoRow = ({ label, value, icon }: any) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">{label}</p>
      <p className="text-slate-200 font-medium">{value || "Not provided"}</p>
    </div>
  </div>
);

export default MyProfileUi;