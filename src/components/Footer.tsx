import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      "Fishnet Machinery",
      "Spare Parts",
      "Ready Fishnets",
      "Custom Solutions",
    ],
    Company: ["About Us", "Careers", "Blog", "Case Studies"],
    Support: ["Contact Us", "Export Inquiry", "Technical Support", "FAQs"],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              AP <span className="text-secondary-light">Engineers</span>
            </h3>
            <p className="text-white/80 mb-4">
              Leading manufacturer and global exporter of fishnet machinery, spare parts, and custom-built solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary-light" />
                <span className="text-sm">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary-light" />
                <span className="text-sm">info@avpengineers.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-lg mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} AP Engineers. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-smooth"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-smooth"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-smooth"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
