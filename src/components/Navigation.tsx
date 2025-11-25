// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "./ui/button";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Machinery", href: "#machinery" },
//     { name: "Spare Parts", href: "#spare-parts" },
//     { name: "Fishnets", href: "#fishnets" },
//     { name: "Custom Solutions", href: "#custom" },
//     { name: "Contact", href: "#contact" },
//      { name: "Product Gallery", href: "#product-gallery" }
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
//         isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="text-2xl font-heading font-bold text-primary"
//           >
//             AVP <span className="text-secondary">Engineers</span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToSection(link.href);
//                 }}
//                 className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <Button
//               onClick={() => scrollToSection("#contact")}
//               variant="default"
//               className="bg-accent hover:bg-accent/90"
//             >
//               Get Quote
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6 text-foreground" />
//             ) : (
//               <Menu className="h-6 w-6 text-foreground" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background/98 backdrop-blur-md">
//             <div className="flex flex-col space-y-3">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.href);
//                   }}
//                   className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <Button
//                 onClick={() => scrollToSection("#contact")}
//                 variant="default"
//                 size="lg"
//                 className="bg-accent hover:bg-accent/90 w-full mt-2"
//               >
//                 Get Quote
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

//testing

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Machinery", href: "#machinery" },
    { name: "Spare Parts", href: "#spare-parts" },
    { name: "Fishnets", href: "#fishnets" },
    { name: "Custom Solutions", href: "#custom" },
    { name: "Contact", href: "#contact" },
    { name: "Product Gallery", href: "#product-gallery" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-2xl font-heading font-bold text-primary"
            aria-label="Go to home section"
            tabIndex={0}
          >
            AVP <span className="text-secondary">Engineers</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                tabIndex={0}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="default"
              className="bg-accent hover:bg-accent/90"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background/98 backdrop-blur-md min-h-[50vh] absolute top-[100%] left-0 right-0 w-full">
            <div className="flex flex-col space-y-3 px-2 sm:px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground text-base hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium w-full block"
                  tabIndex={0}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent/90 w-full mt-2"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
