import { PortfolioData } from "./types";

export const data: PortfolioData = {
  personal: {
    name: "Swati Kumari",
    role: "Software Developer & AI Enthusiast",
    tagline: "",
    bio: "I'm a B.Tech student in Computer Science Engineering (AI) at IGDTUW with a passion for programming, web development, and solving real-world problems.",
    email: "swati010btcseai24@igdtuw.ac.in",
    location: "Delhi, India",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg",
  },
  socials: [
    { platform: "GitHub", url: "https://github.com/swati3479", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/-kumariswati/", icon: "linkedin" },
    { platform: "LeetCode", url: "https://leetcode.com/u/swatiwebdev01/", icon: "leetcode" },
  ],
  about: {
    professionalBio: "I am a dedicated student currently pursuing a B.Tech in Computer Science Engineering (Artificial Intelligence) at Indira Gandhi Delhi Technical University for Women (IGDTUW). I have a strong foundation in programming, web development, and problem-solving, having solved over 500 problems on various coding platforms. I enjoy learning new technologies and working on projects that challenge my abilities.",
    careerObjective: "To leverage my skills in programming and artificial intelligence to build innovative, efficient, and impactful software solutions.",
    interests: ["Web Development", "Artificial Intelligence", "Competitive Programming", "Problem Solving"],
  },
  skills: [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Libraries & Tools",
      skills: [
        { name: "NumPy / Pandas", level: 85 },
        { name: "OpenCV / Matplotlib", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 75 },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Time Management", level: 90 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Team Management", level: 85 },
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Movie Recommender System",
      description: "A content-based movie recommendation system using movie metadata and similarity analysis, featuring an interactive Streamlit interface for real-time search.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      category: "Machine Learning",
    },
    {
      id: "project-2",
      title: "Face Recognition Attendance System",
      description: "An automated attendance system using face detection and recognition through a webcam, with real-time recognition workflows and CSV timestamp recording.",
      image: "/face_recognition_attendance.jpg",
      tags: ["Python", "OpenCV", "NumPy", "Pandas"],
      category: "Computer Vision",
      githubUrl: "https://github.com/swati3479/face-recognition-attendance-system",
    },
    {
      id: "project-3",
      title: "All-in-One Calculator",
      description: "A multi-functional calculator featuring BMI, Age, Currency, Temperature, Discount, & Percentage calculations with real-time validation and a responsive UI.",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=2670&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      githubUrl: "https://github.com/swati3479/CALCHUB/tree/main",
      liveUrl: "https://calchub-tan.vercel.app",
    },
    {
      id: "project-4",
      title: "Typing Speed Test",
      description: "An interactive typing speed test application to measure typing speed and accuracy with timer-based tracking and dynamic WPM calculation.",
      image: "/keyboard_typing_speed.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      githubUrl: "https://github.com/swati3479/Typing_Speed_Test",
      liveUrl: "https://typing-speed-test-zeta-two.vercel.app/",
    },
    {
      id: "project-5",
      title: "IGDTUW CGPA & SGPA Calculator",
      description: "A comprehensive tool to calculate CGPA and SGPA specifically designed for IGDTUW students, providing quick and accurate results.",
      image: "/cgpa_calculator_app.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      githubUrl: "https://github.com/swati3479/IGDTUW-CGPA-CALCULATOR",
      liveUrl: "https://igdtuw-cgpa-calculator.vercel.app/",
    },
    {
      id: "project-6",
      title: "Personal Developer Portfolio",
      description: "A modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Features smooth Framer Motion animations, dynamic data rendering, and a working contact form.",
      image: "/portfolio_cover.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      githubUrl: "https://github.com/swati3479/PortFolio",
      liveUrl: "https://swati-portfolio-sigma.vercel.app",
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Frontend Web Development with AI",
      company: "IGDTUW",
      duration: "Jun 2025 - July 2025",
      description: [
        "Developed and enhanced responsive user interfaces using HTML, CSS, and JavaScript",
        "Implemented frontend features based on design specifications and user requirements"
      ]
    },
    {
      id: "exp-2",
      role: "Software Developer Associate",
      company: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      duration: "April 2023 - June 2023",
      description: [
        "Successfully completed Software Developer Associate training with Grade A",
        "Learned software development life cycle (SDLC) models, built projects & strengthen problem solving skills"
      ],
      certificateUrl: "/pmkvy-certificate.jpg"
    },
    {
      id: "exp-3",
      role: "Communication and IT Skills",
      company: "Tech Mahindra Foundation",
      duration: "Jan 2024 - April 2024",
      description: [
        "Completed structured training in professional communication and programming fundamentals",
        "Gained foundational knowledge of programming concepts and logical problem-solving"
      ],
      certificateUrl: "/tech-mahindra-certificate.pdf"
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science Engineering (Artificial Intelligence)",
      institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi",
      duration: "Aug 2024 - June 2027",
      description: "CGPA: 8.61/10.0"
    },
    {
      id: "edu-2",
      degree: "Diploma in Computer Engineering",
      institution: "Ambedkar DSEU Shakarpur Campus-I, Delhi",
      duration: "Aug 2021 - Jul 2024",
      description: "CGPA: 8.50/10.0"
    },
    {
      id: "edu-3",
      degree: "Class X (CBSE)",
      institution: "Government Girls Senior Secondary School, Bijwasan, Delhi",
      duration: "Apr 2021",
      description: "Percentage: 87.6%"
    }
  ],
  achievements: [
    { label: "Coding Problems Solved", value: 500, suffix: "+" },
    { label: "Top Rank in College Comp.", value: 10, suffix: "%" },
    { label: "Smart India Hackathon", value: 2025, suffix: "" },
    { label: "Paper Accepted (DASGRI)", value: 2026, suffix: "" },
  ]
};
