import React from 'react';
import type { NavLink, FeatureItem, AmenityCategory, FaqItem, UseCaseItem } from './types';

// Helper for Icon Components
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center">
    {children}
  </div>
);

// Individual Icon Components
const FilmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const PuzzleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CookingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>;
const TvIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const CameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 8 8-4 8.293-8.293a1 1 0 000-1.414L17 5z" /></svg>;
const WifiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export const NAV_LINKS: NavLink[] = [
  { name: 'コンセプト', href: '#concept' },
  { name: '魅力', href: '#features' },
  { name: '設備', href: '#amenities' },
  { name: 'ギャラリー', href: '#gallery' },
  { name: 'アクセス', href: '#access' },
  { name: 'Q&A', href: '#faq' },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: <IconWrapper><LocationIcon /></IconWrapper>,
    title: 'JR八王子駅から<br />徒歩2分の好立地',
    description: 'JR八王子駅からたったの2分。重い荷物があっても、雨の日でも安心の駅チカです。集合も買い出しも楽々だから、時間を最大限有効に使って、思う存分パーティーを楽しもう！',
    imageUrl: './image/hachioji.jpg',
  },
  {
    icon: <IconWrapper><CookingIcon /></IconWrapper>,
    title: 'たこ焼き器や卓上鍋など<br />キッチン＆調理器具完備',
    description: 'たこ焼き器や卓上鍋、チーズフォンデュ鍋、お皿やカトラリーなど、パーティが楽しくなるキッチン設備が充実しています！食材を持ち寄るだけですぐに本格的なおうちごはんが楽しめます。',
    imageUrl: './image/jimospa (10).webp',
  },
  {
    icon: <IconWrapper><PuzzleIcon /></IconWrapper>,
    title: '時間を忘れる、<br />10種類以上のボードゲーム',
    description: '会話がもっと弾む、定番から最新まで10種類以上のボードゲームをご用意しました。初めての人も、得意な人も、みんなで笑い合えば、忘れられない思い出になること間違いなし！',
    imageUrl: './image/jimospa (5).webp',
  },
  {
    icon: <IconWrapper><FilmIcon /></IconWrapper>,
    title: 'Netflix、U-NEXTが見放題！<br />推し活も映画、スポーツ観戦も。',
    description: 'NetflixとU-NEXTが見放題！気になっていたドラマや映画、推しのライブ映像、プレミアリーグ等も、大好きな仲間と一緒に大画面で楽しめます。',
    imageUrl: './image/netflix.jpg',
  },
  {
    icon: <IconWrapper><TvIcon /></IconWrapper>,
    title: '55型大型テレビで<br />DVD・Blu-rayが見れる',
    description: '55型の大型テレビにDVD/Blu-rayプレイヤーを完備。お気に入りのアーティストのライブディスクや、懐かしい思い出の映像をみんなで鑑賞すれば、盛り上がること間違いなし！',
    imageUrl: './image/tv.png',
  },
  {
    icon: <IconWrapper><ClockIcon /></IconWrapper>,
    title: '24時間営業だから<br />時間を気にせず楽しめる。',
    description: '24時間営業だから、終電を気にせず朝まで語り明かせます。おしゃべりしたり、映画を見たり、ゲームをしたり…。誰にも邪魔されない空間で、思いのままの特別な時間をお過ごしください。',
    imageUrl: './image/jimospa (3).webp',
  },
];

const AmenityIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-yellow-500 mr-2">{children}</span>
);
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;

export const AMENITIES: AmenityCategory[] = [
  {
    category: '📺 リビング設備',
    items: [
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '55型大型テレビ' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'DVD、Blu-rayプレイヤー' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '冷蔵庫' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '電子レンジ' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '電気ケトル' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'Bluetoothスピーカー' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'ソファ×2' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'テーブル×3' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '高速Wi-Fi (光回線)' },
    ],
  },
  {
    category: '🍳 キッチン設備',
    items: [
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'IHコンロ（一口）' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'ホットプレート' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'たこ焼き機×2台' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'チーズフォンデュ鍋' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '鍋' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'フライパン' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '調理器具＆食器類' },
    ],
  },
  {
    category: '🎲 ボードゲーム各種',
    items: [
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '大逆転人生ゲーム' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'ito' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'カタン' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'マーダーミステリー' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'ワンナイト人狼' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'UNO' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'トランプ' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'はぁって言うゲーム4' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: '恐竜ワニワニパニック' },
      { icon: <AmenityIcon><CheckIcon/></AmenityIcon>, name: 'カラフルバランスゲーム' },
    ],
  },
];

export const USE_CASES: UseCaseItem[] = [
    {
        title: '女子会・ママ会',
        description: 'おしゃれな空間で、周りを気にせず朝まで語り明かす。子連れママ会でも安心してご利用いただけます。',
        imageUrl: './image/women.png'
    },
    {
        title: '誕生日会・記念日',
        description: 'サプライズの飾り付けも自由自在。大切な人との特別な日を、プライベート空間で心ゆくまでお祝いできます。',
        imageUrl: './image/birthday.png'
    },
    {
        title: '推し活・鑑賞会',
        description: '55型の大型テレビで、ライブDVDや映画を臨場感たっぷりに楽しめます。Netflix、U-NEXTも見放題！',
        imageUrl: './image/movie.png'
    },
    {
        title: 'イベント会場',
        description: 'セミナーや会議、ワークショップなど、様々なイベントにご活用いただけます。',
        imageUrl: './image/event.png'
    },
];

export const FAQS: FaqItem[] = [
  {
    question: '最大何人まで利用できますか？',
    answer: '最大で12人までご利用いただけます。',
  },
  {
    question: '飲食物の持ち込みは可能ですか？',
    answer: 'はい、可能です。キッチンもご自由にお使いいただけますので、調理もしていただけます。デリバリーの利用もOKです。',
  },
  {
    question: '後片付けはどこまですれば良いですか？',
    answer: 'ご利用時間内に、セルフクリーニングをお願いしております。詳細なルールは予約完了後にご案内いたします。',
  },
  {
    question: 'サプライズで飾り付けをしたいのですが…',
    answer: 'はい、可能です。壁に穴を開けないテープなどをご利用いただければ、自由に飾り付けをお楽しみいただけます。',
  },
  {
    question: '利用料金の支払い方法を教えてください。',
    answer: '料金の確認およびお支払いは、すべて予約サイトにて行なっております。各種クレジットカードなどがご利用いただけます。',
  },
];
