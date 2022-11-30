type PortfolioItem = {
  name: string;
  solution: string;
  tech: string;
  id: number;
  releaseDate: string;
  imageUrl: string;
  description: string;
};
const PORTFOLIO_ITEM: PortfolioItem[] = [
  {
    name: 'Okains Bay Seafoods',
    solution: 'Home Page',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 1,
    releaseDate: '10-20-2020',
    imageUrl: 'https://loremflickr.com/320/240/dog',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    name: 'Agoge System',
    solution: 'Home Page',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 2,
    releaseDate: '10-20-2020',
    imageUrl: 'https://loremflickr.com/320/240/dog',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    name: 'Takatoshi Wada',
    solution: 'Home Page',
    tech: 'Prismic, Gatsby, React, TailwindCSS',
    id: 3,
    releaseDate: '10-20-2020',
    imageUrl: 'https://loremflickr.com/320/240/dog',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

export default PORTFOLIO_ITEM;
