export const publicationsData: Publication[] = [
  {
    id: "1",
    title: "Robust elicitable functionals",
    authors: ["Katheline Miao", "Silvana Pesenti"],
    abstract: "Elicitable functionals and (strictly) consistent scoring functions are of interest due to their utility of determining (uniquely) optimal forecasts, and thus the ability to effectively backtest predictions. However, in practice, assuming that a distribution is correctly specified is too strong a belief to reliably hold. To remediate this, we incorporate a notion of statistical robustness into the framework of elicitable functionals, meaning that our robust functional accounts for “small” misspecifications of a baseline distribution. Specifically, we propose a robustified version of elicitable functionals by using the Kullback–Leibler divergence to quantify potential misspecifications from a baseline distribution. We show that the robust elicitable functionals admit unique solutions lying at the boundary of the uncertainty region, and provide conditions for existence and uniqueness. Since every elicitable functional possesses infinitely many scoring functions, we propose the class of b-homogeneous strictly consistent scoring functions, for which the robust functionals maintain desirable statistical properties. We show the applicability of the robust elicitable functional in several examples: in a reinsurance setting and in robust regression problems.",
    publishedAt: new Date("2025-04-17"),
    venue: "European Journal of Operational Research",
    image: "",
    links: {
      doi: "https://doi.org/10.1016/j.ejor.2025.04.017",
    },
    tags: ["Model uncertainty", "Distributional robustness", "Risk measures"]
  },
  {
    id: "2",
    title: "Adapted optimal transport between Gaussian processes in discrete time",
    authors: ["Madhu Gunasingam", "Ting-Kam Leonard Wong"],
    abstract: "We derive explicitly the adapted 2-Wasserstein distance between non-degenerate Gaussian distributions and characterize the optimal bicausal coupling(s). This leads to an adapted version of the Bures-Wasserstein distance on the space of positive definite matrices.",
    publishedAt: new Date("2025-01-08"),
    venue: "Electronic Communications in Probability",
    image: "",
    links: {
      doi: "https://projecteuclid.org/journals/electronic-communications-in-probability/volume-30/issue-none/Adapted-optimal-transport-between-Gaussian-processes-in-discrete-time/10.1214/25-ECP654.full",
    },
    tags: ["Optimal Transport"]
  },
  {
    id: "3",
    title: "The Price of Information",
    authors: ["Sebastian Jaimungal", "Xiaofei Shi"],
    abstract: "When an investor is faced with the option to purchase additional information regarding an asset price, how much should she pay? To address this question, we solve for the indifference price of information in a setting where a trader maximizes her expected utility of terminal wealth over a finite time horizon. If she does not purchase the information, then she solves a partial information stochastic control problem, while if she does purchase the information, then she pays a cost and receives partial information about the asset’s trajectory. We further demonstrate that when the investor can purchase the information at any stopping time prior to the end of the trading horizon, she chooses to do so at a deterministic time.",
    publishedAt: new Date("2024-09-30"),
    venue: "SIAM Journal on Financial Mathematics",
    image: "",
    links: {
      doi: "https://epubs.siam.org/doi/abs/10.1137/24M1644791",
    },
    tags: ["Partial Information"]
  },
  {
    id: "4",
    title: "Large banks and systemic risk: insights from a mean-field game model",
    authors: ["Yuanyuan Chang", "Dena Firoozi", "David Benatia"],
    abstract: "This paper presents a dynamic game framework to analyze the role of large banks in interbank markets. By extending existing models, a large bank is incorporated as a dynamic decision-maker interacting with multiple small banks. Using the mean-field game methodology and convex analysis, best-response trading strategies are derived, leading to an approximate equilibrium for the interbank market. The influence of the large bank is investigated on the market stability by examining individual default probabilities and systemic risk, through the use of Monte Carlo simulations. The proposed findings reveal that, when the size of the major bank is not excessively large, it can positively contribute to market stability. However, there is also the potential for negative spillover effects in the event of default, leading to an increase in systemic risk. The magnitude of this impact is further influenced by the size and trading rate of the major bank. Overall, this study provides valuable insights into the management of systemic risk in interbank markets.",
    publishedAt: new Date("2025-03-19"),
    venue: "Journal of Systems Science and Complexity",
    image: "",
    links: {
      doi: "https://link.springer.com/article/10.1007/s11424-025-4387-x",
    },
    tags: ["Mean-Field Game", "Systemic Risk"]
  },
   {
    id: "5",
    title: "FuNVol: multi-asset implied volatility market simulator using functional principal components and neural SDEs",
    authors: ["Yuanyuan Chang", "Dena Firoozi", "David Benatia"],
    abstract: "We introduce a new approach for generating sequences of implied volatility (IV) surfaces across multiple assets that are faithful to historical prices. We do so using a combination of functional data analysis and neural stochastic differential equations (SDEs) combined with a probability integral transform penalty to reduce model misspecification. We demonstrate that learning the joint dynamics of IV surfaces and prices produces market scenarios that are consistent with historical features and lie within the sub-manifold of surfaces that are essentially free of static arbitrage. Finally, we demonstrate that delta hedging using the simulated surfaces generates profit and loss (P&L) distributions that are consistent with realized P&Ls.",
    publishedAt: new Date("2024-09-26"),
    venue: "Quantitative Finance",
    image: "",
    links: {
      doi: "https://www.tandfonline.com/doi/full/10.1080/14697688.2024.2396977#",
    },
    tags: ["Neural SDE", "Implied Volatility Surface", "Functional Data Analysis"]
  }
];

export const filterOptions = publicationsData.reduce(
  (acc, pub) => {
    if (pub.venue) acc.venue.add(pub.venue);
    if (pub.tags) pub.tags.forEach((tag) => acc.tags.add(tag));
    return acc;
  },
  { venue: new Set<string>(), tags: new Set<string>() }
);
