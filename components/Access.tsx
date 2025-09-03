import React from 'react';

const Access: React.FC = () => {
  return (
    <section id="access" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">アクセス・店舗情報</h2>
          <p className="mt-4 text-gray-600 text-xl tracking-wide" style={{fontFamily: 'Dancing Script'}}>Access</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Map */}
          <div className="lg:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0842!2d139.3398824!3d35.6544521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191dc2577a3d65%3A0xb996a3cb26833094!2z5YWr546L5a2Q6aeF44Os44Oz44K_44Or44K544Oa44O844K5IOOCuOODouOCueODmuWFq+eOi-WtkA!5e0!3m2!1sja!2sjp!4v1699000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ジモスペ八王子 Location Map"
            ></iframe>
          </div>
          
          {/* Information */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-amber-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">ジモスぺ八王子</h3>
                <div className="space-y-4 text-gray-700">
                    <p>
                        <strong className="text-gray-900 block">住所:</strong>
                        東京都八王子市子安町１丁目１１−１０ エリートビル 401
                    </p>
                    <p>
                        <strong className="text-gray-900 block">アクセス:</strong>
                        JR中央線・横浜線・八高線「八王子駅」北口より徒歩2分
                    </p>
                    <p>
                        <strong className="text-gray-900 block">営業時間:</strong>
                        24時間年中無休
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
