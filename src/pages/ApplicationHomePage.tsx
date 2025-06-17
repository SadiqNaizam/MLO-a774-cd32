import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Bell, Settings, Users, BarChart3, DollarSign, ShoppingCart } from 'lucide-react';

const ApplicationHomePage: React.FC = () => {
  const navigate = useNavigate();
  console.log('ApplicationHomePage loaded');

  const dashboardCards = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: <DollarSign className="h-5 w-5 text-muted-foreground" /> },
    { title: "Subscriptions", value: "+2350", change: "+180.1% from last month", icon: <Users className="h-5 w-5 text-muted-foreground" /> },
    { title: "Sales", value: "+12,234", change: "+19% from last month", icon: <ShoppingCart className="h-5 w-5 text-muted-foreground" /> },
    { title: "Active Now", value: "+573", change: "+201 since last hour", icon: <BarChart3 className="h-5 w-5 text-muted-foreground" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-muted/5">
      <NavigationMenu />
      <div className="flex flex-1">
        <Sidebar title="Main Menu" className="fixed top-16 h-[calc(100vh-4rem)] z-30 bg-background">
          <nav className="flex flex-col gap-1 p-2">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" /> Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" /> Orders
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" /> Customers
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </Button>
          </nav>
        </Sidebar>

        <main className="flex-1 flex flex-col gap-6 p-4 pt-20 md:pt-8 md:ml-64 sm:p-6">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, User! Here's an overview of your application.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="https://source.unsplash.com/random/100x100/?portrait" alt="User Avatar" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => { navigate('/login'); toast.info("Logged out successfully."); }}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardCards.map(card => (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  {card.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">{card.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>An overview of recent events in your application.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No recent activity to display. Check back later!
              </p>
              {/* Placeholder for a list or table of recent activities */}
            </CardContent>
          </Card>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationHomePage;