interface FacultyMember {
  name: string;
  title: string;
  since?: number;
  bio: string;
  image: string;
  links: {
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    googleScholar?: string;
  };
}
