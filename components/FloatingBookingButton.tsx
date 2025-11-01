import React from 'react';

const FloatingBookingButton: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-600 font-medium text-center">
              料金・空き状況は<br />予約サイトをチェック！
            </p>
          </div>
          <a
            href="https://spacemarket.com/p/RPSEuefMo7vzSH07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-yellow-500 text-gray-900 font-bold text-sm rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg flex-1 justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            ご予約はこちら
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingBookingButton;
