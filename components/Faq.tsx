import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FaqItem } from '../types';

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors"
      >
        <span>{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pt-4 text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">よくあるご質問</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Q&A</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
