export interface Mission {
  title: string;
  description: string;
  iconPath: string;
}

export interface Metric {
  value: string;
  label: string;
  iconPath: string;
}

export interface AboutContent {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  missions: Mission[];
  vision: {
    statement: string;
  };
  metrics: Metric[];
  showcase: {
    image: {
      src: string;
      alt: string;
    };
    caption: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    badge: "About Our Research Group",
    title: "Advancing Mathematical Finance Through Research and Collaboration",
    description: "We are a globally renowned research group advancing mathematical finance through rigorous research, interdisciplinary collaboration, and the training of emerging scholars."
  },
  missions: [
    {
      title: "Build Excellence",
      description: "Develop cutting-edge mathematical models and computational methods to solve complex financial challenges.",
      iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Drive Innovation",
      description: "Partner with industry leaders to transform theoretical breakthroughs into practical financial solutions.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Foster Talent",
      description: "Nurture the next generation of mathematical finance experts through world-class research and collaboration.",
      iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    }
  ],
  vision: {
    statement: "Our research group works at the intersection of mathematics, finance, and technology. Through rigorous research and interdisciplinary collaboration, we develop computational methods and analytical frameworks that help shape the future of financial markets."
  },
  metrics: [
    {
      value: "25+",
      label: "Research Projects",
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      value: "150+",
      label: "Publications",
      iconPath: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    }
  ],
  showcase: {
   image: {
      src: "https://quanteam.fr/wp-content/uploads/HEADER1-3.png",
      alt: "Our research facility showcasing advanced mathematical finance research"
    },
    caption: "State-of-the-art research facilities equipped with advanced computational resources"
  }
}; 
