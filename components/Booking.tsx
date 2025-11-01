import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-20 md:py-32 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          ご予約はこちら
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10 text-lg">
          空き状況の確認やご予約は、予約サイトにてご確認頂けます。<br/>
          下記ボタンからのご予約で、10%お得にご利用頂けます！
        </p>
        <a
          href="https://spacemarket.com/p/RPSEuefMo7vzSH07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          料金・空き状況を確認する
        </a>
      </div>
    </section>
  );
};

export default Booking;
