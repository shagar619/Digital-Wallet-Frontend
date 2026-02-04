import { useState } from "react";
import { UserTable } from "./UserTable";
import { useGetAllAgentsQuery } from "@/redux/api/adminApi";




const AllAgents = () => {

     const [page, setPage] = useState(1);
     const [limit] = useState(10); 
     const [searchTerm, setSearchTerm] = useState("");

     const { data, isLoading } = useGetAllAgentsQuery({ 
          page, 
          limit, 
          searchTerm 
     });


     return (
     <div className="p-6 space-y-6">
     <UserTable 
          title="All Agents" 
          data={data?.data} 
          meta={data?.meta}
          isLoading={isLoading} 
          onSearch={(term) => {
               setSearchTerm(term);
               setPage(1);
          }}
          onPageChange={(newPage) => setPage(newPage)}
     />
     </div>
);
};

export default AllAgents;