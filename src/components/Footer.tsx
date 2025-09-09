import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">Elite Properties</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner in finding the perfect property. Excellence in real estate since 2010.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Home
              </Link>
              <Link to="/properties" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Properties
              </Link>
              <Link to="/agents" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Agents
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-luxury-gold transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Property Sales</p>
              <p className="text-gray-300">Property Rental</p>
              <p className="text-gray-300">Investment Consulting</p>
              <p className="text-gray-300">Property Management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300 text-sm">123 Real Estate Ave, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-gray-300 text-sm">info@eliteproperties.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Elite Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;