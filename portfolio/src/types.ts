export interface Skill {
  name: string;
  progress: number; // 0 to 100
  iconName: string; // Name of Lucide icon
  category: 'Frontend' | 'Backend & Database' | 'Tools & Platforms' | 'Other Interests';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  status: 'Completed' | 'Ongoing';
}

export interface YouTubeVideo {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}
