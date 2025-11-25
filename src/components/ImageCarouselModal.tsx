import React, { useState } from "react";

interface CarouselProps {
  images: { image: string; description?: string; category: string }[];
  selectedIndex: number;
  onClose: () => void;
}

const ImageCarouselModal: React.FC<CarouselProps> = ({ images, selectedIndex, onClose }) => {
  const [index, setIndex] = useState(selectedIndex);
  const [showDrawer, setShowDrawer] = useState(false);

  const product = images[index];

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = product.image;
    link.download = `product${index + 1}.jpeg`;
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.category,
          text: product.description ?? "",
          url: product.image
        });
      } catch {}
    } else {
      alert("Sharing not supported on this device/browser.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fadeIn" onClick={onClose}>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-xl w-full mx-2 p-0 animate-slideUp overflow-hidden flex flex-col"
           onClick={e => e.stopPropagation()}
      >
        {/* Carousel controls */}
        <button
          className="absolute top-2 right-2 bg-gray-200 rounded-full px-2 py-1 text-lg text-gray-600 hover:bg-gray-300"
          onClick={onClose}
          title="Close"
        >×</button>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full px-3 py-2 text-blue-600 hover:bg-blue-100"
          onClick={prev}
          title="Previous"
        >{"‹"}</button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full px-3 py-2 text-blue-600 hover:bg-blue-100"
          onClick={next}
          title="Next"
        >{"›"}</button>

        {/* Details Drawer Button */}
        <button
          className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700"
          onClick={() => setShowDrawer((v) => !v)}
        >Details</button>

        {/* Image */}
        <div className="flex flex-col items-center py-8 px-2">
          <img src={product.image} alt={product.description || product.category}
               className="w-full h-80 object-contain rounded-lg bg-gray-50 mb-3 transition-all duration-300" />
          <div className="flex gap-3 mt-2">
            <button className="bg-gray-100 px-4 py-2 rounded shadow hover:bg-blue-200 text-blue-700 font-semibold"
                    onClick={handleDownload}>
              Download
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded shadow hover:bg-green-200 text-green-700 font-semibold"
                    onClick={handleShare}>
              Share
            </button>
          </div>
        </div>

        {/* Drawer/Sidebar for details */}
        {showDrawer && (
          <div className="absolute top-0 right-0 w-60 h-full bg-gray-50 shadow-lg px-4 py-6 border-l border-gray-200 transition-all duration-300 animate-slideIn">
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 hover:bg-gray-300"
              onClick={() => setShowDrawer(false)}
              title="Close"
            >×</button>
            <h3 className="text-xl font-bold mb-2 text-blue-700">{product.category}</h3>
            {product.description ?
              <p className="text-gray-600 text-md">{product.description}</p> :
              <p className="text-gray-400">No description available.</p>
            }
            <p className="mt-4 text-xs text-gray-500">Image: {`product${index + 1}.jpeg`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarouselModal;
