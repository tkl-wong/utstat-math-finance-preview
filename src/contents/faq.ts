interface FAQContentItem {
  question: string;
  answer: string;
  bullets?: string[];
  link?: {
    label: string;
    href: string;
  };
}

interface FAQContentCategory {
  category: string;
  items: FAQContentItem[];
}

export const faqsData: FAQContentCategory[] = [
  {
    category: "Working with us",
    items: [
      {
        question: "PhD program",
        answer:
          "The Department of Statistical Sciences offers a PhD program in Statistics with mathematical finance as a research field. Our faculty are always interested in hearing from prospective students with strong mathematical and technical backgrounds who would like to join our research group.",
        bullets: [
          "Applications generally close in mid-November; consult the department’s admissions page for the current deadline.",
          "Prospective students are encouraged to contact faculty members with related research interests.",
          "Applicants should identify the faculty members they are interested in working with in their application.",
        ],
        link: {
          label: "View admission information",
          href: "https://www.statistics.utoronto.ca/graduate/admission-information",
        },
      },
      {
        question: "Undergraduate and master’s students",
        answer:
          "We do not currently offer a thesis-based MSc program in mathematical finance. Current University of Toronto undergraduate and master’s students with strong technical backgrounds are invited to contact faculty members directly. This includes students in statistics, mathematics, and actuarial science, as well as economics, computer science, and related fields. Opportunities include:",
        bullets: [
          "A reading course supervised by a faculty member.",
          "A research course focused on a mathematical finance topic.",
          "A side research project that supports a faculty member or an ongoing project while providing research experience.",
        ],
      },
      {
        question: "Industry collaboration",
        answer:
          "We have active collaborations with industry partners to apply our research in practice. These partnerships often support PhD students or postdoctoral researchers, and we welcome opportunities to work with additional partners. Organizations interested in collaborating are encouraged to contact the faculty member whose research is most closely aligned with their interests.",
        bullets: [
          "Fund PhD research projects aligned with our research areas, potentially with matching support through programs such as Mitacs or NSERC Alliance.",
          "Support postdoctoral researchers working on shared research problems.",
          "Hire graduates from our group.",
          "Recruit interns from our group or related undergraduate, MFI, MScAC, and MSc programs.",
        ],
      },
      {
        question: "Postdoctoral positions",
        answer:
          "Each year there are a number of opportunities, some externally funded (e.g. CANSSI, Data Science Institute). You are encouraged to reach out directly to our faculty.",
      },
    ],
  },

];
