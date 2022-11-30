type StacksItem = {
  id: number;
  title: string;
  tech: string[];
};
const STACKS: StacksItem[] = [
  {
    id: 1,
    title: 'WEB APP',
    tech: ['SiTypescript'],
  },
  {
    id: 2,
    title: 'DESIGN',
    tech: ['SiFigma'],
  },
  {
    id: 3,
    title: 'CMS',
    tech: ['SiWordpress'],
  },
];

export default STACKS;
