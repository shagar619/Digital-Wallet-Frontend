import { useGetMyTransactionsQuery } from "@/redux/api/transactionApi";
import { DollarSign, Loader2 } from "lucide-react";
import { 
     Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";




const AllCommission = () => {

     // Fetch transactions where Agent is involved. 
     // We filter specifically for "WITHDRAW" types as those generate commission.
     const { data, isLoading } = useGetMyTransactionsQuery({ 
     limit: 100, 
     type: "WITHDRAW" 
     });

     const transactions = data?.data || [];


     return (
     <div className="space-y-6 p-2">
     <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <DollarSign className="text-emerald-500" /> Commission History
          </h2>
          <p className="text-slate-400 text-sm">
          You earn <span className="text-emerald-400 font-bold">1%</span> on every customer withdrawal.
          </p>
     </div>

     <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
     {isLoading ? (
     <div className="h-64 flex items-center justify-center">
          <Loader2 className="animate-spin text-blue-500" />
     </div>
     ) : (
          <Table>
          <TableHeader className="bg-slate-950">
          <TableRow className="hover:bg-slate-950 border-slate-800">
               <TableHead className="text-slate-400">Transaction ID</TableHead>
               <TableHead className="text-slate-400">Customer</TableHead>
               <TableHead className="text-slate-400">Withdraw Amount</TableHead>
               <TableHead className="text-slate-400">Commission (1%)</TableHead>
               <TableHead className="text-right text-slate-400">Date</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
          {transactions.length > 0 ? transactions.map((t) => (
               <TableRow key={t.transactionId} className="hover:bg-slate-800/30 border-slate-800 transition-colors">
               <TableCell className="font-mono text-xs text-slate-500">{t.transactionId.slice(0, 8)}...</TableCell>
               <TableCell className="text-slate-300 text-sm font-medium">
                    {t.senderId?.name} <span className="text-slate-500 text-xs">({t.senderId?.phone})</span>
               </TableCell>
               <TableCell className="text-white font-bold">
                    {t.amount.toLocaleString()} BDT
               </TableCell>
               <TableCell>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20">
                      +{(t.amount * 0.01).toFixed(2)} BDT
                    </Badge>
               </TableCell>
               <TableCell className="text-right text-slate-400 text-xs">
                    {new Date(t.createdAt).toLocaleDateString()}
               </TableCell>
               </TableRow>
               )) : (
               <TableRow>
               <TableCell colSpan={5} className="h-32 text-center text-slate-500">
                    No commission history found.
               </TableCell>
               </TableRow>
               )}
          </TableBody>
          </Table>
     )}
     </div>
     </div>
);
};

export default AllCommission;