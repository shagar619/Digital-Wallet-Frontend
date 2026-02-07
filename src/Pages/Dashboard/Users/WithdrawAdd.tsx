/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWithdrawMutation } from "@/redux/api/transactionApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { motion } from "framer-motion";
import { ArrowDownLeft, Banknote, Loader2, Store } from "lucide-react";




const withdrawSchema = z.object({
     agentPhone: z.string().regex(/^(?:\+8801\d{9}|01\d{9})$/, "Invalid Agent Phone"),
     amount: z.number().min(50, "Min withdraw is 50").max(25000, "Max is 25,000"),
});

type WithdrawFormValues = z.infer<typeof withdrawSchema>;



const WithdrawAdd = () => {

     const [withdraw, { isLoading }] = useWithdrawMutation();
     const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<WithdrawFormValues>({
     resolver: zodResolver(withdrawSchema)
     });

     const amount = watch("amount") || 0;
     const fee = amount * 0.015; // 1.5% Fee Calculation for display

     const onSubmit = async (data: WithdrawFormValues) => {
     try {
          await withdraw(data).unwrap();
          toast.success(`Withdrawal request of ${data.amount} successful`);
          reset();
     } catch (err: any) {
          toast.error(err.data?.message || "Withdrawal failed");
     }
     };



     return (
     <div className="max-w-xl mx-auto py-10">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
     >
     <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full -ml-20 -mt-20 pointer-events-none" />

     <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <ArrowDownLeft className="text-rose-500" /> Withdraw Cash
          </h2>
          <p className="text-slate-400 mt-2">
               Cash out your balance at any authorized Agent point.
          </p>
     </div>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Agent Number</label>
     <div className="relative">
          <Store className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               {...register("agentPhone")}
               placeholder="01XXXXXXXXX" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-rose-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.agentPhone && <p className="text-red-400 text-xs">{errors.agentPhone.message}</p>}
     </div>

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Amount</label>
     <div className="relative">
          <Banknote className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               type="number"
               {...register("amount", { valueAsNumber: true })}
               placeholder="0.00" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-rose-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.amount && <p className="text-red-400 text-xs">{errors.amount.message}</p>}
     </div>

          {/* Fee Calculation Card */}
          {amount > 0 && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex justify-between text-sm">
               <span className="text-slate-400">Withdraw Amount:</span>
               <span className="text-white font-bold">{amount} BDT</span>
          </div>
          <div className="flex justify-between text-sm">
               <span className="text-slate-400">Fee (1.5%):</span>
               <span className="text-rose-400 font-bold">+{fee.toFixed(2)} BDT</span>
          </div>
          <div className="border-t border-slate-800 pt-2 flex justify-between text-sm">
               <span className="text-slate-300">Total Deduction:</span>
               <span className="text-white font-bold">{(amount + fee).toFixed(2)} BDT</span>
          </div>
          </div>
          )}

          <button 
               type="submit" 
               disabled={isLoading}
               className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
               {isLoading ? <Loader2 className="animate-spin" /> : "Confirm Withdraw"}
          </button>

     </form>
     </motion.div>
     </div>
);
};

export default WithdrawAdd;