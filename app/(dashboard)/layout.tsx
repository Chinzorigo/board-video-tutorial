import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboarLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">sdf</div>
        <OrgSidebar />
        <div className="h-full flex-1">
          {/* add Navbar */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboarLayout;
