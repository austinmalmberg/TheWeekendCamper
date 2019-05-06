const pages = {
  index: {
    name: 'Home',
    path: '/',
    title: 'Table of Contents',
    concepts: ['Branding', 'Dynamic TOC', 'MEAN', 'Nodejs', 'Express', 'Bootstrap', 'Cookies']
  },
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
  /*brand: {
    name: 'My Brand',
    path: '/brand',
    title: 'My Brand'
  },*/
  codecademy_port: {
    name: 'Codecademy Webpage Port',
    path: '/codecademy-port'
  },
  gear: {
    name: 'Gear',
    path: '/gear',
    title: 'Current Gear',
    concepts: ['Using sprites/spritesheets']
  },
  compass: {
    name: 'Compass',
    path: '/one-div',
    title: 'Compass',
    concepts: ['One div graphic']
  },
  htmltags: {
    name: 'Everything HTML',
    path: '/htmltags',
    title: 'Everything HTML',
    concepts: ['Webpage scraping', 'Dynamic HTML']
  },
  feedback: {
    name: 'Feedback',
    path: '/feedback',
    title: 'Leave Some Feedback!',
    concepts: ['Basic CRUD', 'MongoDB']
  }
};

function getNavbar() {
  let nav = {
    index: pages.index,
    about: pages.about,
    gear: pages.gear,
    feedback: pages.feedback
  };

  return nav;
}

function urlFor(key) {
  return pages[key].path;
}

function getPage(key) {
  return pages[key];
}

module.exports = { pages, getNavbar, urlFor, getPage };
