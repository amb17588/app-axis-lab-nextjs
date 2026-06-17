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
  },
]
