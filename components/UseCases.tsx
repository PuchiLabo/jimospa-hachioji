import React from 'react';
import { USE_CASES } from '../constants';
import type { UseCaseItem } from '../types';

const UseCaseCard: React.FC<{ item: UseCaseItem }> = ({ item }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
        </div>
    </div>
);


const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">こんな使い方も、思いのまま。</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Use Cases</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USE_CASES.map((useCase) => (
                <UseCaseCard key={useCase.title} item={useCase} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
