import Sidebar from '../../components/sidebar/sidebar';

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar currentImage="/images/dashboard-banner.png" />
      <main className="flex-1 p-6">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
