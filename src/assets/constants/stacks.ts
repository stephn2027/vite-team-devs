type StacksItem = {
  id: number;
  title: string;
  tech: string[];
};
const STACKS: StacksItem[] = [
  {
    id: 1,
    title: 'WEB',
    tech: [
      'SiTypescript',
      'SiPhp',
      'SiPython',
      'SiReact',
      'SiVuedotjs',
      'SiWordpress',
      'SiJamstack',
      'SiContentful',
      'SiGatsby',
    ],
  },
  {
    id: 2,
    title: 'DESIGN',
    tech: ['SiFigma', 'SiAdobephotoshop', 'SiAdobexd', 'SiAdobeillustrator'],
  },
  {
    id: 3,
    title: 'SERVER',
    tech: ['SiAmazonaws', 'SiVercel', 'SiNetlify'],
  },
  {
    id: 4,
    title: 'TOOLS',
    tech: [
      'SiSlack',
      'SiGithub',
      'SiNotion',
      'SiAsana',
      'SiTrello',
      'SiGmail',
      'SiDocker',
      'SiVisualstudiocode',
    ],
  },
];

export default STACKS;
