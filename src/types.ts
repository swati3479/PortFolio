export type SocialProfile = {
  platform: string;
  url: string;
  icon: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  certificateUrl?: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

export type Achievement = {
  label: string;
  value: number;
  suffix?: string;
};

export type PortfolioData = {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    location: string;
    resumeUrl: string;
    profileImage?: string;
  };
  socials: SocialProfile[];
  about: {
    professionalBio: string;
    careerObjective: string;
    interests: string[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
};
