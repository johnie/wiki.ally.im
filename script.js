/* globals Docute */

new Docute({
  title: 'ally',
  target: '#docute',
  sourcePath: './docs/',
  logo: '<img class="logo" src="https://res.cloudinary.com/johnie/image/upload/v1579378841/ally.svg" width="26px" height="auto" />',
  darkThemeToggler: true,
  cssVariables(theme) {
    setTimeout(function() {
      const logo = document.querySelector('.logo');

      if (theme === 'dark') {
        logo.src = 'https://res.cloudinary.com/johnie/image/upload/v1579379056/ally-white.svg'
      } else {
        logo.src = 'https://res.cloudinary.com/johnie/image/upload/v1579379056/ally.svg'
      }
    }, 300);
  },
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
