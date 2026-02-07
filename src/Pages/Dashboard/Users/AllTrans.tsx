import { useGetMyTransactionsQuery } from "@/redux/api/transactionApi";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { 
     Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";



const AllTrans = () => {

     const [filterType, setFilterType] = useState<string | undefined>(undefined);
     const { data, isLoading } = useGetMyTransactionsQuery({ 
     limit: 50, 
     type: filterType 
     });

     const transactions = data?.data || [];

     const filters = [
     { label: "All", value: undefined },
     { label: "Sent", value: "SEND_MONEY" },
     { label: "Received", value: "CASH_IN" },
     { label: "Withdrawn", value: "WITHDRAW" },
     ];


     return (
     <div className="space-y-6 p-2">
     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>

     {/* Filters */}
     <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
          {filters.map(f => (
          <button
               key={f.label}
               onClick={() => setFilterType(f.value)}
               className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
               filterType === f.value 
               ? "bg-slate-800 text-white shadow-sm"
               : "text-slate-400 hover:text-white"
          }`}
          >
               {f.label}
          </button>
          ))}
     </div>
     </div>

     <div className="rounded-xl bg-slate-900/50 overflow-hidden">
     {isLoading ? (
     <div className="h-64 flex items-center justify-center">
          <Loader2 className="animate-spin text-emerald-500" />
     </div>
     ) : (
     <Table>
          <TableHeader className="bg-slate-950">
          <TableRow className="hover:bg-slate-950 border-slate-800">
               <TableHead className="text-slate-400">Transaction ID</TableHead>
               <TableHead className="text-slate-400">Type</TableHead>
               <TableHead className="text-slate-400">Party</TableHead>
               <TableHead className="text-slate-400">Amount</TableHead>
               <TableHead className="text-right text-slate-400">Date</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
               {transactions.length > 0 ? transactions.map((t) => (
               <TableRow key={t.transactionId} className="hover:bg-slate-800/30 border-slate-800 transition-colors">
               <TableCell className="font-mono text-xs text-slate-500">{t.transactionId.slice(0, 8)}...</TableCell>
               <TableCell>
               <Badge variant="outline" className="border-slate-700 text-slate-300 uppercase text-[10px]">
                    {t.type.replace(/_/g, ' ')}
                    </Badge>
               </TableCell>
               <TableCell className="text-slate-300 text-sm">
               {/* Display Sender Name if receiving, Receiver Name if sending */}
               {t.type === 'CASH_IN' ? `From: ${t.senderId?.name || "Agent"}` : `To: ${t.receiverId?.name || "Agent"}`}
               </TableCell>
               <TableCell className={`font-bold ${
                    t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' 
                    ? 'text-white' 
                    : 'text-emerald-400'
               }`}>
                    {t.type === 'SEND_MONEY' || t.type === 'WITHDRAW' ? '-' : '+'}{t.amount}
               </TableCell>
               <TableCell className="text-right text-slate-400 text-xs">
                    {new Date(t.createdAt).toLocaleString()}
               </TableCell>
               </TableRow>
               )) : (
               <TableRow>
               <TableCell colSpan={5} className="h-24 text-center text-slate-500">
                    No records found
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

export default AllTrans;