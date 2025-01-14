module.exports = {
  siteTitle: 'Prakhar Jain',
  siteDescription:
    'Prakhar Jain is a Data Analyst, who loves learning new things and helping companies to reveal data driven insights to solve business problems.',
  siteKeywords:
    'Prakhar Jain, Prakhar, Jain, prakharjain, data analyst, data scientist, sql, python, javascript, Baruch, New York',
  siteUrl: 'https://source--test01p2j.netlify.app/',
  siteLanguage: 'en_US',
  googleVerification: 'J94arjvDPXgZqK2o45-a-KGLtFjSNNveOQXvZsLeUXU',
  name: 'Prakhar Jain',
  location: 'New York, USA',
  email: 'prakharjain199@gmail.com',
  github: 'https://github.com/prakhar-p2j',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/prakhar-p2j',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/prakhar-p2j/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prakhar_j2/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/prakhar_p2j',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
