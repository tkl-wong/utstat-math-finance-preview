interface Publication {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedAt: Date;
  venue: string;
  image: string;
  links: {
    doi?: string;
    publisher?: string;
    proceeding?: string;
    pdf?: string;
    arxiv?: string;
    ssrn?: string;
    code?: string;
  };
  tags: string[];
}

type PublicationFilterOptions = {
  faculty: string[];
  keywords: string[];
};

type PublicationFilters = {
  faculty: string[];
  keywords: string[];
  search: string;
};
