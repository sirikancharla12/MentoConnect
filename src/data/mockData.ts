import { Users, BookOpen, Code, Brain, Target, TrendingUp, MessageSquare } from 'lucide-react';

export const mentors = [
  {
    id: "1",
    name: "Alice Johnson",
    title: "Senior Software Engineer",
    company: "Google",
    about: "Passionate about teaching web development and software architecture.",
    expertise: ["JavaScript", "React", "Node.js", "System Design"],
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.9,
    reviews: 120,
    hourlyRate: 150,
    sessionsCompleted: 300,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: "2",
    name: "Bob Smith",
    title: "Cloud Architect",
    company: "Amazon AWS",
    about: "Experienced in cloud computing, DevOps, and scalable systems.",
    expertise: ["AWS", "Kubernetes", "Terraform", "DevOps"],
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.8,
    reviews: 95,
    hourlyRate: 200,
    sessionsCompleted: 250,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Charlie Lee",
    title: "AI/ML Engineer",
    company: "OpenAI",
    about: "Helping students and professionals dive into machine learning and AI.",
    expertise: ["Python", "TensorFlow", "NLP", "Deep Learning"],
    availability: ["Monday", "Thursday", "Sunday"],
    rating: 4.7,
    reviews: 80,
    hourlyRate: 180,
    sessionsCompleted: 220,
    imageUrl: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: "4",
    name: "Diana Patel",
    title: "Frontend Developer",
    company: "Netflix",
    about: "Love mentoring on UI/UX design and frontend development.",
    expertise: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    availability: ["Wednesday", "Friday", "Saturday"],
    rating: 4.6,
    reviews: 60,
    hourlyRate: 120,
    sessionsCompleted: 150,
    imageUrl: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    id: "5",
    name: "Edward Kim",
    title: "Cybersecurity Expert",
    company: "Microsoft",
    about: "Specializing in cybersecurity, ethical hacking, and network security.",
    expertise: ["Cybersecurity", "Ethical Hacking", "Penetration Testing"],
    availability: ["Tuesday", "Thursday", "Sunday"],
    rating: 4.9,
    reviews: 110,
    hourlyRate: 250,
    sessionsCompleted: 275,
    imageUrl: "https://randomuser.me/api/portraits/men/53.jpg"
  }
];

export const categories = [
  {
    id: 1,
    name: "Software Development",
    icon: Code,
    count: 450
  },
  {
    id: 2,
    name: "Data Science",
    icon: Brain,
    count: 280
  },
  {
    id: 3,
    name: "UX/UI Design",
    icon: Target,
    count: 320
  },
  {
    id: 4,
    name: "Product Management",
    icon: TrendingUp,
    count: 180
  },
  {
    id: 5,
    name: "Business Strategy",
    icon: BookOpen,
    count: 220
  }
];

export const communities = [
  {
    id: 1,
    name: "Frontend Masters",
    members: 1250,
    topics: ["React", "Vue", "Angular"],
    icon: Code,
    description: "A community for frontend developers to share knowledge and best practices",
    activeDiscussions: 45,
    weeklyMeetups: true
  },
  {
    id: 2,
    name: "AI Innovators",
    members: 890,
    topics: ["Machine Learning", "Deep Learning", "NLP"],
    icon: Brain,
    description: "Discussing the latest in AI and machine learning technologies",
    activeDiscussions: 32,
    weeklyMeetups: true
  },
  {
    id: 3,
    name: "Design Think Tank",
    members: 760,
    topics: ["UI/UX", "Product Design", "Design Systems"],
    icon: Target,
    description: "For designers to collaborate and share inspiration",
    activeDiscussions: 28,
    weeklyMeetups: false
  }
];

export const mockAnalytics = {
  sessionStats: {
    totalSessions: 156,
    completionRate: 94,
    averageRating: 4.8,
    totalHours: 234
  },
  revenueStats: {
    totalRevenue: 12580,
    monthlyGrowth: 15,
    averageSessionPrice: 85,
    topEarningTopic: "System Design"
  },
  learningProgress: {
    completedMilestones: 12,
    activeCourses: 3,
    skillsImproved: 8,
    nextMilestone: "Advanced System Design"
  },
  popularTopics: [
    { name: "React", sessions: 45 },
    { name: "System Design", sessions: 38 },
    { name: "Machine Learning", sessions: 32 },
    { name: "Cloud Architecture", sessions: 28 }
  ]
};

export const mockUsers = {
  mentors: [
    {
      email: "mentor@example.com",
      password: "mentor123",
      role: "mentor",
      name: "David Chen",
      title: "Senior Software Engineer",
      expertise: ["React", "System Design", "JavaScript"],
      yearsOfExperience: 10
    }
  ],
  mentees: [
    {
      email: "mentee@example.com",
      password: "mentee123",
      role: "mentee",
      name: "Alex Johnson",
      interests: ["Web Development", "Machine Learning"],
      level: "Intermediate"
    }
  ]
};

export const Mentor=[
  {
    id: 1,
    name: "Alice Johnson",
    title: "Senior Software Engineer",
    company: "Google",
    about: "Passionate about teaching web development and software architecture.",
    expertise: ["JavaScript", "React", "Node.js", "System Design"],
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.9,
    reviews: 120,
    hourlyRate: 150,
    sessionsCompleted: 300,
    // imageUrl: "https://randomuser,me/api/port
  }
]

export const upcomingSessions = [
  {
    id: 1,
    mentorName: "Dr. Sarah Chen",
    topic: "Introduction to Neural Networks",
    date: "2024-03-25T14:00:00",
    duration: 60,
    status: "scheduled"
  },
  {
    id: 2,
    mentorName: "James Wilson",
    topic: "System Design Interview Prep",
    date: "2024-03-26T10:00:00",
    duration: 90,
    status: "scheduled"
  }
];

