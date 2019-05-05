const pages = {
  about: {
    name: 'About',
    path: '/about',
    title: 'Introduction'
  },
  contract: {
    name: 'Contract',
    path: '/contract',
    title: 'Contract'
  },
  brand: {
    name: 'My Brand',
    path: '/brand',
    title: 'My Brand'
  },
  index: {
    name: 'Home',
    path: '/',
    title: 'Table of Contents',
    concepts: ['Branding', 'Dynamic TOC', 'Test out MEAN']
  },
  gear: {
    name: 'Gear',
    path: '/gear',
    title: 'Current Gear',
    concepts: ['Using sprites']
  },
  compass: {
    name: 'Compass',
    path: '/one-div',
    title: 'Introduction',
    concepts: ['One div graphic']
  },
  codecademy_port: {
    name: 'Codecademy Webpage Port',
    path: '/codecademy-port'
  },
  htmltags: {
    name: 'Everything HTML',
    path: '/htmltags',
    title: 'Everything HTML',
    concepts: ['Webpage scraping', 'MongoDB', 'Basic CRUD']
  }
};

function getNavbar() {
  let nav = {
    index: pages.index,
    about: pages.about,
    gear: pages.gear
  };

  nav.about.isDisabled = true;

  return nav;
}

function urlFor(key) {
  return pages[key].path;
}

function getPage(key) {
  return pages[key];
}

module.exports = { pages, getNavbar, urlFor, getPage };
