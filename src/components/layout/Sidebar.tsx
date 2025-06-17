import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils'; // For conditional class names

interface SidebarProps {
  className?: string;
  children?: React.ReactNode; // To allow custom content
  title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className, children, title = "Navigation" }) => {
  console.log("Rendering Sidebar with title:", title);

  return (
    <aside
      className={cn(
        "h-screen w-64 border-r bg-background p-4 space-y-4 hidden md:block fixed top-16 left-0 pt-4", // top-16 assuming nav height
        className
      )}
    >
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      <Separator />
      <ScrollArea className="h-[calc(100vh-10rem)]"> {/* Adjust height as needed */}
        {children ? (
          <div className="p-2">{children}</div>
        ) : (
          // Placeholder sidebar content
          <div className="p-2 space-y-2">
            <p className="text-sm text-muted-foreground">Dashboard</p>
            <p className="text-sm text-muted-foreground">Analytics</p>
            <p className="text-sm text-muted-foreground">Settings</p>
          </div>
        )}
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;