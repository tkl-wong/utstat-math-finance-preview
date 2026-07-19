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
    pdf?: string;
    arxiv?: string;
    code?: string;
  };
  tags: string[];
}

type PublicationFilterOptions = {
  venue: string[];
  tags: string[];
};

type PublicationFilters = {
  venue: string[];
  tags: string[];
  search: string;
};
