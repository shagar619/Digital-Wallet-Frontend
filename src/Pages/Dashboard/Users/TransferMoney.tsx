/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSendMoneyMutation } from "@/redux/api/transactionApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { motion } from "framer-motion";
import { DollarSign, Loader2, Phone, Send, ShieldAlert } from "lucide-react";




// Schema Validation
const sendSchema = z.object({
     receiverPhone: z.string().regex(/^(?:\+8801\d{9}|01\d{9})$/, "Invalid BD Phone Number"),
     amount: z.number().min(10, "Minimum amount is 10 BDT").max(25000, "Daily limit is 25,000"),
});

type SendFormValues = z.infer<typeof sendSchema>;

const TransferMoney = () => {

     const [sendMoney, { isLoading }] = useSendMoneyMutation();
     const { register, handleSubmit, reset, formState: { errors } } = useForm<SendFormValues>({
     resolver: zodResolver(sendSchema)
     });

     const onSubmit = async (data: SendFormValues) => {
     try {
          await sendMoney(data).unwrap();
          toast.success(`Successfully sent ${data.amount} to ${data.receiverPhone}`);
          reset();
     } catch (err: any) {
          toast.error(err.data?.message || "Transaction failed");
     }
     };


     return (
     <div className="max-w-xl mx-auto py-16">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-8 shadow-2xl relative overflow-hidden"
     >
     {/* Decorative Glow */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />

     <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Send className="text-emerald-500" /> Send Money
          </h2>
          <p className="text-slate-400 mt-2">
               Transfer funds instantly to another Gigi Wallet user.
          </p>
     </div>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Receiver Phone</label>
     <div className="relative">
          <Phone className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               {...register("receiverPhone")}
               placeholder="01XXXXXXXXX" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.receiverPhone && <p className="text-red-400 text-xs">{errors.receiverPhone.message}</p>}
     </div>

     <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Amount (BDT)</label>
     <div className="relative">
          <DollarSign className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
          <input 
               type="number"
               {...register("amount", { valueAsNumber: true })}
               placeholder="0.00" 
               className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
          />
     </div>
          {errors.amount && <p className="text-red-400 text-xs">{errors.amount.message}</p>}
     </div>

     <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3">
          <ShieldAlert className="text-blue-400 shrink-0" size={20} />
          <p className="text-xs text-slate-400 leading-relaxed">
               Please verify the receiver's number carefully. Transactions cannot be reversed once completed. 
          <span className="block mt-1 text-emerald-400 font-bold">Fee: 5 BDT per transaction</span>
          </p>
          </div>

          <button 
               type="submit" 
               disabled={isLoading}
               className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg    shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
          {isLoading ? <Loader2 className="animate-spin" /> : <>Confirm Transfer <Send size={18} /></>}
          </button>

     </form>
     </motion.div>
     </div>
);
};

export default TransferMoney;