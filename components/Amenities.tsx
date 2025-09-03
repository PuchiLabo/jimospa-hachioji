import React from 'react';
import { AMENITIES } from '../constants';

const ImageSlider: React.FC = () => {
  const sliderImages = [
    "/image/jimospa (5).webp",
    "/image/image (1).webp",
    "/image/image.webp",
    "/image/image (2).webp",
    "/image/jimospa (11).webp",
    "/image/jimospa (12).webp",
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-xl mb-8">
      <div className="flex animate-slide-infinite">
        {[...sliderImages, ...sliderImages].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-80 mx-2">
            <div className="aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt={`Amenity image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide-infinite 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">充実の設備で、もっと快適に。</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Facilities</p>
        </div>
        
        <ImageSlider />
        
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {AMENITIES.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-center text-gray-600">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
