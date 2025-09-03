import React from 'react';

const galleryImages = [
  "jimospa-hachioji/image/top.webp",
  "jimospa-hachioji/image/jimospa (3).webp",
  "jimospa-hachioji/image/jimospa (2).webp",
  "jimospa-hachioji/image/jimospa (5).webp",
  "jimospa-hachioji/image/jimospa (10).webp",
  "jimospa-hachioji/image/jimospa (12).webp",
  "jimospa-hachioji/image/jimospa (11).webp",
  "jimospa-hachioji/image/jimospa (14).webp",
  "jimospa-hachioji/image/jimospa (9).webp",
  "jimospa-hachioji/image/jimospa (8).webp",
  "jimospa-hachioji/image/jimospa (7).webp",
  "jimospa-hachioji/image/jimospa (6).webp",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">ギャラリー</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Gallery</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
