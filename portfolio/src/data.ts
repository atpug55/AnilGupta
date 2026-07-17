import { Skill, Project, EducationItem, YouTubeVideo, ServiceItem } from './types';

export const PERSONAL_INFO = {
  name: 'Anil Gupta',
  title: 'BCA Student | Web Developer | Tech Enthusiast',
  taglines: [
    'BCA Student @ Tribhuvan University',
    'Full-Stack Web Development Learner',
    'Tech Content Creator @ BUILD WITH ATPUG',
    'Future Software Engineer & Entrepreneur',
    'Disaster Management Tech Innovator'
  ],
  location: 'Tulsipur, Dang, Nepal',
  education: 'Bachelor of Computer Applications (BCA)',
  currentSemester: '4th Semester',
  university: 'Tribhuvan University, Nepal',
  languages: ['English', 'Nepali', 'Hindi'],
  avatarUrl: '/src/assets/images/anil_gupta_avatar_1784303199404.jpg',
  aboutIntro: `I'm a passionate 4th semester BCA student at Tribhuvan University with a deep fascination for turning ideas into clean, functional code. Balancing academic learning with hands-on web development, I love creating modern user experiences and diving into emerging technologies like IoT, AI, and disaster prevention systems.`,
  aboutDetailed: `Growing up with a family entrepreneurial background at Shree Ganapati Trade and Suppliers, I understand how business and tech can merge to solve everyday problems. In addition to coding, I share my knowledge with the tech community through my YouTube channel, "BUILD WITH ATPUG," where I make complex web concepts accessible to learners. I'm actively working to expand my skills from basic scripting to robust system design, with the ultimate goal of developing software that saves lives and powers businesses in Nepal.`,
  githubUsername: 'anilatpug',
  youtubeChannel: 'BUILD WITH ATPUG',
  youtubeDescription: 'BUILD WITH ATPUG is an educational technology hub focused on providing high-quality, practical tutorials on web development, programming concepts, custom website builds, and smart tech integration. Learn step-by-step how to turn concepts into real-world projects.',
  youtubeUrl: 'https://youtube.com/@buildwithatpug', // example, update or placeholder
  cvDownloadUrl: '#',
  businessInfo: {
    name: 'Shree Ganapati Trade and Suppliers',
    description: 'Wholesale Kitchen Items, Hardware Tools, Plastic Items, Digital Weight Machines, Household Products',
    location: 'Tulsipur, Dang, Nepal'
  }
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML & CSS', progress: 95, iconName: 'FileCode2', category: 'Frontend' },
  { name: 'JavaScript', progress: 85, iconName: 'Flame', category: 'Frontend' },
  { name: 'Web Development', progress: 90, iconName: 'Layout', category: 'Frontend' },
  { name: 'WordPress Setup', progress: 88, iconName: 'Globe', category: 'Frontend' },
  
  // Backend & Database
  { name: 'PHP', progress: 75, iconName: 'Database', category: 'Backend & Database' },
  { name: 'MySQL', progress: 78, iconName: 'HardDrive', category: 'Backend & Database' },
  
  // Tools & Platforms
  { name: 'Git & GitHub', progress: 80, iconName: 'GitBranch', category: 'Tools & Platforms' },
  { name: 'AI Prompt Engineering & Tools', progress: 85, iconName: 'Cpu', category: 'Tools & Platforms' },
  
  // Other Interests
  { name: 'Basic C++', progress: 70, iconName: 'Code', category: 'Other Interests' },
  { name: 'IoT & ESP32 Basics', progress: 65, iconName: 'Radio', category: 'Other Interests' }
];

export const PROJECTS: Project[] = [
  {
    title: 'LifeLine Nepal',
    description: 'A smart, AI-powered disaster intelligence and emergency response platform designed specifically for Nepal. It integrates IoT sensors for early flood/landslide detection, GIS mapping, real-time localized alerts, citizen SOS reporting, drone surveillance integration, and multi-agency rescue coordination.',
    tags: ['IoT Basics', 'PHP', 'MySQL', 'JavaScript', 'Google Maps API', 'Disaster Tech'],
    imageUrl: '/src/assets/images/lifeline_nepal_1784303221596.jpg',
    githubUrl: 'https://github.com/anilatpug/lifeline-nepal',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A premium, modern developer portfolio showcasing academic journey, technical skills, entrepreneurship, and YouTube creations. Features fully responsive glassmorphism aesthetic, smooth transitions, dark/light mode, and custom GitHub stats visualizer.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/anilatpug/portfolio-v2',
    liveUrl: '#',
    featured: false
  },
  {
    title: 'Supplier Inventory & Billing System',
    description: 'A customized local web dashboard designed for inventory management, stock alerts, and quick retail invoicing, inspired by the daily wholesale operations of Shree Ganapati Trade and Suppliers.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/anilatpug/ganapati-suppliers-inventory',
    liveUrl: '#',
    featured: false
  },
  {
    title: 'ESP32 Flood Warning Simulator',
    description: 'A physical computing project utilizing an ESP32 microcontroller with ultrasonic distance sensors to monitor water level fluctuations and transmit immediate alerts to a web server via Wi-Fi.',
    tags: ['C++', 'Arduino IDE', 'IoT', 'ESP32', 'Websockets'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/anilatpug/esp32-flood-warning',
    liveUrl: '#',
    featured: false
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Secondary Education Exam (SEE)',
    institution: 'Gorkha Secondary School',
    location: 'Tulsipur, Dang, Nepal',
    duration: 'Completed - 2018',
    description: 'Achieved high academic standing with a strong foundation in computer science and basic mathematics.',
    status: 'Completed'
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education (+2 Science)',
    institution: 'Gorkha Secondary School',
    location: 'Tulsipur, Dang, Nepal',
    duration: '2018 - 2020',
    description: 'Focused on Physics, Chemistry, Mathematics, and Computer Science. Developed early programming skills and basic algorithm understandings.',
    status: 'Completed'
  },
  {
    id: 'edu-3',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Tribhuvan University Affiliated College',
    location: 'Dang, Nepal',
    duration: '2022 - Present (Currently in 4th Semester)',
    description: 'In-depth academic syllabus covering software engineering, data structures, database management systems, web technology, object-oriented programming, and computer networks.',
    status: 'Ongoing'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Building custom, secure, and modern web applications utilizing robust frontend and database integrations.',
    iconName: 'Code2'
  },
  {
    title: 'Website Design',
    description: 'Crafting responsive, clean, and user-centric layouts optimized for rapid load times and stunning aesthetics.',
    iconName: 'Palette'
  },
  {
    title: 'WordPress Setup',
    description: 'Setting up high-performance WordPress themes, business sites, WooCommerce storefronts, and plugin configurations.',
    iconName: 'Globe'
  },
  {
    title: 'Basic Technical Consulting',
    description: 'Providing business automation, digital weight scale integration consulting, local network, and smart hardware advice.',
    iconName: 'HelpCircle'
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    title: 'How to Build a Custom PHP and MySQL Website - Step-by-Step for Beginners',
    videoId: 'example-video-1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
    duration: '24:15',
    views: '1.2K views'
  },
  {
    title: 'Introduction to ESP32: Connecting Ultrasonic Sensors to Web Applications',
    videoId: 'example-video-2',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800',
    duration: '18:40',
    views: '850 views'
  },
  {
    title: 'WordPress Optimization Guide: Speed Up Your Elementor Website in 10 Mins',
    videoId: 'example-video-3',
    thumbnailUrl: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&q=80&w=800',
    duration: '12:05',
    views: '2.4K views'
  }
];

export const INTERESTS = [
  { name: 'Software Development', icon: 'Terminal' },
  { name: 'Artificial Intelligence', icon: 'Brain' },
  { name: 'IoT Projects (ESP32 / Arduino)', icon: 'Cpu' },
  { name: 'Disaster Management Tech', icon: 'ShieldAlert' },
  { name: 'Entrepreneurship & Startups', icon: 'TrendingUp' },
  { name: 'YouTube Content Creation', icon: 'Youtube' },
  { name: 'Open Source Contributions', icon: 'Github' },
  { name: 'Wholesale Trade Automation', icon: 'Store' }
];
