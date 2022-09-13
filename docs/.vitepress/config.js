export default {
  title: 'Entsüklopeedia',
  base: '/entsyklopeedia/',
  description: 'Siia kogun tähtsaid materjale',
  themeConfig: {
    nav: [
      { text: 'Proge III', link: '/progemine/' },
      { text: 'Uurimistöö', link: '/uurimistoo/' },
    ],
    sidebar: {
      '/progemine/': [
        {
          text: 'Programmeerimine',
          items: [
            { text: 'Sissejuhatus', link: '/progemine/' }, // /folder/index.md
            { text: 'React', link: '/progemine/01_react' },
            { text: 'Next', link: '/progemine/02_next' },
            { text: 'Tailwind', link: '/progemine/03_tailwind' },
            {
              text: 'Taaskasutatavad komponendid',
              link: '/progemine/04_komponendid',
            },
            {
              text: 'Ühendamine andmebaasiga',
              link: '/progemine/05_andmebaas',
            },
          ],
        },
      ],
      '/uurimistoo/': [
        {
          text: 'Programmeerimine',
          items: [{ text: 'Sissejuhatus', link: '/uurimistoo/' }],
        },
      ],
    },
  },
};
