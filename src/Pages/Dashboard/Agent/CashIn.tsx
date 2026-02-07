/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCashInMutation } from "@/redux/api/transactionApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { motion } from "framer-motion";
import { ArrowUpRight, KeyRound, Loader2, Smartphone } from "lucide-react";



const cashInSchema = z.object({
     userPhone: z.string().regex(/^(?:\+8801\d{9}|01\d{9})$/, "Invalid User Phone"),
     amount: z.number().min(10, "Min amount is 10").max(50000, "Max is 50,000"),
     pin: z.string().min(4, "PIN required"), // Simulated PIN
});

type CashInFormValues = z.infer<typeof cashInSchema>;



const CashIn = () => {

     const [cashIn, { isLoading }] = useCashInMutation();
     const { register, handleSubmit, reset, formState: { errors } } = useForm<CashInFormValues>({
     resolver: zodResolver(cashInSchema)
     });

     const onSubmit = async (data: CashInFormValues) => {
     try {
          await cashIn(data).unwrap();
          toast.success(`Successfully added ${data.amount} BDT to ${data.userPhone}`);
          reset();
     } catch (err: any) {
          toast.error(err.data?.message || "Cash In failed");
     }
     };



     return (
     <div className="max-w-xl mx-auto py-10">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
     >
     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />

     <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <ArrowUpRight className="text-blue-500" /> Cash In (Deposit)
          </h2>
          <p className="text-slate-400 mt-2">
          Add digital money to a customer's wallet.
          </p>
     </div>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Customer Phone</label>
     <div className="relative">
          <Smartphone className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               {...register("userPhone")}
               placeholder="01XXXXXXXXX" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.userPhone && <p className="text-red-400 text-xs">{errors.userPhone.message}</p>}
     </div>

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Amount</label>
     <div className="relative">
          <span className="absolute left-4 top-3.5 text-slate-500 font-bold">৳</span>
          <input 
               type="number"
               {...register("amount", { valueAsNumber: true })}
               placeholder="0.00" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.amount && <p className="text-red-400 text-xs">{errors.amount.message}</p>}
     </div>

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Agent PIN</label>
     <div className="relative">
          <KeyRound className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               type="password"
               {...register("pin")}
               placeholder="••••" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.pin && <p className="text-red-400 text-xs">{errors.pin.message}</p>}
     </div>

          <button 
               type="submit" 
               disabled={isLoading}
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
               {isLoading ? <Loader2 className="animate-spin" /> : "Complete Deposit"}
          </button>

     </form>
     </motion.div>
     </div>
);
};

export default CashIn;