type PortfolioItem = {
  name: string;
  solution: string;
  country: string;
  tech: string;
  id: number;
};
const PORTFOLIO_ITEM: PortfolioItem[] = [
  {
    name: 'Okains Bay Seafoods',
    solution: 'Home Page',
    country: 'JP',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 1,
  },
  {
    name: 'Agoge System',
    solution: 'Home Page',
    country: 'JP',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 2,
  },
  {
    name: 'Takatoshi Wada',
    solution: 'Home Page',
    country: 'JP',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 3,
  },
];

export default PORTFOLIO_ITEM;
