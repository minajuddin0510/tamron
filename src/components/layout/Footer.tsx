import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Tamron Marketing Solutions"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's leading hotel marketing & promotion company. Helping hotels increase visibility, footfall, and revenue through 360° digital and on-ground strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/blogs" className="text-primary-foreground/80 hover:text-secondary transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Hotel Marketing</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Branding & Design</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Corporate Client Acquisition</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privilege Card Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <a href="tel:+919870718388" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91-98707 18388
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:Tamronmarketingsolutions1111@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors break-all text-sm">
                  Tamronmarketingsolutions1111@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Raj Nagar Extension, Part-2, Sector 8, Dwarka, Delhi, 110077
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Tamron Marketing Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
