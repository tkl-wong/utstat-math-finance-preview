export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotoGalleryContent {
  title: string;
  details: string;
  photos: GalleryPhoto[];
}

export const researchRetreatGallery: PhotoGalleryContent = {
  title: "Math Finance Research Retreat",
  details: "March 2025 · Niagara-on-the-Lake, Ontario",
  photos: [
    {
      src: "/assets/gallery/math-finance-retreat-2025/lakeside-group.jpeg",
      alt: "Math Finance research retreat participants gathered by the lakeshore",
      width: 2400,
      height: 1600,
    },
    {
      src: "/assets/gallery/math-finance-retreat-2025/niagara-falls-group.jpeg",
      alt: "Math Finance research retreat participants visiting Niagara Falls",
      width: 2400,
      height: 1600,
    },
    {
      src: "/assets/gallery/math-finance-retreat-2025/retreat-group.jpeg",
      alt: "Participants at the Math Finance research retreat",
      width: 2400,
      height: 825,
    },
    {
      src: "/assets/gallery/math-finance-retreat-2025/research-session.jpeg",
      alt: "A presentation during the Math Finance research retreat",
      width: 2400,
      height: 1330,
    },
  ],
};
