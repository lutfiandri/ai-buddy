import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/template/app-sidebar';
import { Button } from '../ui/button';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <header className="flex justify-between">
          <SidebarTrigger />
          <Button>ingfo</Button>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}