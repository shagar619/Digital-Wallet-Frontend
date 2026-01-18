/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import { handleApiError } from "@/utils/handleApiError";
// import type { FormValues, InputConfig } from "@/types/InputConfig.type";
// import { Eye, EyeOff } from "lucide-react";
// import { useCreateUserMutation } from "@/redux/features/auth/auth.api";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState<FormValues>({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//     address: "",
//     phone: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const [createUser, { isLoading }] = useCreateUserMutation();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const key = e.target.name as keyof FormValues;
//     let value = e.target.value;

//     if (key === "role") value = value.toUpperCase();

//     setForm({ ...form, [key]: value });
//   };

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       // console.log(form)
//       await createUser(form).unwrap();
//       toast.success("Account created successfully! ✅");
//       navigate("/login");
//     } catch (err: any) {
//       handleApiError(err);
//     }
//   };

//   const inputs: InputConfig[] = [
//     { name: "name", placeholder: "Full Name", type: "text" },
//     { name: "email", placeholder: "Email Address", type: "email" },
//     {
//       name: "role",
//       placeholder: "Select role",
//       type: "select",
//       options: [
//         { value: "USER", label: "USER" },
//         { value: "AGENT", label: "AGENT" },
//       ],
//     },
//     { name: "password", placeholder: "Password", type: "password" },
//     { name: "address", placeholder: "Address", type: "text" },
//     { name: "phone", placeholder: "Phone Number", type: "text" },
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-background">
//       <Card className="w-full max-w-md bg-card border border-input rounded-2xl shadow-xl p-6">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
//             Create Account
//           </CardTitle>
//           <p className="text-muted-foreground text-sm md:text-base">
//             Welcome! Fill in the form to create your account.
//           </p>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {inputs.map((input) => {
//               if (input.type === "select") {
//                 return (
//                   <div key={input.name} className="relative">
//                     <select
//                       name={input.name}
//                       value={form[input.name]}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-3 pr-12 rounded-lg bg-background text-foreground border border-input focus:border-primary focus:ring-2 focus:ring-primary appearance-none cursor-pointer text-base placeholder:text-muted-foreground transition"
//                     >
//                       <option value="" disabled>
//                         {input.placeholder}
//                       </option>
//                       {input.options.map((opt) => (
//                         <option
//                           key={opt.value}
//                           value={opt.value}
//                           className="bg-background text-foreground"
//                         >
//                           {opt.label}
//                         </option>
//                       ))}
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary">
//                       <svg
//                         className="h-6 w-6"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 );
//               } else if (input.type === "password") {
//                 return (
//                   <div key={input.name} className="relative">
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       placeholder={input.placeholder}
//                       name={input.name}
//                       value={form[input.name]}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-3 pr-12 rounded-lg bg-background text-foreground border border-input focus:border-primary focus:ring-2 focus:ring-primary placeholder:text-muted-foreground transition"
//                     />
//                     <button
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-6 w-6" />
//                       ) : (
//                         <Eye className="h-6 w-6" />
//                       )}
//                     </button>
//                   </div>
//                 );
//               } else {
//                 return (
//                   <Input
//                     key={input.name}
//                     type={input.type}
//                     placeholder={input.placeholder}
//                     name={input.name}
//                     value={form[input.name]}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-3 rounded-lg bg-background text-foreground border border-input focus:border-primary focus:ring-2 focus:ring-primary placeholder:text-muted-foreground transition"
//                   />
//                 );
//               }
//             })}
//             <Button
//               type="submit"
//               className="w-full py-3 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md"
//               disabled={isLoading}
//             >
//               {isLoading ? "Creating..." : "Sign Up"}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground mt-6">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-primary font-semibold underline hover:text-primary/80 transition-colors duration-300"
//             >
//               Login
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Signup;















import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Lock, 
  Briefcase, ArrowRight, Loader2, Eye, EyeOff, ShieldCheck, Wallet 
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming react-router usage



// --- REUSABLE INPUT COMPONENT ---
const InputField = ({ label, icon, type, placeholder, value, onChange, name, required = false, isPassword = false, onTogglePassword, showPassword }: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-slate-300 flex items-center gap-1">
      {label} {required && <span className="text-emerald-500">*</span>}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-emerald-400 transition-colors">
        {icon}
      </div>
      <input
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
        required={required}
      />
      {isPassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 focus:outline-none"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);


// --- MAIN COMPONENT ---
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    role: 'user' as 'user' | 'agent' // Default role
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form Submitted:", formData);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully! (Simulation)");
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-slate-950 flex font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* Background Noise & Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* --- LEFT SIDE: BRANDING & VISUALS (Hidden on mobile) --- */}
      <div className="hidden lg:flex w-5/12 relative items-center justify-center p-12 z-10">
        <div className="max-w-md relative z-20">
          {/* Logo */}
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

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-full px-5 py-2 text-slate-300 backdrop-blur-md">
            <ShieldCheck className="text-emerald-400" size={20} />
            <span className="text-sm font-medium">Bank-grade security & encryption</span>
          </div>
        </div>

        {/* Animated Background Visual (Orbiting Elements) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none">
        {/* Center Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse" />
        {/* Orbit 1 (User) */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
          <div className="h-full w-full rounded-full border border-slate-800/50 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-slate-900 border border-emerald-500/50 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <User size={20} />
          </div>
          </div>
          </motion.div>
          {/* Orbit 2 (Agent) */}
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-[100px]">
            <div className="h-full w-full rounded-full border border-slate-800/30 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-12 h-12 bg-slate-900 border border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Briefcase size={20} />
            </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- RIGHT SIDE: SIGNUP FORM --- */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 relative z-20 overflow-y-auto my-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
            
            {/* Mobile Logo Header (visible only on small screens) */}
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                <Wallet size={16} />
              </div>
              <h2 className="text-xl font-bold text-white">Gigi Wallet</h2>
            </div>

            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
              <p className="text-slate-400">Enter your details below to get started.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* ROLE SELECTION TOGGLE */}
              <div>
                <label className="text-sm font-medium text-slate-300 mb-3 block">I am signing up as a: <span className="text-emerald-500">*</span></label>
                <div className="grid grid-cols-2 gap-2 bg-slate-950/50 p-1.5 rounded-xl border border-slate-800 relative">
                  {/* Animated sliding background for active state */}
                  <motion.div
                    layoutId="role-indicator"
                    className={`absolute top-1.5 bottom-1.5 rounded-lg bg-emerald-600 shadow-lg shadow-emerald-500/20 z-0 ${formData.role === 'user' ? 'left-1.5 right-[50%]' : 'left-[50%] right-1.5'}`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                  
                  <button type="button" onClick={() => setFormData({...formData, role: 'user'})} className="relative z-10 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors text-white font-medium">
                    <User size={18} /> User
                  </button>
                  <button type="button" onClick={() => setFormData({...formData, role: 'agent'})} className="relative z-10 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors text-white font-medium">
                    <Briefcase size={18} /> Agent
                  </button>
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField 
                  label="Full Name" name="name" type="text" placeholder="John Doe" 
                  icon={<User size={20} />} required 
                  value={formData.name} onChange={handleChange}
                />
                <InputField 
                  label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" 
                  icon={<Phone size={20} />} required 
                  value={formData.phone} onChange={handleChange}
                />
              </div>
              
              <InputField 
                label="Email Address" name="email" type="email" placeholder="john@example.com" 
                icon={<Mail size={20} />} required 
                value={formData.email} onChange={handleChange}
              />

              <InputField 
                label="Physical Address" name="address" type="text" placeholder="123 Main St, City, Country" 
                icon={<MapPin size={20} />} 
                value={formData.address} onChange={handleChange}
              />

              <InputField 
                label="Password" name="password" type="password" placeholder="••••••••" 
                icon={<Lock size={20} />} required isPassword
                value={formData.password} onChange={handleChange}
                showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)}
              />

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500" required />
                <label htmlFor="terms" className="text-sm text-slate-400 leading-relaxed">
                  I agree to the <a href="#" className="text-emerald-400 hover:underline">Terms of Service</a> and <a href="#" className="text-emerald-400 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {/* Hover Shine Effect */}
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Create Account <ArrowRight size={20} /></>
                )}
              </button>
            </form>

            {/* Footer Link */}
            <p className="text-center text-slate-400 mt-8">
              Already have an account?{' '}
              <Link to="/signin" className="text-emerald-400 font-medium hover:underline">
                Sign in
              </Link>
            </p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
