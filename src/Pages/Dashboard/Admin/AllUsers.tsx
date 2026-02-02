import { useState } from "react";


const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // You can make this dynamic if you want
  const [searchTerm, setSearchTerm] = useState("");

  // Pass dynamic params to the query hook
  const { data, isLoading } = useGetAllUsersQuery({ 
    page, 
    limit, 
    searchTerm 
  });

  return (
    <div className="p-6 space-y-6">
      <UserTable 
        title="All Users" 
        data={data?.data} 
        meta={data?.meta} // Pass meta for pagination logic
        isLoading={isLoading} 
        onSearch={(term) => {
          setSearchTerm(term);
          setPage(1); // Reset to page 1 on new search
        }}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default AllUsers;