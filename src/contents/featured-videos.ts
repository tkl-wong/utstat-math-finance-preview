interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeId: string;
}

export const featuredVideos: Video[] = [
  {
    id: "1",
    title: "Reinforcement and mean-field games in algorithmic trading - Sebastian Jaimungal",
    description: "Talk at the Alan Turing Institute on two areas of his research in algorithmic trading: reinforcement learning and mean-field games with differing beliefs. ",
    thumbnailUrl: "/utstat-math-finance-preview/assets/videos/reinforcement.jpeg",
    youtubeId: "F1bO2QvrAb8"
  },
  {
    id: "2",
    title: "Risk-Aware Reinforcement Learning for Finance",
    description: "SIAM Activity Group on FME Virtual Talk Series.",
    thumbnailUrl: "https://img.youtube.com/vi/LOMSP9l07H0/hqdefault.jpg",
    youtubeId: "LOMSP9l07H0"
  },
  {
    id: "3",
    title: "Robust Risk Measures with Silvana Pesenti",
    description: "SIAM Activity Group on FME Virtual Talk Series.",
    thumbnailUrl: "https://img.youtube.com/vi/iPUrGSYZo70/hqdefault.jpg",
    youtubeId: "iPUrGSYZo70"
  },
]; 
