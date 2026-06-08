export interface Tech {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
  link: string;
  tech: Tech[];
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: 9,
    title: 'Bulacan Pickleball Center Reservation System',
    role: 'Frontend Developer',
    description: 'A web-based management and booking system that digitizes court reservations, player development, membership tracking, and facility operations for a pickleball center. It provides real-time monitoring and role-based access for admins, coaches, staff, and customers to ensure smooth coordination and secure transactions.',
    image: '/pic/BPCRS.jpg',
    link: 'https://github.com/bcharles4/pickleball_project',
    tech: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Vite', icon: 'devicon-vite-original' },
      { name: 'MySQL 8.0', icon: 'devicon-mysql-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'ngrok', icon: '' },
      { name: 'PayMongo', icon: '' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain' },
    ],
    features: [
      'Digital court reservations and booking management.',
      'Player development and membership tracking.',
      'Role-based access control for admins, coaches, and customers.',
      'Real-time monitoring and secure transactions.'
    ]
  },
  {
    id: 8,
    title: 'Pawfolio - Pet Health Management Platform',
    role: 'Frontend Developer and Document Analyst',
    description: 'A digital platform designed to help pet owners, shelters, adoption centers, and caregivers manage and access pets’ medical records efficiently. It centralizes vaccination histories, treatment records, and microchip information to ensure timely and coordinated care.',
    image: '/pic/PAWFOLIO.jpg',
    link: 'https://pawfolio-five.vercel.app/',
    tech: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
    features: [
      'Centralized pet medical records.',
      'Vaccination history and treatment tracking.',
      'Microchip information management.',
      'Coordination between pet owners and caregivers.'
    ]
  },
  {
    id: 1,
    title: 'BorrowEase - Library Management System',
    role: 'Full Stack Developer',
    description: 'A digital library management system developed to enable efficient book borrowing, tracking, and record management, helping maintain organized library transactions and borrower histories.',
    image: '/pic/borrow.PNG',
    link: 'https://github.com/cedsolano/LIBRARY-MANAGEMENT-SYSTEM',
    tech: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Tkinter', icon: '' },
      { name: 'SQLite3', icon: 'devicon-sqlite-plain' },
    ],
    features: [
      'Efficient book borrowing and tracking.',
      'Organized library transactions management.',
      'Borrower history and record keeping.',
      'User-friendly desktop interface.'
    ]
  },
  {
    id: 2,
    title: 'TuklasPH Mobile App',
    role: 'Full Stack Developer',
    description: 'Designed to promote Filipino wisdom and accessible learning. The platform provides digital access to reading materials and supports an engaging user experience aligned with Sustainable Development Goal 4 (Quality Education).',
    image: '/pic/TuklasPH.jpg',
    link: 'https://app.flutterflow.io/share/tuklasph-uttwd6?page=onboardingPage',
    tech: [
      { name: 'FlutterFlow', icon: '' },
      { name: 'Firebase', icon: 'devicon-firebase-plain' },
    ],
    features: [
      'Digital access to Filipino reading materials.',
      'Engaging user experience for accessible learning.',
      'Aligned with Sustainable Development Goal 4.',
      'Mobile-first cross-platform accessibility.'
    ]
  },
  {
    id: 3,
    title: 'Convert MO’TO – Finance Management System',
    role: 'FrontEnd Developer, Documentation Analyst',
    description: 'A finance management and currency conversion system featuring real-time exchange rate integration, designed to support accurate currency conversion and basic financial tracking.',
    image: '/pic/finance-management.png',
    link: 'https://github.com/HydroX04/exchange-system',
    tech: [
      { name: 'SQLite', icon: 'devicon-sqlite-plain' },
    ],
    features: [
      'Real-time exchange rate integration.',
      'Accurate currency conversion.',
      'Basic financial tracking capabilities.',
      'Intuitive user interface for fast conversions.'
    ]
  },
  {
    id: 4,
    title: 'Online Ordering System',
    role: 'QA, Document Analyst, Project Manager',
    description: 'An online ordering system designed to streamline customer orders and improve café operations. Integrated with POS and IMS to ensure accurate processing and transaction management.',
    image: '/pic/oos.png',
    link: 'https://bleu-oos-rouge.vercel.app/',
    tech: [
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain' },
    ],
    features: [
      'Streamlined customer order processing.',
      'Integration with Point of Sale (POS) system.',
      'Inventory Management System (IMS) syncing.',
      'Accurate transaction and order management.'
    ]
  },
  {
    id: 5,
    title: 'InspiroAI',
    role: 'Full Stack Developer',
    description: 'An AI-powered inspiration platform that generates creative essays and poems using artificial intelligence. Leverages modern frontend technologies and AI integration.',
    image: '/pic/InspiroAI.jpg',
    link: 'https://inspiroai.vercel.app/',
    tech: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      { name: 'Gemini AI', icon: '' },
    ],
    features: [
      'AI-powered essay and poem generation.',
      'Modern, responsive frontend design.',
      'Seamless Gemini AI integration.',
      'Creative inspiration platform.'
    ]
  },
  {
    id: 6,
    title: '7 EVELYN – Inventory Management System',
    role: 'FrontEnd Developer, Project Manager',
    description: 'An inventory management system for a sari-sari store designed to track products, manage stock levels, and support daily business operations.',
    image: '/pic/ims.png',
    link: 'https://github.com/HydroX04/IMSPUP',
    tech: [
      { name: 'C# MVC', icon: 'devicon-csharp-plain' },
      { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain' },
      { name: 'React.js', icon: 'devicon-react-original' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    ],
    features: [
      'Product tracking for retail stores.',
      'Stock level management and alerts.',
      'Support for daily business transactions.',
      'User-friendly dashboard for store owners.'
    ]
  },
  {
    id: 7,
    title: 'ReserveEase – Hotel Management System',
    role: 'Frontend Developer',
    description: 'A comprehensive hotel reservation and management system that handles bookings, room assignments, and guest records, improving operational efficiency.',
    image: '/pic/hotel.PNG',
    link: 'https://github.com/HydroX04/ReserveEasev2',
    tech: [
      { name: 'WinForms', icon: 'devicon-dot-net-plain' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain' },
    ],
    features: [
      'Comprehensive hotel booking handling.',
      'Room assignment and status tracking.',
      'Guest records and details management.',
      'Operational efficiency improvements.'
    ]
  }
];
