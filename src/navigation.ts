import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About me',
      href: getPermalink('/about'),
    },
    {
      text: 'Approach',
      href: getPermalink('/approach'),
    },
    {
      text: 'Examples',
      href: getPermalink('/examples'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Work with me', href: getPermalink('/contact')}],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jordanphiliparmstrong/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ramblingjordan' },
  ],
  footNote: ``,
};
