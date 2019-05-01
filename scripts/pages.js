const pages = {
  about: {
    name: 'About',
    path: '/about',
  },
  contract: {
    name: 'Contract',
    path: '/contract',
  },
  brand: {
    name: 'My Brand',
    path: '/brand',
  },
  index: {
    name: 'Home',
    path: '/',
  },
  using_sprites: {
    name: 'Using Sprites',
    path: '/sprites',
  },
  one_div_graphic: {
    name: 'One Div Graphic',
    path: '/one-div',
  },
  htmltags: {
    name: 'Everything HTML',
    path: '/htmltags',
  },
};

function getNavigation() {
  let nav = {
    index: pages.index,
    about: pages.about
  };

  nav.about.isDisabled = true;

  return nav;
}

function urlFor(key) {
  return pages[key].path;
}

function getInfo(key) {
  return pages[key];
}

module.exports = { pages, getNavigation, urlFor, getInfo };
