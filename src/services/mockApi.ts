// Mock API service for the portfolio app
import projectAcademic from "@/assets/hero-bg.jpg";
import projectIot from "@/assets/hero-bg.jpg";
import projectEcommerce from "@/assets/hero-bg.jpg";
import avatarAna from "@/assets/hero-bg.jpg";
import avatarCarlos from "@/assets/hero-bg.jpg";
import avatarMaria from "@/assets/hero-bg.jpg";
import avatarDiego from "@/assets/hero-bg.jpg";
import processBocetos from "@/assets/process/bocetos.jpg";
import processBocetos1 from "@/assets/process/bocetos1.jpeg";
import processBocetos2 from "@/assets/process/bocetos2.jpeg";
import processBocetos3 from "@/assets/process/bocetos3.jpeg";
import processBocetos4 from "@/assets/process/bocetos4.jpeg";
import processBocetos5 from "@/assets/process/bocetos5.jpeg";
import processEscena from "@/assets/process/escena.jpg";
import processEscena1 from "@/assets/process/escena1.jpeg";
import processEscena2 from "@/assets/process/escena2.jpeg";
import processEscena3 from "@/assets/process/escena3.jpeg";
import processEscena4 from "@/assets/process/escena4.jpeg";
import processEscena5 from "@/assets/process/escena5.jpeg";
import processMaqueta from "@/assets/process/maqueta.jpg";
import processMaqueta2 from "@/assets/process/maqueta2.jpeg";

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
    linkedin?: string;
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
        { type: 'image', src: processBocetos},
        { type: 'image', src: processBocetos2},
        { type: 'image', src: processBocetos3},
        { type: 'image', src: processBocetos4},
        { type: 'image', src: processBocetos5}
      ],
      links: []
    },
    {
      id: 2,
      title: 'Escenificación (role-play)',
      summary: 'Ensayo con objetos reales (linterna, crucifijo y biblia) para validar mecánicas base.',
      media: [
        { type: 'image', src: processEscena2},
        { type: 'image', src: processEscena},
        { type: 'image', src: processEscena3},
        { type: 'image', src: processEscena4},
        { type: 'image', src: processEscena5}
      ],
      links: []
    },
    {
      id: 3,
      title: 'Maqueta interactiva',
      summary: 'Prototipo a escala: control del personaje y navegación por todo el entorno.',
      media: [
        { type: 'image', src: processMaqueta},
        { type: 'image', src: processMaqueta2}
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
    name: 'Ana García',
    role: 'Full Stack Developer',
    avatar: avatarAna,
    skills: ['React', 'Node.js', 'TypeScript'],
    links: {
      github: 'https://github.com/anagarcia',
      linkedin: 'https://linkedin.com/in/anagarcia'
    }
  },
  {
    name: 'Carlos López',
    role: 'DevOps Engineer',
    avatar: avatarCarlos,
    skills: ['Docker', 'AWS', 'Kubernetes'],
    links: {
      github: 'https://github.com/carloslopez',
      linkedin: 'https://linkedin.com/in/carloslopez'
    }
  },
  {
    name: 'María Rodríguez',
    role: 'UX/UI Designer',
    avatar: avatarMaria,
    skills: ['Figma', 'Adobe XD', 'Design Systems'],
    links: {
      github: 'https://github.com/mariarodriguez',
      linkedin: 'https://linkedin.com/in/mariarodriguez'
    }
  },
  {
    name: 'Diego Martínez',
    role: 'Data Scientist',
    avatar: avatarDiego,
    skills: ['Python', 'TensorFlow', 'SQL'],
    links: {
      github: 'https://github.com/diegomartinez',
      linkedin: 'https://linkedin.com/in/diegomartinez'
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