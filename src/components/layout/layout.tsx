import { SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/template/app-sidebar';
import { AppHeader } from '@/components/template/app-header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <AppHeader></AppHeader>
        <main className="flex-1 w-full flex flex-col">{children}</main>
      </SidebarInset>
    </>
  );
}
