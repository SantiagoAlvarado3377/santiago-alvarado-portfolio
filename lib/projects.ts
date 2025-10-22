import type { Project } from "./types"

export const projects: Project[] = [
  {
    title: "QuantLLM",
    slug: "quantllm",
    excerpt: "AI-Driven Multi-Agent Market Analysis Platform",
    description: `QuantLLM is a multi-agent trading intelligence system that transforms real-time OHLCV data into explainable insights rather than predictions. Built for transparency, it uses agents that interpret RSI, MACD, and ROC indicators, candlestick patterns, trend signals, and custom risk controls.

The system summarizes market conditions with natural-language analysis powered by Gemini AI, helping users understand momentum and volatility without black-box forecasting.

Core features include a multi-agent design for Indicator, Pattern, Trend, and Risk analysis, a real-time OHLCV dashboard with visual signals and CSV export, AI-generated plain-language explanations of technical signals, and synthetic data fallback for offline resilience.

Outcome: Provides transparent, educational analytics for crypto, stocks, and forex traders—bridging quantitative metrics with AI explainability.`,
    images: ["/quantllm.jpg"],
    stack: ["TypeScript", "Node.js", "React", "Tailwind CSS", "Alpha Vantage API", "Gemini API"],
    repoUrl: "https://github.com/SantiagoAlvarado3377/quantllm",
    category: "AI/ML",
    lastUpdated: "2025-10-22",
  },
  {
    title: "Roomies",
    slug: "roomies",
    excerpt: "Roommate-matching and blog platform for Sacramento State students",
    description: `Roomies is a comprehensive web platform designed to help Sacramento State students find compatible roommates and share their living experiences through an integrated blog system.

The platform features a sophisticated matching algorithm that considers lifestyle preferences, study habits, and living requirements to suggest compatible roommates. Students can create detailed profiles, browse potential matches, and connect with others looking for housing.

The integrated blog system allows users to share tips, experiences, and advice about student housing, creating a supportive community around the roommate-finding process.`,
    images: ["/roommate-matching-web-app-interface.jpg"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma"],
    repoUrl: "https://github.com/santiago/roomies",
    demoUrl: "https://roomies-demo.vercel.app",
    category: "Web App",
    lastUpdated: "2025-01-15",
  },
  {
    title: "Professor Toad",
    slug: "professor-toad",
    excerpt: "Educational game for City of Davis teaching environmental concepts",
    description: `Professor Toad is an interactive educational game developed for the City of Davis to teach children about environmental conservation and sustainability.

Built in Unity, the game features engaging gameplay mechanics where players help Professor Toad navigate through various environmental challenges, learning about recycling, water conservation, and ecosystem protection along the way.

The game includes multiple levels, each focusing on different environmental topics, with mini-games and quizzes to reinforce learning. It has been deployed in local schools and community centers, reaching hundreds of students.`,
    images: ["/educational-game-with-cartoon-toad-character.jpg"],
    stack: ["Unity", "C#", "Game Design", "Educational Technology"],
    repoUrl: "https://github.com/santiago/professor-toad",
    category: "Game Development",
    lastUpdated: "2024-11-20",
  },
  {
    title: "Resume Screener",
    slug: "resume-screener",
    excerpt: "AI-powered resume triage system using NLP and machine learning",
    description: `An intelligent resume screening system that uses natural language processing and machine learning to automatically analyze and rank resumes based on job requirements.

The system employs spaCy for entity recognition and BERT for semantic understanding, allowing it to identify relevant skills, experience, and qualifications from unstructured resume text. It can process hundreds of resumes in minutes, providing recruiters with ranked candidates and detailed analysis.

Built with FastAPI for high-performance API endpoints, the system integrates seamlessly with existing applicant tracking systems and provides real-time screening results.`,
    images: ["/ai-resume-screening-dashboard-interface.jpg"],
    stack: ["Python", "spaCy", "BERT", "FastAPI", "scikit-learn", "PostgreSQL"],
    repoUrl: "https://github.com/santiago/resume-screener",
    demoUrl: "https://resume-screener-demo.vercel.app",
    category: "AI/ML",
    lastUpdated: "2024-12-10",
  },
  {
    title: "DeepDrive",
    slug: "deepdrive",
    excerpt: "Lane detection and reinforcement learning control system for autonomous vehicles",
    description: `DeepDrive is an autonomous driving research project that combines computer vision for lane detection with reinforcement learning for vehicle control.

The lane detection module uses PyTorch and OpenCV to process real-time video feeds, identifying lane markings and road boundaries with high accuracy. The system employs convolutional neural networks trained on diverse road conditions.

The control system uses deep reinforcement learning algorithms to make driving decisions based on the detected lane information, learning optimal steering and speed control through simulation and real-world testing.`,
    images: ["/autonomous-vehicle-lane-detection-visualization.jpg"],
    stack: ["Python", "PyTorch", "OpenCV", "Reinforcement Learning", "Computer Vision"],
    repoUrl: "https://github.com/santiago/deepdrive",
    category: "AI/ML",
    lastUpdated: "2024-10-05",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}
