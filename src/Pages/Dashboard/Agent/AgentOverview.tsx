import { Skeleton } from "@/components/ui/skeleton";
import { useGetMyTransactionsQuery } from "@/redux/api/transactionApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { useGetMyBalanceQuery } from "@/redux/api/walletApi";
import { Activity, ArrowDownRight, DollarSign, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";




const AgentOverview = () => {

     const { data: walletData, isLoading: walletLoading } = useGetMyBalanceQuery(undefined);
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const { data: transData, isLoading: transLoading } = useGetMyTransactionsQuery({ limit: 10 });
     const { data: userData } = useGetMyProfileQuery(undefined);

     const wallet = walletData?.data;
     const transactions = transData?.data || [];
     const user = userData?.data;

     // Calculate Agent Stats
     const cashIns = transactions.filter(t => t.type === 'CASH_IN');
     const cashOuts = transactions.filter(t => t.type === 'WITHDRAW'); // Received withdrawals

     // Approximate Commission (1% of withdrawals received)
     const totalCommission = cashOuts.reduce((acc, curr) => acc + (curr.amount * 0.01), 0);


     return (
     <div className="space-y-8 p-2 pb-16">

     {/* 1. WELCOME HEADER */}
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
     <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Agent Console</h1>
          <p className="text-slate-400">
          Operator: <span className="text-blue-400 font-semibold">{user?.name}</span>
          </p>
     </div>
     <div className="px-4 py-2 bg-blue-900/20 border border-blue-800 rounded-full flex items-center gap-2">
          <Activity size={16} className="text-blue-400 animate-pulse" />
          <span className="text-blue-200 text-xs font-bold uppercase tracking-wider">POS Active</span>
     </div>
     </div>

     {/* 2. STATS GRID */}
     <div className="grid md:grid-cols-4 gap-6">

     {/* Main Operating Balance */}
     <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl p-8 text-white shadow-2xl relative overflow-hidden group">
     <div className="absolute right-0 bottom-0 p-24 bg-white/5 rounded-full blur-3xl translate-y-10 translate-x-10" />
          
     <div className="relative z-10">
          <p className="text-blue-100/80 text-sm font-medium mb-1">Operating Balance</p>
          {walletLoading ? (
          <Skeleton className="h-12 w-40 bg-white/20" />
          ) : (
          <h2 className="text-5xl font-bold tracking-tight mb-6">
               ${wallet?.balance?.toLocaleString() || "0.00"}
          </h2>
          )}

     <div className="flex gap-3">
          <Link to="/agent/dashboard/wallet/add" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all">
               <DollarSign size={18} /> Load Balance
          </Link>
     </div>
     </div>
     </div>

     {/* Total Earnings */}
     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
     <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
          <TrendingUp size={24} />
     </div>
     <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Total Earnings</p>
          <p className="text-2xl font-bold text-white">+${totalCommission.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">From Cash Outs</p>
     </div>
     </div>

     {/* Transaction Volume */}
     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
     <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
          <Users size={24} />
     </div>
     <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Customers Served</p>
          <p className="text-2xl font-bold text-white">{cashIns.length + cashOuts.length}</p>
          <p className="text-xs text-slate-500 mt-1">This Month</p>
     </div>
     </div>
     </div>

     {/* 3. RECENT CASH FLOW */}
     <div className="bg-slate-900/50 rounded-sm overflow-hidden">
     <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
          <Link to="/agent/dashboard/my-wallet" className="text-sm text-blue-400 hover:text-blue-300 font-medium">View Full History</Link>
     </div>

     <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/50 text-slate-400 uppercase text-xs font-bold">
          <tr>
               <th className="px-6 py-4">Action</th>
               <th className="px-6 py-4">Customer</th>
               <th className="px-6 py-4">Amount</th>
               <th className="px-6 py-4 text-right">Time</th>
          </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
          {transactions.length > 0 ? transactions.slice(0, 5).map((t) => (
          <tr key={t.transactionId} className="hover:bg-slate-800/30 transition-colors">
               <td className="px-6 py-4">
               <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                    t.type === 'CASH_IN' 
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
               }`}>
               {t.type === 'CASH_IN' ? <ArrowDownRight size={14} /> : <TrendingUp size={14} />}
               {t.type === 'CASH_IN' ? 'GAVE CASH' : 'RECEIVED CASH'}
               </span>
               </td>
               <td className="px-6 py-4 font-medium text-slate-300">
               {t.type === 'CASH_IN' ? t.receiverId?.phone : t.senderId?.phone}
               </td>
               <td className="px-6 py-4 text-white font-bold">
               {t.amount.toLocaleString()} BDT
               </td>
               <td className="px-6 py-4 text-right text-slate-500">
               {new Date(t.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
               </td>
          </tr>
          )) : (
          <tr><td colSpan={4} className="p-8 text-center text-slate-500">No activity today</td></tr>
          )}
     </tbody>
     </table>
     </div>
     </div>
);
};

export default AgentOverview;