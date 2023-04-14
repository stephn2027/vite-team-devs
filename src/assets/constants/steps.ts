type StepsText = {
  id: number;
  title: string;
  description: string;
};
const STEPS_TEXT: StepsText[] = [
  {
    id: 1,
    title: 'Strategy & Planning',
    description:
      'Idea generation, requirement gathering, project scoping and sitemapping',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'User presonas and journeys, wireframing, prototyping, and UI & UX design',
  },
  {
    id: 3,
    title: 'Development Phase',
    description:
      'Web development, CMS & API integration, headless, and ecommerce development',
  },
  {
    id: 4,
    title: 'Optimization & Growth',
    description:
      'Search engine optimization (SEO), conversion rate optimization (CRO), and HubSpot automation',
  },
  {
    id: 5,
    title: 'Support & Maintenance',
    description:
      'Performance amd security monitoring, SLA-level support, and proactive maintenance.',
  },
];

export default STEPS_TEXT;
