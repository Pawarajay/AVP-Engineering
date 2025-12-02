
import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Grid3x3,
  LayoutGrid,
  Sparkles,
  Maximize2,
  Download,
  PlayCircle,
  Pause,
  XCircle
} from 'lucide-react';

interface Product {
  image: string;
  description?: string;
}

interface Video {
  url: string;
  description?: string;
}

interface ProductCardProps {
  image: string;
  description?: string;
  onClick?: () => void;
  idx?: number;
}

interface VideoCardProps {
  url: string;
  description?: string;
  idx?: number;
}

/* ============ Product Card Component ============ */

const ProductCard: React.FC<ProductCardProps> = ({ image, description, onClick, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/assets/images/fallback.jpeg';
    e.currentTarget.alt = 'Image not available';
    setImageError(true);
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
      <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[320px]">
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
          style={{ padding: '2px' }}
        >
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50">
            {!imageLoaded && !imageError && <div className="absolute inset-0 shimmer" />}
            <img
              src={image}
              alt={description || 'Machine component'}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-110 brightness-105' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={handleImgError}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div
              className={`absolute top-3 left-3 flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 ${
                isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}
            >
              <Sparkles className="w-3 h-3 text-yellow-500" />
              <span className="text-xs font-semibold text-gray-700">Premium</span>
            </div>
            <div
              className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-500 ${
                isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              <button
                className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div
              className={`absolute bottom-3 right-3 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full transition-all duration-500 ${
                isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}
            >
              Click to enlarge
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
            {description ? (
              <div className="w-full">
                <p className="text-gray-800 text-sm font-semibold text-center leading-relaxed transition-all duration-300 group-hover:text-blue-600">
                  {description}
                </p>
                <div
                  className={`mx-auto mt-3 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ${
                    isHovered ? 'w-20' : 'w-0'
                  }`}
                />
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
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};

/* ============ Helper: Extract YouTube Video ID (for thumbnails) ============ */

const getYouTubeVideoId = (url: string): string | null => {
  try {
    if (url.includes('/embed/')) {
      const id = url.split('/embed/')[1]?.split(/[?&]/)[0];
      return id || null;
    }

    const urlObj = new URL(url);

    if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.replace('/', '');
    }

    if (urlObj.hostname.includes('youtube.com')) {
      const vParam = urlObj.searchParams.get('v');
      if (vParam) return vParam;

      if (urlObj.pathname.includes('/shorts/')) {
        return urlObj.pathname.split('/shorts/')[1]?.split(/[?&]/)[0];
      }
    }
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
  }
  return null;
};

/* ============ Video Card Component (inline preview) ============ */

const VideoCard: React.FC<VideoCardProps> = ({ url, description, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedUrl, setEmbedUrl] = useState('');
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const animationDelay = `${(idx ?? 0) * 100}ms`;

  // Initialize embed URL on mount
  useEffect(() => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      const embed = new URL(`https://www.youtube.com/embed/${videoId}`);
      embed.searchParams.set('rel', '0');
      embed.searchParams.set('modestbranding', '1');
      embed.searchParams.set('enablejsapi', '1');
      embed.searchParams.set('origin', window.location.origin);
      setEmbedUrl(embed.toString());
    }
  }, [url]);

  const handleWatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      const playableUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
      playableUrl.searchParams.set('autoplay', '1');
      playableUrl.searchParams.set('mute', '0');
      playableUrl.searchParams.set('rel', '0');
      playableUrl.searchParams.set('modestbranding', '1');
      playableUrl.searchParams.set('enablejsapi', '1');
      playableUrl.searchParams.set('origin', window.location.origin);
      setEmbedUrl(playableUrl.toString());
      setIsPlaying(true);
      setIsPaused(false);
      setShowControls(true);
    }
  };

  const handlePauseResume = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;

      try {
        const message = isPaused
          ? JSON.stringify({ event: 'command', func: 'playVideo', args: '' })
          : JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' });

        iframe.contentWindow?.postMessage(message, '*');
        setIsPaused(!isPaused);
      } catch (error) {
        console.error('Error controlling video:', error);

        const videoId = getYouTubeVideoId(url);
        if (!videoId) return;

        const newUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
        newUrl.searchParams.set('rel', '0');
        newUrl.searchParams.set('modestbranding', '1');
        newUrl.searchParams.set('enablejsapi', '1');
        newUrl.searchParams.set('origin', window.location.origin);

        if (isPaused) {
          newUrl.searchParams.set('autoplay', '1');
          newUrl.searchParams.set('mute', '0');
          setIsPaused(false);
        } else {
          newUrl.searchParams.set('autoplay', '0');
          newUrl.searchParams.set('mute', '0');
          setIsPaused(true);
        }

        setEmbedUrl(newUrl.toString());
      }
    }
  };

  const handleExitVideo = () => {
    if (iframeRef.current) {
      try {
        const message = JSON.stringify({ event: 'command', func: 'stopVideo', args: '' });
        iframeRef.current.contentWindow?.postMessage(message, '*');
      } catch (error) {
        console.error('Error stopping video:', error);
      }
    }

    setIsPlaying(false);
    setIsPaused(false);
    setShowControls(false);

    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      const embed = new URL(`https://www.youtube.com/embed/${videoId}`);
      embed.searchParams.set('rel', '0');
      embed.searchParams.set('modestbranding', '1');
      embed.searchParams.set('enablejsapi', '1');
      embed.searchParams.set('origin', window.location.origin);
      setEmbedUrl(embed.toString());
    }
  };

  const handleIframeLoad = () => {
    console.log('Iframe loaded, YouTube API should be available');
  };

  const getThumb = (videoUrl: string) => {
    const videoId = getYouTubeVideoId(videoUrl);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '';
  };

  const thumb = getThumb(url);

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
    >
      <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[320px]">
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
          style={{ padding: '2px' }}
        >
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div
            className="relative w-full aspect-video overflow-hidden bg-black"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => {
              if (isPlaying) {
                setTimeout(() => setShowControls(false), 2000);
              }
            }}
          >
            {isPlaying && embedUrl ? (
              <div className="relative w-full h-full">
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ display: 'block' }}
                  onLoad={handleIframeLoad}
                  id={`youtube-player-${idx}`}
                />

                {showControls && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span className="text-xs font-semibold text-white">Now Playing</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePauseResume();
                          }}
                          title={isPaused ? 'Resume video' : 'Pause video'}
                        >
                          {isPaused ? (
                            <PlayCircle className="w-4 h-4 text-white" />
                          ) : (
                            <Pause className="w-4 h-4 text-white" />
                          )}
                        </button>

                        <button
                          className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-500/80 transition-all duration-300 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExitVideo();
                          }}
                          title="Exit video"
                        >
                          <XCircle className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex justify-center gap-3">
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePauseResume();
                          }}
                        >
                          {isPaused ? (
                            <>
                              <PlayCircle className="w-4 h-4" />
                              Resume
                            </>
                          ) : (
                            <>
                              <Pause className="w-4 h-4" />
                              Pause
                            </>
                          )}
                        </button>

                        <button
                          className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExitVideo();
                          }}
                        >
                          <XCircle className="w-4 h-4" />
                          Exit Video
                        </button>
                      </div>

                      <div className="text-center">
                        <p className="text-white/80 text-sm">
                          {isPaused ? 'Video paused' : 'Video playing'} • Click buttons to control
                        </p>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePauseResume();
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`transform transition-all duration-300 ${
                            showControls ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                          }`}
                        >
                          {isPaused ? (
                            <div className="relative">
                              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                              <PlayCircle className="w-16 h-16 text-white/80 relative z-10" />
                            </div>
                          ) : (
                            <div className="relative">
                              <div className="absolute inset-0 bg-black/20 rounded-full blur-xl"></div>
                              <Pause className="w-16 h-16 text-white/80 relative z-10" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!showControls && isPlaying && (
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setShowControls(true)}
                  >
                    <div className="absolute top-3 right-3">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        Click for controls
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : thumb ? (
              <>
                <img
                  src={thumb}
                  alt={description || 'Video thumbnail'}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? 'scale-105 brightness-105' : 'scale-100 brightness-100'
                  }`}
                  onError={(e) => {
                    const videoId = getYouTubeVideoId(url);
                    if (videoId) {
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }
                  }}
                />
                <button
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/60 transition duration-300 group"
                  style={{ cursor: 'pointer' }}
                  onClick={handleWatchClick}
                  aria-label="Watch video"
                  tabIndex={0}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-1 rounded-full mt-4">
                    Watch Video
                  </span>
                </button>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-12 h-12 text-white/50 mx-auto mb-2" />
                  <span className="text-white/70 text-sm">Video preview</span>
                </div>
              </div>
            )}

            {!isPlaying && (
              <div
                className={`absolute top-3 left-3 flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 ${
                  isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
              >
                <Sparkles className="w-3 h-3 text-yellow-500" />
                <span className="text-xs font-semibold text-gray-700">Premium</span>
              </div>
            )}
          </div>
          <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
            {description ? (
              <div className="w-full">
                <p className="text-gray-800 text-sm font-semibold text-center leading-relaxed transition-all duration-300 group-hover:text-blue-600">
                  {description}
                </p>
                <div
                  className={`mx-auto mt-3 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ${
                    isHovered ? 'w-20' : 'w-0'
                  }`}
                />
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
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};

/* ============ Main Gallery ============ */

const ProductGallery = () => {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [gridView, setGridView] = useState<'compact' | 'comfortable'>('comfortable');
  const [searchFocused, setSearchFocused] = useState(false);

  const products: Product[] = [
    { image: '/assets/images/image1.jpeg' },
    { image: '/assets/images/image2.jpeg', description: 'Fishnet machine Cam Clutch' },
    { image: '/assets/images/image3.jpeg', description: 'Fishnet Knot Tightening machine' },
    { image: '/assets/images/image4.jpeg', description: 'Fishnet machine Spool Winder' },
    { image: '/assets/images/image6.jpeg', description: 'Fishnet machine Shuttle rest' },
    { image: '/assets/images/image7.jpeg', description: 'Fishnet machine Middle shuttle rest' },
    { image: '/assets/images/image8.jpeg', description: 'Fishnet machine Upper hook Brass Gear' },
    {
      image: '/assets/images/image9.jpeg',
      description: 'Used in weaving mechanisms for smooth net rolling and thread handling.'
    },
    { image: '/assets/images/image10.jpeg', description: 'Fishnet machine Cam Clutch' },
    { image: '/assets/images/image11.jpeg', description: 'Fishnet machine Comb plate' },
    { image: '/assets/images/image14.jpeg', description: 'Fishnet machine Upper hook' },
    { image: '/assets/images/image15.jpeg', description: 'Reed pleat' },
    { image: '/assets/images/image16.jpeg', description: 'Fishnet machine 50mm GTA Upper Hook.' },
    { image: '/assets/images/image17.jpeg', description: 'Fishnet Depth stretching machine' }
  ];

  const videos: Video[] = [
    {
      url: 'https://www.youtube.com/embed/ij8W2Adqd9Q',
      description: 'Fishnet machine 12.7mm Pitch 240mm Spool Diameter No of Shuttle 420'
    },
    {
      url: 'https://www.youtube.com/embed/Tj_BbBcL5P8',
      description:
        'Fishnet machine 35mm Pitch Spool Diameter 400mm No Shuttle 150 nos With PLC System'
    },
    {
      url: 'https://www.youtube.com/embed/1f63AxiWgKI',
      description: 'Fishnet machine cam clutch'
    }
  ];

  const filtered = products.filter(
    (prod) =>
      !search ||
      (prod.description && prod.description.toLowerCase().includes(search.toLowerCase()))
  );

  const openModal = (img: string, desc?: string) => {
    setModalImage(img);
    setModalDescription(desc ?? '');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setModalImage('');
      setModalDescription('');
    }, 300);
  };

  const gridClass =
    gridView === 'compact'
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8';

  const downloadImage = async (url: string) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = url.split('/').pop() || 'download.jpeg';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch {
      alert('Download failed! Image could not be fetched.');
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 -z-10" />
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto mb-8 lg:mb-12">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-3 lg:mb-4 drop-shadow-lg">
              Machine Components Gallery
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Discover our premium collection of industrial machinery components
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-pink-500 to-transparent rounded-full" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex-1 relative">
              <div
                className={`relative transition-all duration-300 ${
                  searchFocused ? 'scale-105' : 'scale-100'
                }`}
              >
                <Search
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                    searchFocused ? 'text-blue-500' : 'text-gray-400'
                  }`}
                  size={20}
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search components..."
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={18} className="text-gray-400" />
                  </button>
                )}
              </div>
              {searchFocused && (
                <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 animate-scaleIn">
                  <p className="text-xs text-gray-500">
                    {filtered.length} {filtered.length === 1 ? 'result' : 'results'} found
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setGridView('comfortable')}
                className={`flex-1 sm:flex-none px-4 py-4 rounded-2xl shadow-lg transition-all duration-300 ${
                  gridView === 'comfortable'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:scale-105'
                }`}
                title="Comfortable view"
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setGridView('compact')}
                className={`flex-1 sm:flex-none px-4 py-4 rounded-2xl shadow-lg transition-all duration-300 ${
                  gridView === 'compact'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:scale-105'
                }`}
                title="Compact view"
              >
                <Grid3x3 size={20} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing{' '}
              <span className="font-semibold text-blue-600">{filtered.length}</span> of{' '}
              <span className="font-semibold">{products.length}</span> components
            </p>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid ${gridClass}`}>
            {filtered.map((prod, idx) => (
              <ProductCard
                key={idx}
                {...prod}
                idx={idx}
                onClick={() => openModal(prod.image, prod.description)}
              />
            ))}
          </div>

          {!filtered.length && (
            <div className="col-span-full text-center py-16 lg:py-24">
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium mb-2">No products found</p>
                <p className="text-gray-400 text-sm mb-4">Try adjusting your search terms</p>
                <button
                  onClick={() => setSearch('')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}

          {/* Videos Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-700">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((vid, idx) => (
                <VideoCard
                  key={idx}
                  url={vid.url}
                  description={vid.description}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-4 sm:p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <button
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:rotate-90"
                onClick={closeModal}
                title="Close"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-white pr-12">
                Product Details
              </h3>
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={modalImage}
                  alt={modalDescription || 'Machine component'}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
              {modalDescription && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{modalDescription}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => downloadImage(modalImage)}
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
