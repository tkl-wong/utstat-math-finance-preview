export interface NavLink {
  text: string;
  href: string;
  isAnchor?: boolean;
}

export interface ExternalLink {
  text: string;
  href: string;
  icon: string;
}

export interface NavigationContent {
  mainNav: NavLink[];
  externalLinks: ExternalLink[];
  mobileMenu: {
    title: string;
  };
}

export const navigationContent: NavigationContent = {
  mainNav: [
    { text: "About", href: "/#about-us", isAnchor: true },
    { text: "News", href: "/news" },
    { text: "People", href: "/people" },
    { text: "Recent Publications", href: "/publications" },
    { text: "FAQ", href: "/faq" },
    { text: "Media", href: "/media" }
  ],
  externalLinks: [
    {
      text: "Department of Statistical Sciences",
      href: "https://www.statistics.utoronto.ca/",
      icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    }
  ],
  mobileMenu: {
    title: "Navigation"
  }
}; 
