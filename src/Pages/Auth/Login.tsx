import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, 
  Loader2, Wallet, ShieldCheck, Check, 
  UserCog,
  UserCheck,
  Users
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming react-router usage
import { useLoginMutation } from '@/redux/api/authApi';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

interface ILoginInput {
  email: string;
  password: string;
}


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Redux Hook
  const [loginUser, { isLoading }] = useLoginMutation();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ILoginInput>();

  // --- AUTO FILL FUNCTION ---
  const handleAutoFill = (role: 'ADMIN' | 'AGENT' | 'USER') => {
    const credentials = {
      ADMIN: { email: 'testadmin@gmail.com', password: '123AAaa$' },
      AGENT: { email: 'testagent@gmail.com', password: '123AAaa$' },
      USER:  { email: 'testuser@gmail.com',  password: '123AAaa$' }
    };

    const creds = credentials[role];
    setValue('email', creds.email);
    setValue('password', creds.password);
    toast.info(`Auto-filled ${role} credentials`);
  };


  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();

      if (res.token) sessionStorage.setItem("authToken", res.token);
      
      if (
        res?.data?.user?.IsActive === "BLOCKED" ||
        res?.data?.user?.IsActive === "INACTIVE"
      ) {
        navigate("/login");
        toast.error(`User is ${res?.data?.user?.IsActive}`);
      } else {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.data?.message || "Invalid credentials");
    }
  };


  return (
    <div className="min-h-screen bg-slate-950 flex font-sans selection:bg-emerald-500/30 overflow-hidden relative pt-18">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      {/* --- LEFT SIDE: VISUAL (Vault Theme) --- */}
      <div className="hidden lg:flex w-5/12 relative items-center justify-center p-12 z-10 bg-slate-900/30 backdrop-blur-sm border-r border-slate-800/50">
        <div className="relative z-20 text-center">
          
          {/* Animated Vault Lock Visual */}
          <div className="relative w-64 h-64 mx-auto mb-12 flex items-center justify-center">
             {/* Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-slate-700 border-dashed"
            />
            {/* Middle Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-slate-600 border-dotted opacity-50"
            />
            {/* Core Lock */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.4)] flex items-center justify-center"
            >
              <Lock size={48} className="text-white" />
              <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse" />
            </motion.div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">Secure Access</h2>
          <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
            Your financial data is encrypted with military-grade protocols. Access your vault securely.
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile Header */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
              <Wallet size={24} />
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 md:p-10 shadow-2xl">
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-slate-400">Please enter your details to sign in.</p>
            </div>


            

            {/* --- AUTO FILL BUTTONS (TESTING ONLY) --- */}
            <div className="mb-8 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
              <p className="text-xs text-slate-500 uppercase font-bold mb-3 text-center tracking-wider">Quick Login (Testing)</p>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  type="button" 
                  onClick={() => handleAutoFill('ADMIN')}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
                >
                  <UserCog size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-slate-400 group-hover:text-white">Admin</span>
                </button>
                
                <button 
                  type="button" 
                  onClick={() => handleAutoFill('AGENT')}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
                >
                  <UserCheck size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-slate-400 group-hover:text-white">Agent</span>
                </button>
                
                <button 
                  type="button" 
                  onClick={() => handleAutoFill('USER')}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
                >
                  <Users size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium text-slate-400 group-hover:text-white">User</span>
                </button>
              </div>
            </div>




            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white hover:bg-slate-800 transition-all hover:border-slate-600">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" color="#4285F4"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" color="#34A853"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" color="#FBBC05"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" color="#EA4335"/>
                  </svg>
                  <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white hover:bg-slate-800 transition-all hover:border-slate-600">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.74 3.4 1.86-2.93 1.76-2.35 5.55.54 6.74-.23.63-.42 1.25-.79 1.86-.53.86-1.12 1.68-1.8 2.55zm-6.6-15.9c.39-2.08 2.1-3.66 4.18-3.74.5.03.95.12 1.41.28.06 2.33-1.89 4.31-4.08 4.5-.47-.02-.93-.16-1.51-.23z"/>
                  </svg>
                  <span className="text-sm font-medium">Apple</span>
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-4 text-slate-500 font-medium">Or continue with</span></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                      <Mail size={20} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      {...register("email", { required: "Email is required" })}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      required
                    />
                </div>
                {errors.email && <span className="text-red-400 text-xs pl-1">{errors.email.message}</span>}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <a href="#" className="text-xs text-emerald-400 hover:text-emerald-300 hover:underline">Forgot password?</a>
                </div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                      <Lock size={20} />
                    </div>
                    <input 
                      placeholder="••••••••" 
                      type={showPassword ? 'text' : 'password'} 
                      {...register("password", { required: "Password is required" })}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.password && <span className="text-red-400 text-xs pl-1">{errors.password.message}</span>}
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3">
                <button 
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${rememberMe ? 'bg-emerald-500 border-emerald-500' : 'bg-slate-950 border-slate-700'}`}
                >
                  {rememberMe && <Check size={14} className="text-white" />}
                </button>
                <label onClick={() => setRememberMe(!rememberMe)} className="text-sm text-slate-400 cursor-pointer select-none">Remember me for 30 days</label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Sign In <ArrowRight size={20} /></>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-slate-400 mt-8">
              Don't have an account?{' '}
              <Link to="/signup" className="text-emerald-400 font-medium hover:underline">
                Sign up
              </Link>
            </p>

            {/* Security Note Mobile */}
            <div className="lg:hidden mt-8 flex items-center justify-center gap-2 text-slate-500 text-xs">
              <ShieldCheck size={14} /> Bank-grade security
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;





