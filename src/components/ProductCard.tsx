
import React, { useState } from 'react';
import { Maximize2, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  image: string;
  description?: string;
  onClick?: () => void;
  idx?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, description, onClick, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/assets/images/fallback.jpeg";
    e.currentTarget.alt = "Image not available";
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const animationDelay = `${(idx ?? 0) * 100}ms`;

  return (
    <div
      className="relative group cursor-pointer"
      style={{ 
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay,
        opacity: 0
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Main Card */}
      <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
        
        {/* Animated Border Gradient */}
        <div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
          style={{ padding: '2px' }}
        >
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* Image Section */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50">
            
            {/* Loading Shimmer */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 shimmer" />
            )}

            {/* Image */}
            <img
              src={image}
              alt={description || "Machine component"}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered 
                  ? 'scale-110 brightness-105' 
                  : 'scale-100 brightness-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={handleImgError}
              onLoad={handleImageLoad}
              loading="lazy"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Badge */}
            <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}>
              <Sparkles className="w-3 h-3 text-yellow-500" />
              <span className="text-xs font-semibold text-gray-700">Premium</span>
            </div>

            {/* Hover Actions */}
            <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-2 transition-all duration-500 ${
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}>
              <button 
                className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                title="Enlarge view"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button 
                className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                onClick={(e) => e.stopPropagation()}
                title="Quick view"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Hint */}
            <div className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}>
              Click to enlarge
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-5 lg:p-6 bg-gradient-to-b from-white to-gray-50">
            {description ? (
              <div className="w-full">
                <p className="text-gray-800 text-sm sm:text-base lg:text-lg font-semibold text-center leading-relaxed transition-all duration-300 group-hover:text-blue-600">
                  {description}
                </p>
                
                {/* Animated Underline */}
                <div className={`mx-auto mt-3 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ${
                  isHovered ? 'w-20' : 'w-0'
                }`} />
              </div>
            ) : (
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-gray-400 text-sm">No description</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Floating Shadow Effect */}
      <div 
        className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};

// Demo Component
const ProductCardDemo = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      description: "High-Precision CNC Machine"
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      description: "Advanced Robotic Arm System"
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      description: "Industrial Control Panel"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      description: "Automated Assembly Line Component"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Premium Product Gallery
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Explore our collection of industrial machinery and components with stunning visuals
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              image={product.image}
              description={product.description}
              idx={idx}
              onClick={() => setSelectedProduct(idx)}
            />
          ))}
        </div>

        {/* Selected Product Info */}
        {selectedProduct !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                {products[selectedProduct].description}
              </h3>
              <img 
                src={products[selectedProduct].image} 
                alt={products[selectedProduct].description}
                className="w-full rounded-xl mb-4"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardDemo;