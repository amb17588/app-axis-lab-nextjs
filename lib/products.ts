export interface Product {
  id: string
  title: string
  category: string
  filterCategory: string
  desc: string
  img: string
  features: string[]
  tech: string[]
  playstore: string
  privacyPolicy?: string
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Walkmates',
    category: 'Health & Fitness',
    filterCategory: 'apps',
    desc: 'A community-driven walking app that transforms everyday steps into shared adventures. Set goals, join group challenges, and track your journey with friends in real time.',
    img: '/image/walkmates.png',
    features: ['GPS Route Tracking', 'Community Challenges', 'Step & Calorie Counter', 'Friend Leaderboards'],
    tech: ['React Native', 'Google Health Connect', 'Apple HealthKit', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
  },
  {
    id: '2',
    title: 'Artify: AR Trace & Sketch',
    category: 'AR / Creative',
    filterCategory: 'creative apps',
    desc: 'An AR-powered creative studio that lets you project and trace real-world objects onto your canvas, then refine them into polished digital illustrations with professional sketch tools.',
    img: '/image/artify.png',
    features: ['AR Object Projection', 'Layered Sketch Canvas', 'Export to PNG / SVG', 'Real-time Brush Engine'],
    tech: ['React Native', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/details?id=com.appaxislab.artify.draw.trace.sketch',
    privacyPolicy: '/artify_privacy',
  },
  {
    id: '3',
    title: 'Ismart Translator',
    category: 'Productivity',
    filterCategory: 'utilities apps',
    desc: 'Instant voice and text translation across 100+ languages. Features offline mode, camera OCR for sign and document translation, and conversation mode for two-way real-time dialogue.',
    img: '/image/ismart.png',
    features: ['100+ Language Support', 'Voice & Camera Translation', 'Offline Mode', 'Conversation Mode'],
    tech: ['React Native', 'Kotlin'],
    playstore: 'https://play.google.com/store/apps/details?id=com.appaxislab.translyapp',
    privacyPolicy: '/ismarttranslator_privacy',
  },
  {
    id: '4',
    title: 'All Document Reader: AI & Docs',
    category: 'Productivity',
    filterCategory: 'utilities apps',
    desc: 'A universal document reader that handles every major file format — PDF, Word, Excel, PowerPoint, and more — with AI-powered summarization, smart search, and annotation tools built in.',
    img: '/image/docreader.png',
    features: ['All Format Support (PDF, DOCX, XLSX, PPT)', 'AI Document Summarization', 'Smart Search & Annotations', 'Cloud & Local File Access'],
    tech: ['React Native', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/details?id=com.appaxislab.pdf.reader.ai.summary',
    privacyPolicy: '/pdfreader_privacy',
  },
  {
    id: '5',
    title: 'Wallpaper App',
    category: 'Lifestyle',
    filterCategory: 'apps',
    desc: 'A curated wallpaper platform with thousands of high-quality backgrounds. Browse community uploads, save your favorites, and share your own creations with a thriving visual community.',
    img: '/image/logo.png',
    features: ['Curated HD Wallpaper Library', 'Community Uploads & Sharing', 'Favorites Sync Across Devices', 'Google & Apple Sign-In'],
    tech: ['React Native', 'Firebase', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
    privacyPolicy: '/wallpaper_privacy',
  },
  {
    id: '6',
    title: 'AI Phone Storage Cleaner',
    category: 'Utilities',
    filterCategory: 'utilities',
    desc: 'A smart storage optimizer that scans your device for junk files, large files, and unused apps — freeing up space and boosting performance with one tap.',
    img: '/image/logo.png',
    features: ['Junk & Cache File Cleaner', 'Large File Scanner', 'Unused App Detector', 'Real-time Storage Analysis'],
    tech: ['Kotlin', 'Android SDK', 'Firebase'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
    privacyPolicy: '/phonecleaner_privacy',
  },
  {
    id: '7',
    title: 'Settlo',
    category: 'Finance',
    filterCategory: 'apps',
    desc: 'A shared expense management app that makes splitting bills effortless. Track group expenses, settle debts, and keep everyone on the same page — for trips, households, and more.',
    img: '/image/logo.png',
    features: ['Group Expense Tracking', 'Smart Bill Splitting', 'Debt Settlement Reminders', 'Expense History & Reports'],
    tech: ['React Native', 'Firebase', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
    privacyPolicy: '/settlo_privacy_policy',
  },
  {
    id: '8',
    title: 'AxisFlow Period Tracker',
    category: 'Health & Fitness',
    filterCategory: 'apps',
    desc: 'A private, AI-assisted period and cycle tracker that helps you understand your body. Log symptoms, predict cycles, and get personalized health insights — all stored securely on-device.',
    img: '/image/logo.png',
    features: ['Cycle Prediction & Tracking', 'Symptom & Mood Logging', 'AI Health Insights', 'On-Device Private Storage'],
    tech: ['React Native', 'Apple HealthKit', 'Kotlin', 'Swift'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
    privacyPolicy: '/periodtracker-policy',
  },
  {
    id: '9',
    title: 'Habbit Tracker',
    category: 'Productivity',
    filterCategory: 'apps',
    desc: 'A powerful habit-building app that transforms daily routines into lasting change. Track streaks, follow expert-designed journeys, unlock achievements, and gain deep insights into your progress.',
    img: '/image/logo.png',
    features: ['Streak & Achievement System', 'Expert Habit Journeys', 'Local-First Private Storage', 'Analytics & Progress Reports'],
    tech: ['React Native', 'Realm', 'Firebase', 'RevenueCat'],
    playstore: 'https://play.google.com/store/apps/developer?id=App+Axis+Lab',
    privacyPolicy: '/habbit_tracker_privacy',
  },
]
