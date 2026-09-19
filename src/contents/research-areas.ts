export interface ResearchArea {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featuredPapers?: {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    href: string;
  }[];
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
      featuredPapers: [
        {
          title: "LQG risk-sensitive single-agent and major-minor mean-field game systems: a variational framework",
          authors: ["Hanchao Liu", "Dena Firoozi", "Michèle Breton"],
          venue: "SIAM Journal on Control and Optimization",
          year: 2025,
          href: "https://doi.org/10.1137/23M1595734",
        },
        {
          title: "The price of information",
          authors: ["Sebastian Jaimungal", "Xiaofei Shi"],
          venue: "SIAM Journal on Financial Mathematics",
          year: 2024,
          href: "https://doi.org/10.1137/24M1644791",
        },
      ],
    },
    {
      slug: "mean-field-games",
      title: "Mean-Field Games",
      subtitle: "Strategic interactions among large populations of agents",
      description: "",
      featuredPapers: [
        {
          title: "Risk-averse mean field games: exploitability and non-asymptotic analysis",
          authors: ["Ziteng Cheng", "Sebastian Jaimungal"],
          venue: "Stochastic Processes and their Applications",
          year: 2026,
          href: "https://doi.org/10.1016/j.spa.2026.105022",
        },
        {
          title: "Hilbert space-valued LQ mean field games: an infinite-dimensional analysis",
          authors: ["Hanchao Liu", "Dena Firoozi"],
          venue: "SIAM Journal on Control and Optimization",
          year: 2025,
          href: "https://doi.org/10.1137/24M1675096",
        },
      ],
    },
    {
      slug: "optimal-transport",
      title: "Optimal Transport",
      subtitle: "Statistical distance between probability distributions",
      description: "",
      featuredPapers: [
        {
          title: "Bregman-Wasserstein divergence: geometry and applications",
          authors: ["Amanjit Singh Kainth", "Cale Rankin", "Ting-Kam Leonard Wong"],
          venue: "IEEE Transactions on Information Theory",
          year: 2025,
          href: "https://ieeexplore.ieee.org/document/11152332",
        },
        {
          title: "Learning conditional distributions on continuous spaces",
          authors: ["Cyril Bénézet", "Ziteng Cheng", "Sebastian Jaimungal"],
          venue: "Journal of Machine Learning Research",
          year: 2025,
          href: "https://www.jmlr.org/papers/v26/24-0924.html",
        },
      ],
    },
    {
      slug: "distributionally-robust-optimization",
      title: "Distributionally Robust Optimization",
      subtitle: "Decision-making under distributional uncertainty",
      description: "",
      featuredPapers: [
        {
          title: "Optimizing distortion riskmetrics with distributional uncertainty",
          authors: ["Silvana Pesenti", "Qinyu Wang", "Ruodu Wang"],
          venue: "Mathematical Programming",
          year: 2024,
          href: "https://doi.org/10.1007/s10107-024-02128-6",
        },
        {
          title: "Uncertainty propagation and dynamic robust risk measures",
          authors: ["Michele Moresco", "Mélina Mailhot", "Silvana Pesenti"],
          venue: "Mathematics of Operations Research",
          year: 2024,
          href: "https://doi.org/10.1287/moor.2023.0267",
        },
      ],
    },
    {
      slug: "quantitative-risk-management",
      title: "Quantitative Risk Management",
      subtitle: "Risk measurement, allocation, and sensitivity analysis",
      description: "",
      featuredPapers: [
        {
          title: "Risk budgeting allocation for dynamic risk measures",
          authors: ["Silvana Pesenti", "Sebastian Jaimungal", "Yuri F. Saporito", "Rodrigo S. Targino"],
          venue: "Operations Research",
          year: 2025,
          href: "https://doi.org/10.1287/opre.2023.0299",
        },
        {
          title: "Robust elicitable functionals",
          authors: ["Kathleen Miao", "Silvana Pesenti"],
          venue: "European Journal of Operational Research",
          year: 2025,
          href: "https://doi.org/10.1016/j.ejor.2025.04.017",
        },
      ],
    },
    {
      slug: "portfolio-theory",
      title: "Portfolio Theory",
      subtitle: "Asset allocation, diversification, and investment decisions",
      description: "",
      featuredPapers: [
        {
          title: "Dynamic portfolio choice with intertemporal hedging and transaction costs",
          authors: ["Johannes Muhle-Karbe", "James Sefton", "Xiaofei Shi"],
          venue: "Management Science",
          year: 2025,
          href: "https://doi.org/10.1287/mnsc.2024.05913",
        },
        {
          title: "Functional portfolio optimization in stochastic portfolio theory",
          authors: ["Steven Campbell", "Ting-Kam Leonard Wong"],
          venue: "SIAM Journal on Financial Mathematics",
          year: 2022,
          href: "https://doi.org/10.1137/21M1417715",
        },
      ],
    },
    {
      slug: "algorithmic-trading",
      title: "Algorithmic Trading",
      subtitle: "Data-driven methods for trading and market execution",
      description: "",
      featuredPapers: [
        {
          title: "Nash equilibrium between brokers and traders",
          authors: ["Álvaro Cartea", "Sebastian Jaimungal", "Leandro Sánchez-Betancourt"],
          venue: "Finance and Stochastics",
          year: 2026,
          href: "https://doi.org/10.1007/s00780-026-00595-7",
        },
        {
          title: "Optimal trading with signals and stochastic price impact",
          authors: ["Jean-Pierre Fouque", "Sebastian Jaimungal", "Yuri F. Saporito"],
          venue: "SIAM Journal on Financial Mathematics",
          year: 2022,
          href: "https://doi.org/10.1137/21M1394473",
        },
      ],
    }
  ]
};
