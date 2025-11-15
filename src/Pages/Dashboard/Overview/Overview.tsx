import QuickActionUi from "./QuickActionUi";
import WalletBalanceUi from "./WalletBalanceUi";
import TotalUserAgent from "./TotalUserAgent";
import { getSidebarItems } from "@/utils/getSidebarItems";
import type { TRole } from "@/types/auth.type";
import RecentActivitiesUi from "./RecentActivitiesUi";
import { useGetMyProfileQuery, useGetYourTransQuery, useGetYourWalletQuery } from "@/redux/features/user/user.api";
import { useGetCommissionQuery } from "@/redux/features/agent/agent.api";
import { useGetAllAgentQuery, useGetAllCommissionQuery, useGetAllTransQuery, useGetAllUserQuery, useGetCapitalWalletQuery } from "@/redux/features/admin/admin.api";

const Overview = () => {

  const { data: userData } = useGetMyProfileQuery(undefined);
  
  const { data: agentCommissionData } = useGetCommissionQuery(undefined);

  const { data: walletData, isLoading: isWalletLoading } = useGetYourWalletQuery(undefined);

  const limit = 3;
  const page = 1;

  const { data: transData, isLoading: isTransLoading } = useGetYourTransQuery({
    page,
    limit,
  });

  const role = userData?.data?.role;
  const sidebarItems = getSidebarItems(role as TRole);

  const quickActions = sidebarItems
    .flatMap((group) => group.items)
    .filter((item) => item.title !== "Dashboard");

  // Admin Data Fetching
  const { data: allUsers } = useGetAllUserQuery(undefined);
  const { data: allAgents } = useGetAllAgentQuery(undefined);
  const { data: allTrans } = useGetAllTransQuery({ page: 1, limit: 4 });
  const { data: allCommission } = useGetAllCommissionQuery(undefined);
  const { data: capitalWallet } = useGetCapitalWalletQuery(undefined);

  // console.log(allAgents, allUsers, allTrans, allCommission, capitalWallet)

  // console.log("allTrans", allTrans?.data.meta.total);
  // console.log("agentCommissionData", agentCommissionData?.data);
  // console.log("capitalWallet", capitalWallet?.data.data[0].balance);

  return (
    <div className="space-y-6">
      {/* Wallet Balance Section */}
      <WalletBalanceUi
        balance={
          walletData?.data?.data[0]?.balance ||
          capitalWallet?.data.data[0].balance
        }
        loading={isWalletLoading}
        role={role}
      />

      {/* Quick Actions Section */}
      <QuickActionUi actions={quickActions} />

      {/* Recent Transactions Section */}
      <RecentActivitiesUi
        activities={
          transData?.data?.data ||
          allTrans?.data?.data ||
          agentCommissionData?.data.data ||
          []
        }
        loading={isTransLoading}
        role={role}
      />

      {/* Admin Overview Section */}
      {role === "ADMIN" && (
        <TotalUserAgent
          users={allUsers?.data || []}
          agents={allAgents?.data || []}
          transactions={allTrans?.data.meta.total || []}
          commissions={allCommission?.data || []}
          data={undefined}
        />
      )}
    </div>
  );
};

export default Overview;
