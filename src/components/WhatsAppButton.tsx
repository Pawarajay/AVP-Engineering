import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp business number - update with actual number
  const whatsappNumber = "919876543210"; // Format: country code + number (no + or spaces)
  const defaultMessage = encodeURIComponent(
    "Hello AP Engineers! I'm interested in learning more about your fishnet machinery and export solutions."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${defaultMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative">
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
            <div className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
              <p className="text-sm font-medium">Chat with us on WhatsApp</p>
              <p className="text-xs opacity-90">Quick response guaranteed!</p>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-primary"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="lg"
          className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-glow hover:shadow-lg transition-smooth group relative overflow-hidden"
        >
          {/* Pulse animation ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
          
          {/* Icon */}
          <MessageCircle className="h-7 w-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
        </Button>

        {/* Badge for "New messages" or "Online" indicator */}
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
