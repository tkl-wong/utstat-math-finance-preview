export interface Mission {
  title: string;
  description: string;
  iconPath: string;
  href?: string;
  linkLabel?: string;
}

export interface AboutContent {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  missions: Mission[];
}

export const aboutContent: AboutContent = {
  hero: {
    badge: "About Our Research Group",
    title: "Advancing Mathematical Finance Through Research and Collaboration",
    description: "We are a globally renowned research group advancing mathematical finance through rigorous research, interdisciplinary collaboration, and the training of emerging scholars."
  },
  missions: [
    {
      title: "Faculty Expertise",
      description: "Our faculty are experts in mathematical finance, stochastic control, risk, insurance, and related fields.",
      iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      href: "/people#faculty-members",
      linkLabel: "Meet Our Faculty"
    },
    {
      title: "Research Excellence",
      description: "We develop mathematical, statistical, and computational methods for problems in finance, insurance, and risk.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      href: "/publications",
      linkLabel: "Explore Recent Publications"
    },
    {
      title: "Foster Talent",
      description: "We train outstanding PhD students and postdoctoral researchers to become future leaders in academia and industry.",
      iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      href: "/people#phd-students-postdocs",
      linkLabel: "See Our Group"
    },
    {
      title: "Teach at Every Level",
      description: "Teach and mentor students across undergraduate, graduate, and professional programs. Many of our members contribute to the Master of Financial Insurance (MFI) program.",
      iconPath: "M12 14l9-5-9-5-9 5 9 5zm0 0v6m-6-9v5c3 2 9 2 12 0v-5",
      href: "https://www.statistics.utoronto.ca/MFI",
      linkLabel: "Explore the MFI Program"
    }
  ]
}; 
