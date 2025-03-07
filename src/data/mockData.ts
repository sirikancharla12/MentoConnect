import { Users, BookOpen, Code, Brain, Target, TrendingUp, MessageSquare } from 'lucide-react';

export const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Scientist",
    company: "TechCorp AI",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    rating: 4.9,
    reviews: 128,
    hourlyRate: 150,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availability: "Available next week",
    bio: "Leading AI researcher with 10+ years of experience in developing cutting-edge machine learning solutions. Previously worked at Google AI and Stanford AI Lab."
  },
  {
    id: 2,
    name: "James Wilson",
    title: "Senior Software Architect",
    company: "Microsoft",
    expertise: ["System Design", "Cloud Architecture", "Leadership"],
    rating: 4.8,
    reviews: 95,
    hourlyRate: 200,
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availability: "Available tomorrow",
    bio: "20+ years of experience in software architecture and team leadership. Specialized in scalable systems and cloud-native applications."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Product Design Lead",
    company: "Design Studios",
    expertise: ["UX Design", "Product Strategy", "Design Systems"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 175,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availability: "Limited availability",
    bio: "Award-winning product designer with a passion for creating intuitive and beautiful user experiences. Former lead designer at Airbnb and Uber."
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