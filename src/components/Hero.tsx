// import { ArrowRight, Globe, Wrench, Package } from "lucide-react";
// import { Button } from "./ui/button";
// import heroImage from "@/assets/hero-bg-enhanced.jpg";

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-[100svh] flex items-center">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="AP Engineers Manufacturing Facility"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40 md:to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-16">
//         <div className="max-w-4xl">
//           <div className="text-white animate-fade-in">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
//               Engineering Excellence in{" "}
//               <span className="text-secondary-light">Fishnet Machinery</span>
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl">
//               Leading manufacturer and global exporter of fishnet machinery, spare parts, and custom-built solutions
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
//               <Button
//                 size="lg"
//                 onClick={() => scrollToSection("#contact")}
//                 className="bg-accent hover:bg-accent/90 text-white font-semibold w-full sm:w-auto"
//               >
//                 Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 onClick={() => scrollToSection("#about")}
//                 className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
//               >
//                 Learn More
//               </Button>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-lg">
//               <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
//                 <Globe className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-secondary-light" />
//                 <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold">50+</div>
//                 <div className="text-xs sm:text-sm text-white/80">Countries</div>
//               </div>
//               <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
//                 <Wrench className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-secondary-light" />
//                 <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold">25+</div>
//                 <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
//               </div>
//               <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
//                 <Package className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-secondary-light" />
//                 <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold">1000+</div>
//                 <div className="text-xs sm:text-sm text-white/80">Products</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator - Hidden on mobile */}
//       <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


//testing remove hover effect
import { ArrowRight, Globe, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
          alt="AP Engineers Manufacturing Facility"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/40 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl">
          <div className="text-white animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Engineering Excellence in{" "}
              <span className="text-orange-400">Fishnet Machinery</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl">
              Leading manufacturer and global exporter of fishnet machinery, spare parts, and custom-built solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-orange-500 text-white font-semibold w-full sm:w-auto"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#about")}
                className="border-2 border-white text-white bg-transparent w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-lg">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-orange-400" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">50+</div>
                <div className="text-xs sm:text-sm text-white/80">Countries</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-orange-400" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">25+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-orange-400" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;