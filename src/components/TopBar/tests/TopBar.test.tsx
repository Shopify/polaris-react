import React from 'react';
import {mountWithApp} from 'test-utilities';
import {Image, UnstyledLink} from 'components';

import {TopBar} from '../TopBar';
import {Menu, SearchField, UserMenu, Search} from '../components';

const actions = [
  {
    items: [{content: 'item content'}],
  },
];

describe('<TopBar />', () => {
  it('mounts', () => {
    const topBar = mountWithApp(<TopBar />);

    expect(topBar).not.toBeNull();
  });

  describe('compound components', () => {
    it('renders the user prop', () => {
      const user = (
        <TopBar.UserMenu
          actions={actions}
          message={{
            title: 'Polaris',
            description: 'description',
            action: {onClick: noop, content: 'action content'},
            link: {to: '/', content: 'Link content'},
          }}
          name="some name"
          detail="some detail"
          initials="DR"
          open={false}
          onToggle={noop}
        />
      );
      const topBar = mountWithApp(<TopBar userMenu={user} />);
      expect(topBar).toContainReactComponent(UserMenu);
    });

    it('renders the searchField prop', () => {
      const searchField = (
        <TopBar.SearchField onChange={noop} value="" placeholder="Search" />
      );
      const topBar = mountWithApp(<TopBar searchField={searchField} />);
      expect(topBar).toContainReactComponent(SearchField);
    });

    it('renders the secondaryMenu prop', () => {
      const secondaryMenu = (
        <TopBar.Menu
          activatorContent="Toggle menu"
          actions={actions}
          open={false}
          onClose={noop}
          onOpen={noop}
        />
      );
      const topBar = mountWithApp(<TopBar secondaryMenu={secondaryMenu} />);
      expect(topBar).toContainReactComponent(Menu);
    });
  });

  describe('navigation content', () => {
    it('renders a navigation button when hasNavigation is true', () => {
      const topBar = mountWithApp(<TopBar showNavigationToggle />);

      expect(topBar).toContainReactComponent('button', {
        'aria-label': 'Toggle menu',
      });
    });

    it('sets onToggleNavigation on the navigation button', () => {
      const spy = jest.fn();
      const topBar = mountWithApp(
        <TopBar showNavigationToggle onNavigationToggle={spy} />,
      );

      topBar
        .find('button', {
          'aria-label': 'Toggle menu',
        })
        ?.trigger('onClick');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('search content', () => {
    const searchField = (
      <TopBar.SearchField onChange={noop} value="" placeholder="Search" />
    );

    const searchResults = <div id="search-content">Hello</div>;

    it('renders the search results', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          searchResultsVisible
          searchField={searchField}
        />,
      );

      expect(topBar).toContainReactComponent(Search);
    });

    it('renders the search results when `searchResultsVisible` is false', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          searchResultsVisible={false}
          searchField={searchField}
        />,
      );

      expect(topBar).toContainReactComponent(Search);
    });

    it('renders the search prop', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          searchResultsVisible
          searchField={searchField}
        />,
      );

      expect(topBar).toContainReactComponent('div', {
        id: 'search-content',
      });
    });

    it('passes the visible prop to search', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          searchField={searchField}
          searchResultsVisible
        />,
      );

      expect(topBar).toContainReactComponent(Search, {visible: true});
    });

    it('passes the searchResultsOverlayVisible prop to search', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          searchField={searchField}
          searchResultsOverlayVisible
        />,
      );

      expect(topBar).toContainReactComponent(Search, {overlayVisible: true});
    });

    it('passes the onSearchDismiss prop to search', () => {
      const topBar = mountWithApp(
        <TopBar
          searchResults={searchResults}
          onSearchResultsDismiss={noop}
          searchResultsVisible
          searchField={searchField}
        />,
      );

      expect(topBar).toContainReactComponent(Search, {onDismiss: noop});
    });
  });

  describe('logo', () => {
    it('will render an image with the logo top bar source', () => {
      const topBar = mountWithApp(<TopBar />, {
        theme: {
          logo: {
            topBarSource: './assets/shopify.svg',
          },
        },
      });
      expect(topBar).toContainReactComponent(Image, {
        source: './assets/shopify.svg',
      });
    });

    it('will render an image with the logo accessibility label', () => {
      const topBar = mountWithApp(<TopBar />, {
        theme: {
          logo: {
            accessibilityLabel: 'Shopify',
          },
        },
      });
      expect(topBar).toContainReactComponent(Image, {
        alt: 'Shopify',
      });
    });

    it('will render an unstyled link with the logo URL', () => {
      const topBar = mountWithApp(<TopBar />, {
        theme: {logo: {url: 'https://shopify.com'}},
      });

      expect(topBar).toContainReactComponent(UnstyledLink, {
        url: 'https://shopify.com',
      });
    });

    it('will render an unstyled link with the logo width', () => {
      const topBar = mountWithApp(<TopBar />, {
        theme: {logo: {width: 124}},
      });

      expect(topBar).toContainReactComponent(UnstyledLink, {
        style: {width: '124px'},
      });
    });

    it('will render an unstyled link with a default width', () => {
      const topBar = mountWithApp(<TopBar />, {
        theme: {logo: {}},
      });
      expect(topBar).toContainReactComponent(UnstyledLink, {
        style: {width: '104px'},
      });
    });
  });

  describe('contextControl', () => {
    const mockContextControl = (
      <TopBar.Menu
        actions={[]}
        activatorContent="Switch contexts"
        open
        onOpen={noop}
        onClose={noop}
      />
    );

    it('renders', () => {
      const topBar = mountWithApp(
        <TopBar contextControl={mockContextControl} />,
      );
      expect(topBar).toContainReactComponent('div', {
        className: 'ContextControl',
      });
      expect(topBar).toContainReactComponent(TopBar.Menu);
    });

    it('doesn’t render a logo when defined', () => {
      const topBar = mountWithApp(
        <TopBar contextControl={mockContextControl} />,
        {
          theme: {
            logo: {topBarSource: './assets/shopify.svg'},
          },
        },
      );
      expect(topBar).not.toContainReactComponent(Image);
    });

    it('doesn’t render the wrapper when not defined and no logo is available', () => {
      const topBar = mountWithApp(<TopBar />);
      expect(topBar).not.toContainReactComponent('div', {
        className: 'ContextControl',
      });
    });
  });
});

function noop() {}
