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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
        <header className="border-b border-sidebar-border sticky top-0 bg-primary-foreground z-20 p-2 flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <SidebarTrigger className="w-10 h-10" />
            </TooltipTrigger>
            <TooltipContent side="bottom">{sidebarButtonText}</TooltipContent>
          </Tooltip>
          <Select defaultValue="gpt-4o">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">GPT 4o</SelectItem>
              <SelectItem value="gpt-4o-mini">GPT 4o Mini</SelectItem>
              <SelectItem value="claude-3.5-opus">Claude 3.5 Opus</SelectItem>
              <SelectItem value="claude-3.5-sonnet">
                Claude 3.5 Sonnet
              </SelectItem>
              <SelectItem value="claude-3.5-haiku">Claude 3.5 Haiku</SelectItem>
            </SelectContent>
          </Select>
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
