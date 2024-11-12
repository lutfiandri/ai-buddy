import {
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/template/app-sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const sidebar = useSidebar();

  const sidebarButtonText = useMemo(
    () => (sidebar.open ? 'Close sidebar' : 'Open sidebar'),
    [sidebar.open]
  );

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="border-b border-sidebar-border sticky top-0 bg-primary-foreground z-20 p-2">
          <Tooltip>
            <TooltipTrigger>
              <SidebarTrigger className="w-10 h-10" />
            </TooltipTrigger>
            <TooltipContent side="bottom">{sidebarButtonText}</TooltipContent>
          </Tooltip>
        </header>
        <main className="w-full min-h-screen flex flex-col">
          {/* <header className="flex justify-between">
          <SidebarTrigger />
          <Button>ingfo</Button>
          </header> */}
          {children}
        </main>
      </SidebarInset>
    </>
  );
}
