interface FacultyMember {
  name: string;
  title: string;
  since?: number;
  bio: string;
  image: string;
  imagePosition?: string;
  imageScale?: number;
  imageTransformOrigin?: string;
  links: {
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    googleScholar?: string;
  };
}
