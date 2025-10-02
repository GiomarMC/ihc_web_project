// Mock API service for the portfolio app
import projectAcademic from "@/assets/hero-bg.jpg";
import projectIot from "@/assets/hero-bg.jpg";
import projectEcommerce from "@/assets/hero-bg.jpg";
import avatarAna from "@/assets/hero-bg.jpg";
import avatarCarlos from "@/assets/hero-bg.jpg";
import avatarMaria from "@/assets/hero-bg.jpg";
import avatarDiego from "@/assets/hero-bg.jpg";

export interface Project {
  id: string;
  title: string;
  cover: string;
  description: string;
  tags: string[];
  gallery: string[];
  links: {
    demo?: string;
    repo: string;
  };
}

export interface ProcessMedia {
  type: 'image' | 'video' | 'gif';
  src: string;
  alt?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  media: ProcessMedia[];
  summary: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

export interface Process {
  steps: ProcessStep[];
}

export interface Repository {
  id: string;
  title: string;
  codeGif: string;
  resultGif: string;
  repoUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  links: {
    github?: string;
    mail?: string;
  };
}

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Gestión Académica',
    cover: projectAcademic,
    description: 'Plataforma web para administrar estudiantes, cursos y calificaciones con interfaz moderna y responsive.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    gallery: [projectAcademic, projectAcademic],
    links: {
      demo: 'https://demo.example.com',
      repo: 'https://github.com/example/academic-system'
    }
  },
  {
    id: '2',
    title: 'App de Monitoreo IoT',
    cover: projectIot,
    description: 'Aplicación móvil para monitorear sensores IoT en tiempo real con dashboards interactivos.',
    tags: ['React Native', 'Python', 'MQTT', 'InfluxDB'],
    gallery: [projectIot],
    links: {
      repo: 'https://github.com/example/iot-monitor'
    }
  },
  {
    id: '3',
    title: 'E-commerce Sostenible',
    cover: projectEcommerce,
    description: 'Marketplace enfocado en productos eco-friendly con sistema de puntos de sustentabilidad.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    gallery: [projectEcommerce, projectEcommerce, projectEcommerce],
    links: {
      demo: 'https://eco-shop.example.com',
      repo: 'https://github.com/example/eco-commerce'
    }
  }
];

const mockProcess: Process = {
  steps: [
    {
      id: 1,
      title: 'Bosquejos (low-fi)',
      summary: 'Bocetos en papel, mapa del departamento y reglas básicas del juego.',
      media: [
        { type: 'image', src: '/process/bocetos.jpg' },
        { type: 'image', src: '/process/bocetos2.jpeg' },
        { type: 'image', src: '/process/bocetos3.jpeg' },
        { type: 'image', src: '/process/bocetos4.jpeg' },
        { type: 'image', src: '/process/bocetos5.jpeg' }
      ],
      links: []
    },
    {
      id: 2,
      title: 'Escenificación (role-play)',
      summary: 'Ensayo con objetos reales (linterna, crucifijo y biblia) para validar mecánicas base.',
      media: [
        { type: 'image', src: '/process/escena2.jpeg' },
        { type: 'image', src: '/process/escena.jpg' },
        { type: 'image', src: '/process/escena3.jpeg' },
        { type: 'image', src: '/process/escena4.jpeg' },
        { type: 'image', src: '/process/escena5.jpeg' }
      ],
      links: []
    },
    {
      id: 3,
      title: 'Maqueta interactiva',
      summary: 'Prototipo a escala: control del personaje y navegación por todo el entorno.',
      media: [
        { type: 'image', src: '/process/maqueta.jpg' },
        { type: 'image', src: '/process/maqueta2.jpeg' }
      ],
      links: []
    }
  ]
};


const mockRepos: Repository[] = [
  {
    id: '1',
    title: 'React Dashboard',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/react-dashboard'
  },
  {
    id: '2',
    title: 'API REST Node.js',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/nodejs-api'
  },
  {
    id: '3',
    title: 'Mobile App Flutter',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/flutter-app'
  },
  {
    id: '4',
    title: 'ML Data Pipeline',
    codeGif: '/placeholder.svg',
    resultGif: '/placeholder.svg',
    repoUrl: 'https://github.com/example/ml-pipeline'
  }
];

const mockTeam: TeamMember[] = [
  {
    name: 'Leonardo Gaona Briceño',
    role: 'Programador',
    avatar: avatarCarlos,
    skills: ['C#', 'Unity', 'C++'],
    links: {
      github: 'https://github.com/LeonardoGB29',
      mail: 'mailto:lgaonab@unsa.edu.pe'
    }
  },
  {
    name: 'Giomar Muñoz Curi',
    role: 'Programador',
    avatar: avatarAna,
    skills: ['React', 'Unity', 'TypeScript'],
    links: {
      github: 'https://github.com/GiomarMC',
      mail: 'mailto:gmunozcu@unsa.edu.pe'
    }
  },
  {
    name: 'Joselyn Quispe Huanca',
    role: 'Programadora',
    avatar: avatarMaria,
    skills: ['React', 'TypeScript', 'CSS'],
    links: {
      github: 'https://github.com/SabinaPia',
      mail: 'mailto:joquispehua@unsa.edu.pe'
    }
  },
  {
    name: 'Kristopher Rospigliosi Gonzales',
    role: 'Programador',
    avatar: avatarDiego,
    skills: ['TypeScript', 'C#', 'C++'],
    links: {
      github: 'https://github.com/krospigliosig',
      mail: 'mailto:krospigliosig@unsa.edu.pe'
    }
  }
];

// Mock API functions
export const api = {
  getProjects: (): Promise<Project[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockProjects), 300)),
    
  getProcess: (): Promise<Process> => 
    new Promise(resolve => setTimeout(() => resolve(mockProcess), 600)),
    
  getRepositories: (): Promise<Repository[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockRepos), 700)),
    
  getTeam: (): Promise<TeamMember[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockTeam), 500)),
};