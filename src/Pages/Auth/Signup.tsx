/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Lock, 
  Briefcase, ArrowRight, Loader2, Eye, EyeOff, ShieldCheck, Wallet 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming react-router usage
import { useRegisterMutation } from '@/redux/api/authApi';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';


// Types matching your Backend Zod Schema
interface IRegisterInput {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  password: string;
  role: 'USER' | 'AGENT' | "ADMIN";
}



// --- MAIN COMPONENT ---
const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redux Mutation
  const [registerUser, { isLoading }] = useRegisterMutation();

  // React Hook Form setup
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch, 
    formState: { errors } 
  } = useForm<IRegisterInput>({
    defaultValues: { role: 'USER' } // Default role
  });

  // Watch role to animate the toggle
  const selectedRole = watch('role');

  const onSubmit: SubmitHandler<IRegisterInput> = async (data: any) => {
    try {
        await registerUser(data).unwrap();
        toast.success("Account created successfully!");
        navigate('/login');

    } catch (err: any) {
      // Handle error from backend
      toast.error(`${err?.data?.message || 'Registration failed. Please try again.'}`);
    }
  };


  return (
    <div className="min-h-screen bg-slate-950 flex font-sans selection:bg-emerald-500/30 overflow-hidden relative pt-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* --- LEFT SIDE: BRANDING --- */}
      <div className="hidden lg:flex w-5/12 relative items-center justify-center p-12 z-10">
        <div className="max-w-md relative z-20">
          <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Wallet size={24} />
          </div>
            <h1 className="text-3xl font-bold text-white">Gigi Wallet</h1>
          </div>
          <h2 className="text-5xl font-bold text-white leading-tight mb-6">
            Join the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">finance.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Create an account today to start managing your assets, connecting with clients, and unlocking financial freedom.
          </p>
          <div className="inline-flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-full px-5 py-2 text-slate-300 backdrop-blur-md">
            <ShieldCheck className="text-emerald-400" size={20} />
            <span className="text-sm font-medium">Bank-grade security & encryption</span>
          </div>
        </div>

        {/* Orbit Visuals (Kept from your original code) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="h-full w-full rounded-full border border-slate-800/50 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-slate-900 border border-emerald-500/50 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"><User size={20} /></div>
            </div>
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-[100px]">
            <div className="h-full w-full rounded-full border border-slate-800/30 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-12 h-12 bg-slate-900 border border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"><Briefcase size={20} /></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 relative z-20 overflow-y-auto my-12 lg:my-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white"><Wallet size={16} /></div>
              <h2 className="text-xl font-bold text-white">Gigi Wallet</h2>
            </div>

            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
              <p className="text-slate-400">Enter your details below to get started.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* ROLE TOGGLE */}
              <div>
                <label className="text-sm font-medium text-slate-300 mb-3 block">I am signing up as a: <span className="text-emerald-500">*</span></label>
                <div className="grid grid-cols-2 gap-2 bg-slate-950/50 p-1.5 rounded-xl border border-slate-800 relative">
                  <motion.div
                    layoutId="role-indicator"
                    className={`absolute top-1.5 bottom-1.5 rounded-lg bg-emerald-600 shadow-lg shadow-emerald-500/20 z-0 ${selectedRole === 'USER' ? 'left-1.5 right-[50%]' : 'left-[50%] right-1.5'}`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                  <button type="button" onClick={() => setValue('role', 'USER')} className="relative z-10 flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition-colors">
                    <User size={18} /> User
                  </button>
                  <button type="button" onClick={() => setValue('role', 'AGENT')} className="relative z-10 flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition-colors">
                    <Briefcase size={18} /> Agent
                  </button>
                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex">Full Name <span className="text-emerald-500 ml-1">*</span></label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400"><User size={20} /></div>
                    <input 
                      {...register("name", { 
                        required: "Name is required",
                        minLength: { value: 2, message: "Min 2 characters" }
                      })} 
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  {errors.name && <span className="text-red-400 text-xs pl-1">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400"><Phone size={20} /></div>
                    <input 
                      {...register("phone", {
                        pattern: {
                        value: /^(?:\+8801\d{9}|01\d{9})$/,
                        message: "Valid BD Phone required (01XXXXXXXXX)"
                      }
                      })}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all" 
                      placeholder="01XXXXXXXXX" 
                  />
                </div>
                  {errors.phone && <span className="text-red-400 text-xs pl-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex">Email Address <span className="text-emerald-500 ml-1">*</span></label>
                <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400"><Mail size={20} /></div>
                  <input 
                    type="email" 
                    {...register("email", { required: "Email is required" })}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
                {errors.email && <span className="text-red-400 text-xs pl-1">{errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Address</label>
              <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400"><MapPin size={20} /></div>
                <input 
                  {...register("address")}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all" 
                  placeholder="Dhaka, Bangladesh" 
                />
              </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex">Password <span className="text-emerald-500 ml-1">*</span></label>
              <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400"><Lock size={20} /></div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  {...register("password", { 
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/,
                    message: "8+ chars, 1 Uppercase, 1 Number, 1 Special Char"
                  }
                  })}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-all" 
                  placeholder="••••••••" 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white focus:outline-none">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
                {errors.password && <span className="text-red-400 text-xs pl-1">{errors.password.message}</span>}
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500" required />
                <label htmlFor="terms" className="text-sm text-slate-400 leading-relaxed">
                  I agree to the <a href="#" className="text-emerald-400 hover:underline">Terms of Service</a> and <a href="#" className="text-emerald-400 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                {isLoading ? <Loader2 className="animate-spin" /> : <>Create Account <ArrowRight size={20} /></>}
              </button>
            </form>

            <p className="text-center text-slate-400 mt-8">
              Already have an account? <Link to="/login" className="text-emerald-400 font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
