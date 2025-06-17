import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom
import { Github, Linkedin, Twitter } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  console.log("Rendering Footer for year:", currentYear);

  return (
    <footer className="bg-muted border-t text-muted-foreground mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Column 1: About/Brand */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">MyAppLogo</h3>
            <p>Your trusted application for amazing things.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li><Link to="/about" className="hover:text-primary hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary hover:underline">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-primary hover:underline">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media/Contact */}
          <div>
             <h3 className="font-semibold text-foreground uppercase tracking-wider mb-3">Follow Us</h3>
             <div className="flex space-x-4">
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Twitter">
                 <Twitter className="h-5 w-5" />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="LinkedIn">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="GitHub">
                 <Github className="h-5 w-5" />
               </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 text-center text-xs">
          <p>&copy; {currentYear} MyAppLogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;