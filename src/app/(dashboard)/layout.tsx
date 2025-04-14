import { DashboardSidebar } from "@/components/common/sidebar/DashboardSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-greyMain text-primary content-center">
      <DashboardSidebar>{children}</DashboardSidebar>
    </section>
  );
}
