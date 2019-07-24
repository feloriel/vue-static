// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/posts/**/*.md',
        typeName: 'BlogPost',
        route: '/posts/:slug'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-slug'
      ],
      extertnalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      slug: true,
      autolinkHeadings: true
    }
  }
};
