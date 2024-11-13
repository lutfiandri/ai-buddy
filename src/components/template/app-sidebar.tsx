import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { MessageCirclePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Menu items.
const items = [
  {
    title: 'Today',
    items: [
      {
        title: 'Installation',
        url: '#',
      },
      {
        title: 'Project Structure',
        url: '#',
      },
    ],
  },
  {
    title: 'Yesterday',
    items: [
      {
        title: 'Routing',
        url: '#',
      },
      {
        title: 'Data Fetching',
        url: '#',
        isActive: true,
      },
      {
        title: 'Rendering',
        url: '#',
      },
      {
        title: 'Caching',
        url: '#',
      },
      {
        title: 'Styling',
        url: '#',
      },
      {
        title: 'Optimizing',
        url: '#',
      },
      {
        title: 'Configuring',
        url: '#',
      },
      {
        title: 'Testing',
        url: '#',
      },
      {
        title: 'Authentication',
        url: '#',
      },
      {
        title: 'Deploying',
        url: '#',
      },
      {
        title: 'Upgrading',
        url: '#',
      },
      {
        title: 'Examples',
        url: '#',
      },
    ],
  },
  {
    title: 'Past 7 Days',
    items: [
      {
        title: 'Components',
        url: '#',
      },
      {
        title: 'File Conventions',
        url: '#',
      },
      {
        title: 'Functions',
        url: '#',
      },
      {
        title: 'next.config.js Options',
        url: '#',
      },
      {
        title: 'CLI',
        url: '#',
      },
      {
        title: 'Edge Runtime',
        url: '#',
      },
    ],
  },
  {
    title: 'Past 30 Days',
    items: [
      {
        title: 'Accessibility',
        url: '#',
      },
      {
        title: 'Fast Refresh',
        url: '#',
      },
      {
        title: 'Next.js Compiler',
        url: '#',
      },
      {
        title: 'Supported Browsers',
        url: '#',
      },
      {
        title: 'Turbopack',
        url: '#',
      },
    ],
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarHeader>
        <Button variant="default" onClick={() => navigate('/')}>
          New Chat <MessageCirclePlus />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        {items.map((item, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel className="sticky top-0 z-10 bg-sidebar">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {item.items.map((item2) => (
                  <SidebarMenuItem key={item2.title}>
                    <SidebarMenuButton asChild size="sm">
                      <a href={item2.url}>
                        <span>{item2.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
