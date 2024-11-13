import { useMemo } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { AiSelector } from '@/components/template/ai-selector';

export function AppHeader() {
  const sidebar = useSidebar();

  const sidebarButtonText = useMemo(
    () => (sidebar.open ? 'Close sidebar' : 'Open sidebar'),
    [sidebar.open]
  );

  return (
    <header className="border-b border-sidebar-border sticky top-0 bg-primary-foreground z-20 p-2 flex gap-2">
      <Tooltip>
        <TooltipTrigger>
          <SidebarTrigger className="w-10 h-10" />
        </TooltipTrigger>
        <TooltipContent side="bottom">{sidebarButtonText}</TooltipContent>
      </Tooltip>
      <AiSelector></AiSelector>
    </header>
  );
}
