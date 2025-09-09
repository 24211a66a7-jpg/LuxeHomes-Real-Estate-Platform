import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-navy">Elite Properties</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-navy transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-foreground hover:text-navy transition-colors">
              Properties
            </Link>
            <Link to="/agents" className="text-foreground hover:text-navy transition-colors">
              Agents
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-navy transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-foreground hover:text-navy transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button variant="default" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;