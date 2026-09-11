export interface ResearchArea {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
}

export interface ResearchAreasContent {
  header: {
    title: string;
    description: string;
  };
  areas: ResearchArea[];
}

export const researchAreasContent: ResearchAreasContent = {
  header: {
    title: "Research Areas",
    description: ""
  },
  areas: [
    {
      slug: "stochastic-control",
      title: "Stochastic Control",
      subtitle: "Optimization under uncertainty",
      description: "",
      keywords: ["Dynamic Programming", "Risk Management"],
    },
    {
      slug: "mean-field-games",
      title: "Mean-Field Games",
      subtitle: "Strategic interactions among large populations of agents",
      description: "",
      keywords: ["Nash Equilibria", "Forward-Backward SDEs"],
    },
    {
      slug: "optimal-transport",
      title: "Optimal Transport",
      subtitle: "Statistical distance between probability distributions",
      description: "",
      keywords: ["Wasserstein distance", "Distributionall Robust Optimization"],
    }
  ]
};
