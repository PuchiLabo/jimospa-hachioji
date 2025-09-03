import React from 'react';

const FloatingIcon: React.FC<{ children: React.ReactNode; className: string; delay: string }> = ({ children, className, delay }) => (
  <div className={`absolute text-yellow-500 opacity-60 ${className}`} style={{animationDelay: delay}}>
    {children}
  </div>
);

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-20 md:py-32 bg-amber-50 relative overflow-hidden">
      {/* Top left */}
      <FloatingIcon className="left-8 md:left-32 top-10 text-3xl animate-bounce" delay="0s">
        🍺
      </FloatingIcon>
      
      {/* Top right */}
      <FloatingIcon className="right-8 md:right-32 top-10 text-3xl animate-pulse" delay="0.5s">
        🍷
      </FloatingIcon>
      
      {/* Bottom left */}
      <FloatingIcon className="left-8 md:left-32 bottom-10 text-3xl animate-pulse" delay="1s">
        🎲
      </FloatingIcon>
      
      {/* Bottom right */}
      <FloatingIcon className="right-8 md:right-32 bottom-10 text-3xl animate-bounce" delay="1.5s">
        🎥
      </FloatingIcon>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
          大切な仲間と過ごす、<br /><span className="text-yellow-500">完全プライベートスペース。</span>
        </h2>
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-gray-600 md:text-lg leading-relaxed">
            周りの目を気にせず、自分たちだけの空間で、心から笑い合いたい。<br />
            そんな想いを叶えるのが、ジモスぺ八王子です。<br /><br />
            ジモスぺ八王子では、キッチン＆調理器具やボードゲーム、大型テレビなど、ホームパーティや女子会、子連れママ会などが楽しくなるグッズを取り揃えています。<br /><br />
            美味しいものを持ち寄って、好きな映画を観て、時間を忘れて語り合う。<br />
            ありふれた日常が、忘れられない一日に変わる場所が、ここにあります。
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Concept;
