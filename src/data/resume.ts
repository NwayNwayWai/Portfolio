export const resumeData = {
  personalInfo: {
    name: "Nway Nway Wai",
    title: "Web Developer",
    bio: "Passionate and skilled React Developer with a strong foundation in computer science, currently based in Bangkok, Thailand. Proficient in developing dynamic, responsive, and scalable web applications using React.js and Next.js. Experienced in collaborating with cross-functional teams to deliver high-quality software solutions. Eager to apply technical expertise and innovative thinking to challenging projects and contribute to a forward-thinking development team.",
    image: "/nway1.JPG",
    intro:
      "I’m a passionate Frontend Developer who builds modern, responsive web applications. With expertise in React, Next.js, and TypeScript, I craft seamless user experiences using clean, efficient code",
    contact: {
      email: "nwaywai02@gmail.com",
      phone: "0631813201",
      address: "On Nut, Thailand",
      socials: {
        linkedin: "https://linkedin.com/in/nway-nway-wai",
        github: "https://github.com/NwayNwayWai",
        facebook: "https://facebook.com/Nway",
        instagram: "https://instagram.com/nwaywai",
      },
    },
  },
  education: {
    degree: "B.C.Sc (Computer Science)",
    university: "University of Computer Studies, Taunggyi",
    period: "12/2015 - 2020",
  },
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    backend: ["Firebase", "SQL", "Supabase"],
    tools: ["Git", "Microsoft Visual Studio", "Android Studio"],
    softSkills: ["Communication", "Problem Solving", "Time Management"],
  },
  workExperience: [
    {
      position: "Junior Frontend Developer",
      company: "Beyond Sensor Company Limited",
      location: "Singapore",
      period: "04/2024 - Present",
      description:
        "Frontend Developer for BeyondPatrol, an innovative video monitoring platform that enhances physical security operations through browser-based solutions. Key contributions include:\n" +
        "• Architecting responsive interfaces with Next.js 14 and React using TypeScript\n" +
        "• Implementing complex surveillance dashboards with real-time WebRTC video streaming\n" +
        "• Developing a Tailwind CSS design system for consistent security operation interfaces\n" +
        "• Building mission-critical features for virtual patrol configuration and execution\n" +
        "• Creating modular components for CCTV grid layouts and checkpoint verification systems\n" +
        "• Integrating Supabase for real-time data synchronization between patrol units and command centers\n" +
        "• Optimizing performance for high-concurrency CCTV monitoring scenarios\n" +
        "• Conducting rigorous testing of video processing workflows and alarm systems",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "WebRTC",
        "Real-time Systems",
        "Video Processing",
      ],
      link: "https://beyondsensor.com/products/beyondpatrol/",
      image: "/beyondpatrol.png",
      category: "Security Technology",
      shortDescription:
        "Browser-based virtual patrol system integrating live CCTV monitoring and security workflows",
    },

    {
      position: "Android Developer Intern",
      company: "Future Hub Myanmar",
      location: "Yangon, Myanmar",
      period: "06/2020 - 09/2020",
      description:
        "Completed a 3-month internship at Future Hub Myanmar, a leading IT solutions provider specializing in web and mobile development. Key achievements:\n• Developed an Android application for my graduation project using Java\n• Implemented Firebase Authentication and Realtime Database for user management\n• Created responsive UI layouts using Android XML and Material Design\n• Utilized SQLite for local data storage and offline functionality\n• Collaborated with senior developers for code reviews and best practices\n• Gained hands-on experience with Android Studio and Git version control",
      technologies: [
        "Java",
        "Android Studio",
        "Firebase",
        "SQLite",
        "Material Design",
        "Git",
      ],
      link: "https://futurehubmyanmar.com/",
      image: "/futurehub.png",
      category: "Mobile Development",
      shortDescription: "Android application with Firebase integration",
    },
    {
      position: "Freelance Software Developer",
      company: "Chan Pyae Soe Technology Company Limited",
      location: "Nay Pyi Daw, Myanmar",
      period: "12/2019 - 02/2020",
      description:
        "Worked as a Freelance Software Developer at Chan Pyae Soe Technology Company Limited to develop a smart door lock system for the Shan State Hluttaw using ZKTEcho. Responsibilities included:\n• Designing and developing both front-end and back-end components for the system\n• Implementing smart card systems for secure department access\n• Writing detailed user guides for the system\n• Conducting thorough testing and collaborating on User Acceptance Testing (UAT) with the client",
      technologies: ["ZKTEcho", "JavaScript", "React", "Node.js", "SQL"],
      link: "https://cpstechnology-mm.com/",
      image: "/CPS.png",
      category: "Security Systems Development",
      shortDescription:
        "Developed smart door lock system with secure access control using ZKTEcho",
    },
  ],
  organizations: [
    {
      name: "Beyond Sensor Company Limited",
      period: "04/2024 - Present",
    },
    {
      name: "Future Hub Myanmar",
      period: "06/2020 - 09/2020",
    },
  ],
  languages: [
    {
      language: "Burmese",
      proficiency: "Native or Bilingual Proficiency",
    },
    {
      language: "English",
      proficiency: "Limited Working Proficiency",
    },
  ],
  recentProjects: [
    {
      position: "Junior Frontend Developer",
      company: "Beyond Sensor Company Limited",
      projectName: "Beyond Patrol",
      location: "Singapore",
      period: "04/2024 - Present",
      description:
        "Key contributor to BeyondPatrol's browser-based security monitoring platform. Core achievements include:\n" +
        "• Engineered real-time CCTV monitoring interfaces using WebRTC video streaming\n" +
        "• Developed virtual patrol configuration system with dynamic checkpoint management\n" +
        "• Created security operator dashboards with multi-camera grid layouts using Next.js 14\n" +
        "• Implemented verification workflows for guard patrol documentation\n" +
        "• Built reusable React components for real-time alerting system\n" +
        "• Integrated Supabase for synchronized security event tracking across command centers\n" +
        "• Optimized video rendering performance for low-latency surveillance operations",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "WebRTC",
        "Real-time Systems",
      ],
      link: "https://beyondsensor.com/products/beyondpatrol/",
      image: "/patrol.png",
      category: "Security Technology",
      shortDescription:
        "Browser-based virtual patrol system leveraging CCTV infrastructure for remote security operations",
    },
    {
      position: "Junior Frontend Developer",
      company: "Beyond Sensor Company Limited",
      projectName: "Beyond Secure",
      location: "Singapore",
      period: "04/2024 - Present",
      description:
        "Developed enterprise visitor management system with focus on:\n" +
        "• QR-code based check-in/check-out workflows with mobile optimization\n" +
        "• Real-time visitor tracking and notification system using WebSockets\n" +
        "• Access control integration with hardware security systems\n" +
        "• Blacklist management interface with instant facility-wide alerts\n" +
        "• Emergency lockdown features with audit trail capabilities\n" +
        "• Visitor pre-registration portal with document verification flows\n" +
        "• Role-based access control for security personnel dashboards",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "WebSockets",
      ],
      link: "https://beyondsensor.com/products/beyondsecure/",
      image: "/secure.png",
      category: "Security Technology",
      shortDescription:
        "Digital visitor management platform with integrated access control and real-time monitoring",
    },
    {
      position: "Junior Frontend Developer",
      company: "Beyond Sensor Company Limited",
      projectName: "Beyond License",
      location: "Singapore",
      period: "04/2024 - Present",
      description:
        "Architected license management system for company products:\n" +
        "• Developed centralized license dashboard with expiration tracking\n" +
        "• Implemented automated renewal reminders and payment workflows\n" +
        "• Created license generation system with cryptographic validation\n" +
        "• Built usage analytics interface with data visualization\n" +
        "• Integrated secure payment gateway for license purchases\n" +
        "• Designed role-based access control for license administration\n" +
        "• Developed audit trail system for license modifications",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Data Visualization",
      ],
      link: "https://beyondsensor.com/#",
      image: "/license.png",
      category: "Enterprise Systems",
      shortDescription:
        "Centralized license management platform with automated renewal workflows and usage analytics",
    },
  ],
};
