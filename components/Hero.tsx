import React, { useState, useEffect } from 'react';

const HeroFeature: React.FC<{ children: React.ReactNode; delay: string }> = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay, 10));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-[50vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="/image/top.webp"
          alt="ジモスぺ八王子のメインビジュアル"
          className="ken-burns object-cover w-full h-full"
        />
      </div>

      {/* Twinkling Stars Animation */}
      <div className="absolute inset-0 z-5">
        <div className="star star-1">✦</div>
        <div className="star star-2">✧</div>
        <div className="star star-3">✦</div>
        <div className="star star-4">✧</div>
        <div className="star star-5">✦</div>
        <div className="star star-6">✧</div>
        <div className="star star-7">✦</div>
        <div className="star star-8">✧</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <HeroFeature delay="200">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-shadow-lg">
            いつものメンバーと、<br className="md:hidden" />
            いつもより特別な時間を。
          </h1>
        </HeroFeature>
        <HeroFeature delay="600">
          <p className="text-lg md:text-2xl font-medium mb-8 text-shadow-lg">
            大人のための貸切プライベート空間。
          </p>
        </HeroFeature>
        
        <div className="flex flex-col gap-6 md:flex md:flex-row md:justify-center md:gap-1 text-sm md:text-base">
          <HeroFeature delay="1000">
            <span className="bg-white/80 backdrop-blur-sm text-black px-3 py-2 rounded-full whitespace-nowrap font-medium">📍 JR八王子駅 徒歩2分</span>
          </HeroFeature>
          <HeroFeature delay="1200">
            <span className="bg-white/80 backdrop-blur-sm text-black px-3 py-2 rounded-full whitespace-nowrap font-medium">🍳 キッチン＆調理器具完備</span>
          </HeroFeature>
          <HeroFeature delay="1400">
            <span className="bg-white/80 backdrop-blur-sm text-black px-3 py-2 rounded-full whitespace-nowrap font-medium">🎬 Netflix & U-NEXT見放題</span>
          </HeroFeature>
          <HeroFeature delay="1600">
            <span className="bg-white/80 backdrop-blur-sm text-black px-3 py-2 rounded-full whitespace-nowrap font-medium">🎲 豊富なボードゲーム</span>
          </HeroFeature>
        </div>
      </div>
    </section>
  );
};

export default Hero;
