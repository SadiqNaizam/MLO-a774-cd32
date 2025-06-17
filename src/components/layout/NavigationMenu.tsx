import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // For mobile menu
import { Menu, X, Home, ShoppingBag, Info, Mail } from 'lucide-react'; // Example icons

interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: <Home className="h-4 w-4 mr-2 sm:hidden" /> },
  { href: '/shop', label: 'Shop', icon: <ShoppingBag className="h-4 w-4 mr-2 sm:hidden" /> },
  { href: '/about', label: 'About', icon: <Info className="h-4 w-4 mr-2 sm:hidden" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4 mr-2 sm:hidden" /> },
];

const NavigationMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("Rendering NavigationMenu, mobile menu open:", isMobileMenuOpen);

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary">
              MyAppLogo
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:space-x-4">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {/* Right Aligned Items (e.g., User Avatar/Login) - Placeholder */}
          <div className="hidden sm:flex items-center">
            <Button variant="outline">Login</Button>
            {/* Or Avatar/DropdownMenu if user is logged in */}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-4">
                <div className="flex justify-between items-center mb-6">
                   <Link to="/" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                     MyAppLogo
                   </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="w-full justify-start text-base"
                      asChild
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                  <hr className="my-4" />
                  <Button variant="outline" className="w-full justify-start text-base" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;