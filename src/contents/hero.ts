export interface HeroContent {
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  background: {
    imagePath: string;
  };
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export const heroContent: HeroContent = {
  title: {
    main: "Advancing the Future of",
    highlight: "Mathematical Finance"
  },
  description: "Our mathematical finance group at the University of Toronto is one of the largest in North America. We conduct cutting-edge research at the intersection of theory and application, and train the next generations of talents in academia and industry.",
  background: {
    imagePath: "/assets/blog/background.webp"
  },
  cta: {
    primary: {
      text: "Explore Research",
      href: "#research-areas"
    },
    secondary: {
      text: "Meet Our Faculty",
      href: "#faculty-members"
    }
  }
}; 
