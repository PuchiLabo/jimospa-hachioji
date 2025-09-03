import React from 'react';
import { FEATURES } from '../constants';
import type { FeatureItem } from '../types';

const FeatureCard: React.FC<{ item: FeatureItem; index: number }> = ({ item, index }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <img src={item.imageUrl} alt={item.title} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          {item.icon}
          <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">ジモスペ八王子が選ばれる、<span className="text-yellow-500">6つ</span>の理由</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Features</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {FEATURES.map((feature, index) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden aspect-[3/2]">
                <img 
                  src={feature.imageUrl} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-800 text-center" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
