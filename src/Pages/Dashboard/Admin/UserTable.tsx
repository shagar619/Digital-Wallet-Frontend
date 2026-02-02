/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { 
     Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
     DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
     MoreHorizontal, Shield, ShieldAlert, CheckCircle2, 
     XCircle, Loader2, Search, ChevronLeft, ChevronRight 
} from "lucide-react";
import type { IUser } from "@/types/user.type";
import { toast } from "sonner";
import { useUpdateUserStatusMutation } from "@/redux/api/adminApi";



interface IMeta {
     page: number;
     limit: number;
     total: number;
     totalPage: number;
}

interface UserTableProps {
     data: IUser[] | undefined;
     meta: IMeta | undefined;
     isLoading: boolean;
     title: string;
     onSearch: (term: string) => void;
     onPageChange: (page: number) => void;
}



export const UserTable = ({ 
     data, meta, isLoading, title, onSearch, onPageChange 
}: UserTableProps) => {

     const [updateUser] = useUpdateUserStatusMutation();
     const [searchTerm, setSearchTerm] = useState("");

     // Debounce search input locally
     useEffect(() => {
     const delayDebounceFn = setTimeout(() => {
          onSearch(searchTerm);
     }, 500); // Wait 500ms after user stops typing

     return () => clearTimeout(delayDebounceFn);
     }, [searchTerm, onSearch]);

     const handleStatusChange = async (userId: string, currentStatus: string) => {
     const newStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";
     try {
          await updateUser({ id: userId, data: { IsActive: newStatus } }).unwrap();
          toast.success(`User ${newStatus === "ACTIVE" ? "Unblocked" : "Blocked"} successfully`);
     } catch (err: any) {
          toast.error(err?.data?.message || "Failed to update status");
     }
     };

     const handleVerificationChange = async (userId: string, currentStatus: boolean) => {
     try {
          await updateUser({ id: userId, data: { IsVerified: !currentStatus } }).unwrap();
          toast.success(`User ${!currentStatus ? "Verified" : "Unverified"} successfully`);
     } catch (err: any) {
          toast.error(err?.data?.message || "Failed to update verification");
     }
     };



     return (
     <div className="space-y-4">
     {/* HEADER & SEARCH */}
     <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
     <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground text-sm">
          Manage access and verification.
          </p>
     </div>
     <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
          placeholder="Search by name, email..." 
          className="pl-9 bg-card"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
     </div>
     </div>

     {/* TABLE */}
     <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
          {isLoading ? (
     <div className="h-64 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
     </div>
     ) : (
          <Table>
          <TableHeader>
          <TableRow className="bg-muted/50">
               <TableHead>User</TableHead>
               <TableHead>Role</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Verified</TableHead>
               <TableHead className="text-right">Actions</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
               {data?.map((user) => (
               <TableRow key={user._id}>
          <TableCell>
          <div className="flex items-center gap-3">
               <Avatar className="h-9 w-9 border border-border/50">
               <AvatarImage src={user.profilePhoto} />
               <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-xs">
                    {user.name.charAt(0).toUpperCase()}
               </AvatarFallback>
               </Avatar>
          <div className="flex flex-col">
               <span className="font-medium text-sm">{user.name}</span>
               <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
          </div>
          </TableCell>
          <TableCell>
               <Badge variant="outline" className="text-[10px] uppercase">{user.role}</Badge>
          </TableCell>
          <TableCell>
               <Badge variant={user.IsActive === "ACTIVE" ? "secondary" : "destructive"} className="text-[10px]">
                    {user.IsActive}
               </Badge>
          </TableCell>
          <TableCell>
               {user.IsVerified ? (
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    ) : (
                    <XCircle className="h-4 w-4 text-muted-foreground" />
               )}
          </TableCell>
               <TableCell className="text-right">
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleStatusChange(user._id, user.IsActive)}>
                         {user.IsActive === "ACTIVE" ? <ShieldAlert className="mr-2 h-4 w-4 text-red-500" /> : <Shield className="mr-2 h-4 w-4 text-green-500" />}
                         {user.IsActive === "ACTIVE" ? "Block" : "Unblock"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleVerificationChange(user._id, user.IsVerified)}>
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Toggle Verify
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
               </TableCell>
               </TableRow>
          ))}
          {data?.length === 0 && (
               <TableRow>
               <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No results found.
               </TableCell>
               </TableRow>
          )}
          </TableBody>
          </Table>
          )}
          </div>

     {/* PAGINATION FOOTER */}
     {meta && meta.totalPage > 1 && (
     <div className="flex items-center justify-between px-2">
     <div className="text-sm text-muted-foreground">
          Page {meta.page} of {meta.totalPage}
          </div>
          <div className="flex gap-2">
          <Button 
               variant="outline" 
               size="sm" 
               onClick={() => onPageChange(meta.page - 1)}
               disabled={meta.page <= 1}
          >
          <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button 
               variant="outline" 
               size="sm" 
               onClick={() => onPageChange(meta.page + 1)}
               disabled={meta.page >= meta.totalPage}
          >
               Next <ChevronRight className="h-4 w-4" />
          </Button>
          </div>
     </div>
     )}
     </div>
);
};