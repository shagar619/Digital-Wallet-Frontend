/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useGetAllWalletsQuery, useUpdateWalletStatusMutation } from "@/redux/api/adminApi";
import { Loader2, Lock, MoreHorizontal, Search, Unlock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
     Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
     DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logo from "./../../../assets/digi-wallet.png";





const AllWallet = () => {

     const [searchTerm, setSearchTerm] = useState("");
     const { data, isLoading } = useGetAllWalletsQuery({ searchTerm });
     const [updateStatus] = useUpdateWalletStatusMutation();

     const handleFreezeToggle = async (id: string, currentStatus: string) => {
     const newStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";
     try {
          await updateStatus({ id, status: newStatus }).unwrap();
          toast.success(`Wallet ${newStatus === "ACTIVE" ? "UNBLOCKED" : "BLOCKED"} successfully`);
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     } catch (err: any) {
          toast.error("Failed to update wallet status");
     }
     };


     return (
     <div className="space-y-6 p-2">
     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
     <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
               <img src={logo} alt="" className="w-10 h-10 rounded-full" />
               Wallet Management
          </h2>
          <p className="text-slate-400 text-sm">Monitor user balances and freeze suspicious accounts.</p>
     </div>
     <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input 
               placeholder="Search by user name or phone..." 
               className="pl-9 bg-slate-900 border-slate-800 text-white placeholder:text-slate-600"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
          />
     </div>
     </div>

     <div className="rounded-t-xs bg-slate-900/50 overflow-hidden">
     {isLoading ? (
     <div className="h-64 flex items-center justify-center">
          <Loader2 className="animate-spin text-emerald-500" />
          </div>
          ) : (
          <Table>
          <TableHeader className="bg-slate-950">
          <TableRow className="hover:bg-slate-950 border-slate-800 bg-muted/50">
               <TableHead className="text-slate-400">Account Holder</TableHead>
               <TableHead className="text-slate-400">Role</TableHead>
               <TableHead className="text-slate-400">Current Balance</TableHead>
               <TableHead className="text-slate-400">Status</TableHead>
               <TableHead className="text-right text-slate-400">Actions</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
          {data?.data?.map((wallet: any) => (
               <TableRow key={wallet._id} className="hover:bg-slate-800/30 border-slate-800 transition-colors">
               <TableCell>
                    <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-700">
                    <AvatarImage src={wallet.user?.profilePhoto} />
                    <AvatarFallback className="bg-slate-800 text-slate-300">
                         {wallet.user?.name?.charAt(0)}
                    </AvatarFallback>
                    </Avatar>
               <div>
                    <p className="text-white font-medium text-sm">{wallet.user?.name}</p>
                    <p className="text-slate-500 text-xs">{wallet.user?.phone || wallet.user?.email}</p>
               </div>
               </div>
               </TableCell>
               <TableCell>
                    <Badge variant="outline" className="border-slate-700 text-slate-400 text-[10px] uppercase">
                    {wallet.user?.role}
                    </Badge>
               </TableCell>
               <TableCell className="text-emerald-400 font-bold font-mono">
                    ${wallet.balance.toLocaleString()}
               </TableCell>
               <TableCell>
               <Badge variant={wallet.status === "ACTIVE" ? "default" : "destructive"} className={
                    wallet.status === "ACTIVE" 
                    ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" 
                    : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
               }>
                    {wallet.status}
               </Badge>
               </TableCell>
               <TableCell className="text-right">
               <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                         <MoreHorizontal size={16} />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800 text-slate-200">
                    <DropdownMenuItem 
                         onClick={() => handleFreezeToggle(wallet._id, wallet.status)}
                         className="cursor-pointer focus:bg-slate-800 focus:text-white"
                    >
                         {wallet.status === "ACTIVE" ? (
                         <><Lock size={14} className="mr-2 text-red-500" /> Block Account</>
                         ) : (
                         <><Unlock size={14} className="mr-2 text-emerald-500" /> Activate Account</>
                         )}
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
               </TableCell>
               </TableRow>
          ))}
          </TableBody>
          </Table>
     )}
     </div>
     </div>
);
};

export default AllWallet;