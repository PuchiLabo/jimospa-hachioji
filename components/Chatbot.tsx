import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'こんにちは！ジモスぺ八王子について何かご質問はありますか？',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickButtons, setShowQuickButtons] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    '空き状況はどこで確認できますか？',
    '最大何人まで利用できますか？',
    '延長はできますか？',
    '飲食物の持ち込みは可能ですか？'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowQuickButtons(false);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(question);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowQuickButtons(false);
    setIsTyping(true);

    // シンプルな自動応答システム
    setTimeout(() => {
      const botResponse = generateResponse(inputText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // 参照データ
    const referenceData = {
      address: "東京都八王子市子安町１丁目１１−１０ エリートビル 401",
      access: "JR中央線・横浜線・八高線「八王子駅」北口より徒歩2分",
      hours: "24時間年中無休",
      features: {
        tv: "50型大画面テレビでNetflixやYouTube、U-NEXT視聴可能",
        netflix: "Netflix、U-NEXTが当アカウントで映画やドラマ、プレミアリーグ等が見放題",
        dvd: "DVD-BDプレイヤー完備",
        cooking: "BRUNOマルチホットプレート＆鍋セット、たこ焼きプレート、チーズフォンデュ鍋",
        games: "ボードゲーム＆パーティゲーム10種類",
        kitchen: "キッチン＆調理器具完備",
        light: "LEDリングライトで自撮りや動画配信",
        pricing: "人数が増えても追加料金無し"
      },
      equipment: {
        appliances: "テレビ×1（HDMI接続可）、DVD・Blu-rayプレイヤー×1、冷蔵庫×1、電子レンジ×1、電気ケトル×1、Bluetoothスピーカー×1、HDMIケーブル×1、充電器(ライトニングiOS・Type-C・Micro USB)×1",
        furniture: "テーブル×2、ソファ×2、クッション×6",
        cooking: "IHコンロ（一口）、ホットプレート、たこ焼き機×2（①BRUNOホットプレートのたこ焼き器、②電気たこ焼き器）、チーズフォンデュ鍋、たこ焼き串×2、チーズフォンデュフォーク×8、包丁各種、鍋、フライパン、深い皿×12、浅い皿×12、スプーン/フォーク×12ずつ、お箸×12",
        games: "大逆転人生ゲーム、ito、カタン、マーダーミステリー、ワンナイト人狼、UNO、トランプ、はぁって言うゲーム4、恐竜ワニワニパニック、カラフルバランスゲーム",
        supplies: "トイレットペーパー、ティッシュペーパー、キッチンペーパー、ゴミ袋、除菌ウェットティッシュ、除菌スプレー",
        other: "トイレ"
      },
      nearby: "セブン、ファミマ 1分、ミスド、サブウェイ、スタバ 1分、ビッグカメラ 1分、近隣コインパーキング多数",
      prohibited: "ゴミを置いて帰ることや周辺への不法投棄、汚損、破損行為、喫煙（ベランダは喫煙OK）、カラオケや演奏などの大音量",
      notes: "当スペースはエレベーター無しの4階になります。本スペースには盗難防止、防犯のため防犯カメラを設置しております。",
      wifi: "無料wifi完備（BIGLOBE、2.4GHz・5GHz、最大同時接続数20台、通信速度：下り・上り 110Mbps）"
    };

    // 既存の回答は維持（変更しない）
    if (input.includes('空き状況') || input.includes('空き') || input.includes('確認')) {
      const pageInfo = getPageContent(['予約', '空き', '利用可能']);
      const baseResponse = '空き状況は予約ページでリアルタイムでご確認いただけます。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 200)}...\n\nこちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F` : `${baseResponse}こちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F`;
    }
    
    if (input.includes('最大') || input.includes('何人') || input.includes('人数')) {
      const pageInfo = getPageContent(['人数', '定員', '最大', '収容']);
      const baseResponse = '最大12名様までご利用いただけます。人数によって料金は変わりません。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 150)}...` : baseResponse;
    }
    
    if (input.includes('延長') || input.includes('時間延長')) {
      const pageInfo = getPageContent(['延長', '時間', '利用時間']);
      const baseResponse = '当日の空き状況により延長が可能です。延長をご希望の場合は、各種予約サイトより手続きをお願いいたします。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 150)}...` : baseResponse;
    }
    
    if (input.includes('飲食物') || input.includes('持ち込み') || input.includes('飲食')) {
      const pageInfo = getPageContent(['飲食', '持ち込み', 'アルコール', '食事']);
      const baseResponse = '飲食物・アルコールの持ち込みも全て可能です。ゴミはお持ち帰りをお願いします。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 150)}...` : baseResponse;
    }
    
    if (input.includes('料金') || input.includes('価格') || input.includes('値段')) {
      const pageInfo = getPageContent(['料金', '価格', '値段', '費用', 'プラン']);
      const baseResponse = '料金については、ご利用時間によって異なります。詳細な料金は予約ページでご確認いただけます。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 200)}...\n\nこちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F` : `${baseResponse}こちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F`;
    }
    
    if (input.includes('予約') || input.includes('利用可能')) {
      const pageInfo = getPageContent(['予約', '申込', 'ご利用', '手続き']);
      const baseResponse = '予約状況は予約ページでリアルタイムでご確認いただけます。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 200)}...\n\nこちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F` : `${baseResponse}こちらをご覧ください。https://spacemarket.com/p/OQhnE-8p054D8q7F`;
    }
    
    if (input.includes('設備') || input.includes('アメニティ')) {
      setTimeout(() => {
        const equipmentElements = Array.from(document.querySelectorAll('*')).filter(el => 
          el.textContent?.includes('充実の設備で、もっと快適に。')
        );
        if (equipmentElements.length > 0) {
          equipmentElements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1500);
      
      const pageInfo = getPageContent(['設備', 'アメニティ', 'Wi-Fi', 'プロジェクター', '調理器具', '冷蔵庫']);
      const baseResponse = '無料Wi-Fi、DVD・Blu-rayプレイヤー、調理器具、冷蔵庫、電子レンジ、各種ボードゲームなど充実した設備をご用意しております。詳細は下記の設備一覧をご覧ください。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 300)}...` : baseResponse;
    }
    
    if (input.includes('アクセス') || input.includes('場所') || input.includes('行き方')) {
      const pageInfo = getPageContent(['アクセス', '場所', '住所', '行き方', '八王子駅', '徒歩']);
      const baseResponse = 'JR八王子駅南口から徒歩2分の好立地です。詳しいアクセス方法はアクセスページをご確認ください。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 200)}...` : baseResponse;
    }
    
    if (input.includes('駐車場')) {
      const pageInfo = getPageContent(['駐車場', '駐車', '車', 'パーキング']);
      const baseResponse = '近隣にコインパーキングがございます。お車でお越しの際はそちらをご利用ください。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 150)}...` : baseResponse;
    }
    
    if (input.includes('キャンセル')) {
      const pageInfo = getPageContent(['キャンセル', '取消', '変更', 'ポリシー']);
      const baseResponse = 'キャンセルポリシーについては、予約サイトにてご確認いただけます。';
      return pageInfo ? `${baseResponse}\n\n${pageInfo.substring(0, 200)}...\n\nhttps://spacemarket.com/p/OQhnE-8p054D8q7F` : `${baseResponse}https://spacemarket.com/p/OQhnE-8p054D8q7F`;
    }

    // 新しい参照データベースの回答システム
    if (input.includes('住所')) {
      return `住所は${referenceData.address}です。`;
    }
    
    if (input.includes('営業時間') || input.includes('営業') || input.includes('時間')) {
      return `営業時間は${referenceData.hours}です。`;
    }
    
    if (input.includes('テレビ') || input.includes('netflix') || input.includes('youtube')) {
      return `${referenceData.features.tv}です。${referenceData.features.netflix}！`;
    }
    
    if (input.includes('dvd') || input.includes('ブルーレイ') || input.includes('blu-ray')) {
      return `${referenceData.features.dvd}しております。`;
    }
    
    if (input.includes('たこ焼き') || input.includes('ホットプレート') || input.includes('チーズフォンデュ')) {
      return `${referenceData.features.cooking}をご用意しております。`;
    }
    
    if (input.includes('ボードゲーム') || input.includes('ゲーム')) {
      return `${referenceData.features.games}をご用意しております。大逆転人生ゲーム、ito、カタン、マーダーミステリー、ワンナイト人狼、UNO、トランプ、はぁって言うゲーム4、恐竜ワニワニパニック、カラフルバランスゲームなどがございます。`;
    }
    
    if (input.includes('撮影') || input.includes('自撮り') || input.includes('動画配信') || input.includes('ライト')) {
      return `${referenceData.features.light}が可能です。`;
    }
    
    if (input.includes('コンビニ') || input.includes('周辺') || input.includes('近く')) {
      return `周辺情報：${referenceData.nearby}となっております。`;
    }
    
    if (input.includes('禁止') || input.includes('ダメ') || input.includes('してはいけない')) {
      return `禁止事項は以下の通りです：${referenceData.prohibited}`;
    }
    
    if (input.includes('エレベーター') || input.includes('階段') || input.includes('4階')) {
      return `${referenceData.notes}`;
    }
    
    if (input.includes('wifi') || input.includes('wi-fi') || input.includes('インターネット') || input.includes('通信')) {
      return `${referenceData.wifi}`;
    }
    
    if (input.includes('変更') || input.includes('日程変更')) {
      return `ご利用前日・当日の予約の変更は延長とキャンセルのみ受付いたします。日程変更は取り直しで受け付けております。`;
    }

    if (input.includes('家電') || input.includes('電化製品')) {
      return `家電製品は以下の通りです：${referenceData.equipment.appliances}`;
    }

    if (input.includes('家具') || input.includes('家具')) {
      return `家具は以下の通りです：${referenceData.equipment.furniture}`;
    }

    if (input.includes('調理器具') || input.includes('調理道具')) {
      return `調理器具は以下の通りです：${referenceData.equipment.cooking}`;
    }

    if (input.includes('ゲーム') || input.includes('ボードゲーム')) {
      return `ゲームは以下の通りです：${referenceData.equipment.games}`;
    }

    if (input.includes('消耗品') || input.includes('備品')) {
      return `消耗品は以下の通りです：${referenceData.equipment.supplies}`;
    }

    if (input.includes('その他') || input.includes('その他備品')) {
      return `その他備品は以下の通りです：${referenceData.equipment.other}`;
    }

    // AI風の回答生成システム
    return findBestMatch(input, referenceData);
  };

  // AI風の回答生成システム
  const findBestMatch = (input: string, data: any): string => {
    const keywords = input.split(/\s+/).filter(word => word.length > 1);
    const matches: { key: string; value: string; score: number }[] = [];

    // 全ての参照データを検索
    const searchInData = (obj: any, prefix = ''): void => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
          let score = 0;
          const lowerValue = value.toLowerCase();
          
          // キーワードマッチング
          keywords.forEach(keyword => {
            if (lowerValue.includes(keyword)) {
              score += keyword.length;
            }
          });

          // 部分マッチング
          if (score === 0) {
            keywords.forEach(keyword => {
              const regex = new RegExp(keyword.split('').join('.*'), 'i');
              if (regex.test(lowerValue)) {
                score += keyword.length * 0.5;
              }
            });
          }

          if (score > 0) {
            matches.push({
              key: prefix + key,
              value: value,
              score: score
            });
          }
        } else if (typeof value === 'object' && value !== null) {
          searchInData(value, prefix + key + '.');
        }
      }
    };

    searchInData(data);

    // スコア順でソート
    matches.sort((a, b) => b.score - a.score);

    if (matches.length > 0) {
      const bestMatch = matches[0];
      
      // 関連する情報を組み合わせて回答
      const relatedMatches = matches.slice(0, 3).filter(m => m.score >= bestMatch.score * 0.7);
      
      if (relatedMatches.length === 1) {
        return `${bestMatch.value}`;
      } else {
        const combinedInfo = relatedMatches.map(m => m.value).join('、');
        return `関連する情報をお答えします：${combinedInfo}`;
      }
    }

    // マッチしない場合は従来のフォールバック
    return 'お探しの情報は見つかりませんでした。恐れ入りますが、予約サイトのお問い合わせよりお問い合わせをお願い致します。予約サイトはこちら→https://spacemarket.com/p/OQhnE-8p054D8q7F';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-100"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed z-50 sm:bottom-6 sm:right-6 bottom-20 right-4">
      {/* チャットウィンドウ */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col sm:w-80 w-72">
        {/* ヘッダー */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="font-semibold">サポートチャット</h3>
            <p className="text-xs opacity-90">お気軽にご質問ください</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-blue-700 rounded p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* メッセージエリア */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {renderMessageWithLinks(message.text)}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          {showQuickButtons && (
            <div className="px-2">
              <div className="grid grid-cols-1 gap-2 mb-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100 text-sm text-left border border-blue-200 transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 入力エリア */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="メッセージを入力..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      )}

      {/* チャットボタン - 吹き出しスタイル */}
      {!isOpen && (
        <div className="relative">
          {/* 吹き出し本体 */}
          <div 
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2 relative"
          >
            {/* チャットアイコン */}
            <div className="bg-white bg-opacity-20 rounded-lg p-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            {/* テキスト */}
            <div className="text-left leading-none">
              <div className="font-bold text-sm">チャットで</div>
              <div className="font-bold text-sm">問い合わせ</div>
            </div>
            
            {/* 閉じるボタン */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                // 吹き出しを非表示にする状態を追加する場合はここで処理
              }}
              className="absolute -top-1.5 -right-1.5 bg-gray-400 hover:bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* 吹き出しの尻尾 */}
          <div className="absolute bottom-3 right-6 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-blue-500 transform translate-y-full"></div>
        </div>
      )}

      {/* チャットが開いている時の閉じるボタン */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
