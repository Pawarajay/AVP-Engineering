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
//     { name: "Product Gallery", href: "#product-gallery" }
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
//       aria-label="Main navigation"
//     >
//       <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="text-2xl font-heading font-bold text-primary"
//             aria-label="Go to home section"
//             tabIndex={0}
//           >
//             AP <span className="text-secondary">Engineers</span>
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
//                 className="text-sm font-medium text-foreground hover:text-primary transition-smooth px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//                 tabIndex={0}
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
//             className="lg:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
//           <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background/98 backdrop-blur-md min-h-[50vh] absolute top-[100%] left-0 right-0 w-full">
//             <div className="flex flex-col space-y-3 px-2 sm:px-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.href);
//                   }}
//                   className="text-foreground text-base hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium w-full block"
//                   tabIndex={0}
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

//testing for clean navbar
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

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
//     { name: "Product Gallery", href: "#product-gallery" }
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
//       }`}
//       aria-label="Main navigation"
//     >
//       <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("#home");
//             }}
//             className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
//             aria-label="Go to home section"
//             tabIndex={0}
//           >
//             AP <span className="text-orange-500">Engineers</span>
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
//                 className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 tabIndex={0}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <Button
//               onClick={() => scrollToSection("#contact")}
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
//             >
//               Get Quote
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 hover:text-blue-600 transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-gray-200 bg-white/98 backdrop-blur-md min-h-[50vh] absolute top-[100%] left-0 right-0 w-full shadow-xl">
//             <div className="flex flex-col space-y-3 px-2 sm:px-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     scrollToSection(link.href);
//                   }}
//                   className="text-gray-700 text-base hover:text-blue-600 hover:bg-gray-100 transition-all py-3 px-4 rounded-md font-medium w-full block"
//                   tabIndex={0}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <Button
//                 onClick={() => scrollToSection("#contact")}
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full mt-2 py-6 text-base rounded-lg transition-colors"
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

//testing for better Ui 
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { name: "Contact", href: "#contact" },
    { name: "Product Gallery", href: "#product-gallery" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
            aria-label="Go to home section"
            tabIndex={0}
          >
            AP <span className="text-orange-500">Engineers</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap"
                tabIndex={0}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 xl:px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-gray-200 bg-white/98 backdrop-blur-md shadow-xl rounded-b-lg">
            <div className="flex flex-col space-y-1 px-3 sm:px-4 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-700 text-sm sm:text-base hover:text-blue-600 hover:bg-gray-100 transition-all py-2.5 sm:py-3 px-3 sm:px-4 rounded-md font-medium w-full block"
                  tabIndex={0}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full mt-3 sm:mt-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-colors"
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
