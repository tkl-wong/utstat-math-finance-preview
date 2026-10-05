export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotoGalleryContent {
  title: string;
  details: string;
  description?: string;
  photos: GalleryPhoto[];
}

export const researchRetreat2026Gallery: PhotoGalleryContent = {
  title: "Third Math Finance Research Retreat",
  details: "October 2026 · Blue Mountains, Ontario",
  description:
    "Faculty, postdoctoral fellows, and students shared their research through talks and discussion, with hiking and team-building activities throughout the retreat.",
  photos: [
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2026/group-photo.jpg",
      alt: "Faculty, postdoctoral fellows, and students at the 2026 Math Finance research retreat in the Blue Mountains",
      width: 2400,
      height: 1596,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2026/faculty-talk.jpg",
      alt: "A faculty presentation during the 2026 Math Finance research retreat",
      width: 2400,
      height: 1597,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2026/research-session.jpg",
      alt: "Participants attending a research talk at the 2026 Math Finance retreat",
      width: 2400,
      height: 1596,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2026/team-building.jpg",
      alt: "Retreat participants taking part in a team-building activity",
      width: 2400,
      height: 1596,
    },
  ],
};

export const researchRetreatGallery: PhotoGalleryContent = {
  title: "Second Math Finance Research Retreat",
  details: "March 2025 · Niagara-on-the-Lake, Ontario",
  photos: [
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2025/lakeside-group.jpeg",
      alt: "Math Finance research retreat participants gathered by the lakeshore",
      width: 2400,
      height: 1600,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2025/niagara-falls-group.jpeg",
      alt: "Math Finance research retreat participants visiting Niagara Falls",
      width: 2400,
      height: 1600,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2025/retreat-group.jpeg",
      alt: "Participants at the Math Finance research retreat",
      width: 2400,
      height: 825,
    },
    {
      src: "/utstat-math-finance-preview/assets/gallery/math-finance-retreat-2025/research-session.jpeg",
      alt: "A presentation during the Math Finance research retreat",
      width: 2400,
      height: 1330,
    },
  ],
};
