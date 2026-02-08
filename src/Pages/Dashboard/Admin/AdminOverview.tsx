import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSystemStatsQuery } from "@/redux/api/adminApi";
import { Activity, ShieldCheck, UserCheck, Users } from "lucide-react";
import logo from "./../../../assets/digi-wallet.png";




const AdminOverview = () => {

     const { data, isLoading } = useGetSystemStatsQuery(undefined, {
     pollingInterval: 30000, // Auto-refresh every 30s
     });

     const stats = data?.data;
     const recentTrans = stats?.recentTransactions || [];


     return (
     <div className="space-y-8 p-2 pb-16">

     {/* 1. HEADER */}
     <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <ShieldCheck className="text-emerald-500" size={32} /> System Administrator
          </h1>
          <p className="text-slate-400">
          Real-time monitoring of <span className="text-emerald-400 font-bold">Gigi Wallet</span> infrastructure.
          </p>
     </div>

     {/* 2. KEY METRICS */}
     <div className="grid md:grid-cols-3 gap-6">

     {/* Total Liquidity */}
     <div className="md:col-span-3 lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-8 relative overflow-hidden group">
     <div className="absolute top-0 right-0 p-24 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
     <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
          <div >
               {/* <Wallet size={24} /> */}
               <img src={logo} alt="" className="w-12 h-12 rounded-full" />
          </div>
               <span className="text-slate-400 font-medium uppercase text-xs tracking-wider">Total System Liquidity</span>
          </div>
          {isLoading ? (
               <Skeleton className="h-12 w-40 bg-slate-800" />
          ) : (
               <h2 className="text-4xl font-bold text-white">
                    ${stats?.totalMoney?.toLocaleString()}
               </h2>
          )}
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
               <Activity size={14} className="animate-pulse" /> Live Balance
          </div>
     </div>
     </div>

     {/* User Stats */}
     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
          <div className="flex justify-between items-start">
          <div>
               <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Total Users</p>
               <h3 className="text-3xl font-bold text-white mt-2">{stats?.totalUsers || 0}</h3>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
               <Users size={24} />
          </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-[70%]" />
          </div>
     </div>

     {/* Agent Stats */}
     <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors">
     <div className="flex justify-between items-start">
     <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Verified Agents</p>
          <h3 className="text-3xl font-bold text-white mt-2">{stats?.totalAgents || 0}</h3>
     </div>
     <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
          <UserCheck size={24} />
     </div>
     </div>
     <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
     <div className="h-full bg-purple-500 w-[30%]" />
     </div>
     </div>
     </div>

     {/* 3. LIVE TRANSACTION FEED */}
     <div className="bg-slate-900/50 rounded-sm overflow-hidden">
     <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Global Transaction Feed</h3>
          <Badge variant="outline" className="text-xs border-slate-700 text-slate-400">Last 10 Activities</Badge>
     </div>

     <table className="w-full text-left text-sm">
     <thead className="bg-slate-950/50 text-slate-400 uppercase text-xs font-bold">
          <tr>
               <th className="px-6 py-4">Type</th>
               <th className="px-6 py-4">Initiator</th>
               <th className="px-6 py-4">Amount</th>
               <th className="px-6 py-4">Status</th>
               <th className="px-6 py-4 text-right">Time</th>
          </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
          {recentTrans.map((t) => (
          <tr key={t.transactionId} className="hover:bg-slate-800/30 transition-colors">
               <td className="px-6 py-4">
               <span className={`inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-bold uppercase ${
                    t.type === 'SEND_MONEY' ? 'bg-blue-500/10 text-blue-400' : 
                    t.type === 'CASH_IN' ? 'bg-emerald-500/10 text-emerald-400' :
                    'bg-orange-500/10 text-orange-400'
               }`}>
                    {t.type.replace(/_/g, ' ')}
               </span>
               </td>
               <td className="px-6 py-4 text-slate-300 font-medium">
               {t.senderId?.name || "System"} 
               <span className="block text-xs text-slate-500 font-normal">{t.senderId?.email}</span>
               </td>
               <td className="px-6 py-4 text-white font-bold">
               $ {t.amount.toLocaleString()}
               </td>
               <td className="px-6 py-4">
               <Badge variant="outline" className="border-green-900 bg-green-900/20 text-green-400 text-[10px]">
                    {t.status}
               </Badge>
               </td>
               <td className="px-6 py-4 text-right text-slate-500 text-xs font-mono">
               {new Date(t.createdAt).toLocaleTimeString()}
               </td>
          </tr>
          ))}
          </tbody>
     </table>
     </div>

     </div>
);
};

export default AdminOverview;