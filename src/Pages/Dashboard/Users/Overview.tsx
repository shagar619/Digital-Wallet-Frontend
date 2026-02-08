import { Skeleton } from "@/components/ui/skeleton";
import { useGetMyTransactionsQuery } from "@/redux/api/transactionApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { useGetMyBalanceQuery } from "@/redux/api/walletApi";
import { ArrowDownLeft, ArrowUpRight, Clock, CreditCard, Send, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/digi-wallet.png";




const Overview = () => {

     const { data: walletData, isLoading: walletLoading } = useGetMyBalanceQuery(undefined);
     const { data: transData, isLoading: transLoading } = useGetMyTransactionsQuery({ limit: 5 });
     const { data: userData } = useGetMyProfileQuery(undefined);

     const wallet = walletData?.data;
     const transactions = transData?.data || [];
     const user = userData?.data;

     // Calculate total spent/received locally for display (optional)
     const totalSent = transactions
     .filter(t => t.senderId._id === user?._id && t.type === 'SEND_MONEY')
     .reduce((acc, curr) => acc + curr.amount, 0);

     return (
     <div className="space-y-8 p-2 pb-16">

     {/* 1. WELCOME SECTION */}
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
     <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
               Dashboard
          </h1>
          <p className="text-slate-400">
               Welcome back, <span className="text-emerald-400 font-semibold">{user?.name}</span>
          </p>
     </div>
     <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full">
     <div className={`w-2 h-2 rounded-full ${wallet?.status === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-xs font-medium text-slate-300">
               System Status: {wallet?.status || "Connecting..."}
          </span>
     </div>
     </div>

      {/* 2. BALANCE & ACTION CARDS */}
     <div className="grid md:grid-cols-3 gap-6">

     {/* Main Balance Card (Glassmorphic Gradient) */}
     <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 p-8 shadow-2xl shadow-emerald-900/20 text-white group">
     <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-110" />

     <div className="relative z-10 flex flex-col justify-between h-full min-h-[180px]">
     <div className="flex justify-between items-start">
     <div>
          <p className="text-emerald-100/80 text-sm font-medium mb-1">Total Balance</p>
               {walletLoading ? (
               <Skeleton className="h-10 w-32 bg-white/20" />
               ) : (
               <h2 className="text-5xl font-bold tracking-tight">
                    ${wallet?.balance?.toLocaleString() || "0.00"}
               </h2>
               )}
     </div>
     <div className=" ">
               {/* <Wallet className="w-6 h-6 text-white" /> */}
               <img src={logo} alt="" className="w-12 h-12 rounded-full" />
     </div>
     </div>

     <div className="flex gap-4 mt-8">
          <Link to="/user/dashboard/wallet/transfer" className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all">
          <Send size={18} /> Send
          </Link>
          <Link to="/user/dashboard/wallet/withdraw" className="flex-1 bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/5 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all">
          <ArrowDownLeft size={18} /> Withdraw
          </Link>
     </div>
     </div>
     </div>

     {/* Quick Stats Grid */}
     <div className="grid grid-rows-2 gap-6">
     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
          <TrendingUp size={24} />
     </div>
     <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Monthly Spent</p>
          <p className="text-2xl font-bold text-white">${totalSent.toLocaleString()}</p>
     </div>
     </div>

     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-center gap-4 hover:border-purple-500/30 transition-colors">
     <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
          <ShieldCheck size={24} />
     </div>
     <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Security Level</p>
          <p className="text-lg font-bold text-white">High (Tier 2)</p>
     </div>
     </div>
     </div>
     </div>

     {/* 3. RECENT TRANSACTIONS TABLE */}
     <div className="bg-slate-900/50 rounded-xl overflow-hidden">
     <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Clock size={18} className="text-slate-400" /> Recent Activity
          </h3>
          <Link to="/user/dashboard/your-trans" className="text-sm text-emerald-400 hover:text-emerald-300 font-medium">View All</Link>
     </div>

     <div className="p-0">
          {transLoading ? (
          <div className="p-6 space-y-4">
          <Skeleton className="h-12 w-full bg-slate-800" />
          <Skeleton className="h-12 w-full bg-slate-800" />
          </div>
          ) : transactions.length > 0 ? (
          <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/50 text-slate-400 uppercase text-xs font-bold">
               <tr>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Date</th>
               </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
               {transactions.map((t) => (
               <tr key={t.transactionId} className="hover:bg-slate-800/30 transition-colors">
               <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                         t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' 
                         ? 'bg-red-500/10 text-red-400' 
                         : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                    {t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
               </div>
                    {t.type.replace(/_/g, ' ')}
                    </td>
                    <td className={`px-6 py-4 font-bold ${
                    t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' ? 'text-white' : 'text-emerald-400'
                    }`}>
                    {t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' ? '-' : '+'}${t.amount}
                    </td>
                    <td className="px-6 py-4">
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-bold border border-emerald-500/20">
                    {t.status}
                    </span>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-400">
                    {new Date(t.createdAt).toLocaleDateString()}
                    </td>
               </tr>
               ))}
          </tbody>
          </table>
          ) : (
     <div className="p-12 text-center text-slate-500">
          <CreditCard className="w-12 h-12 mx-auto mb-3 opacity-20" />
          No recent transactions found.
     </div>
     )}
     </div>
     </div>
     </div>
);
};

export default Overview;