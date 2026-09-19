export interface HeroContent {
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  background: {
    imagePath: string;
  };
  foregroundImage: {
    imagePath: string;
    alt: string;
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
  description: "The mathematical finance group at the University of Toronto is one of the largest in North America. We conduct cutting-edge research at the intersection of theory and application, and train the next generations of talents in academia and industry.",
  background: {
    imagePath: "/assets/hero/university-of-toronto-sign.jpg"
  },
  foregroundImage: {
    imagePath: "/assets/hero/math-finance-group-niagara.jpeg",
    alt: "Members of the mathematical finance group at Niagara Falls"
  },
  cta: {
    primary: {
      text: "Explore Research",
      href: "#research-areas"
    },
    secondary: {
      text: "Meet Our Faculty",
      href: "/people"
    }
  }
}; 
