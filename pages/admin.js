import { useAccount } from 'wagmi';

const adminWallet = '0x506d1eE159eCF4d060DCAf63300de32DED7C4073';

export default function AdminDashboard() {
  const { address } = useAccount();

  if (address !== adminWallet) {
    return <p>Access Denied: Admin only.</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Here you'll set up the daily game.</p>
    </div>
  );
}
