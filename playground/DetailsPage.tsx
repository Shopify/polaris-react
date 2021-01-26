import React, {useCallback, useRef, useState} from 'react';
import {
  AnalyticsMajor,
  AppsMajor,
  CirclePlusMinor,
  CustomersMajor,
  DiscountsMajor,
  HomeMajor,
  MarketingMajor,
  OrdersMajor,
  ProductsMajor,
  SettingsMajor,
} from '@shopify/polaris-icons';

import {
  ActionList,
  Avatar,
  Badge,
  Caption,
  Card,
  ContextualSaveBar,
  DropZone,
  DropZoneProps,
  FormLayout,
  Frame,
  Layout,
  Loading,
  Modal,
  Navigation,
  Page,
  Select,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  Stack,
  TextContainer,
  TextField,
  Thumbnail,
  Toast,
  TopBar,
} from '../src';

import styles from './DetailsPage.scss';

export function DetailsPage() {
  const defaultState = useRef({
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'Jaded Pixel',
  });
  const skipToContentRef = useRef<HTMLAnchorElement>(null);
  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [navItemActive, setNavItemActive] = useState('');
  const initialDescription =
    'The M60-A represents the benchmark and equilibrium between function and design for us at Rama Works. The gently exaggerated design of the frame is not understated, but rather provocative. Inspiration and evolution from previous models are evident in the beautifully articulated design and the well defined aesthetic, the fingerprint of our ‘Industrial Modern’ designs.';
  const [previewValue, setPreviewValue] = useState(initialDescription);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
  }, []);
  const handleSearchFieldFocus = useCallback(() => {
    setSearchActive(true);
  }, []);
  const handleSearchFieldBlur = useCallback(() => {
    // setSearchActive(false);
  }, []);

  React.useEffect(() => {
    console.log(searchActive);
  }, [searchActive]);

  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    [],
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{content: 'Community forums'}],
    },
  ];

  const contextControlMarkup = (
    <div className={styles.ContextControl}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.8956 8.39159C26.876 8.25021 26.751 8.17175 26.6473 8.16321C26.5443 8.15466 24.5277 8.12436 24.5277 8.12436C24.5277 8.12436 22.8411 6.50548 22.6745 6.3408C22.5079 6.17611 22.1825 6.22583 22.056 6.26312C22.0544 6.26389 21.7392 6.36022 21.2087 6.52257C21.1199 6.23826 20.9895 5.88869 20.8032 5.53757C20.2028 4.40498 19.3233 3.80605 18.2608 3.8045C18.2592 3.8045 18.2584 3.8045 18.2568 3.8045C18.183 3.8045 18.1099 3.81149 18.036 3.8177C18.0046 3.78042 17.9731 3.74391 17.9401 3.70817C17.4772 3.21878 16.8838 2.9803 16.1726 3.00127C14.8004 3.04011 13.4337 4.01968 12.3255 5.75974C11.5459 6.984 10.9525 8.52209 10.7843 9.71295C9.20858 10.1954 8.10673 10.5325 8.08237 10.5403C7.28702 10.7873 7.26187 10.8114 7.15813 11.5524C7.08111 12.1125 5 28.0186 5 28.0186L22.4403 31L29.9992 29.1426C29.9992 29.1426 26.9153 8.53297 26.8956 8.39159ZM20.3356 6.7898C19.934 6.91253 19.4774 7.05236 18.9822 7.20384C18.972 6.51714 18.8895 5.56165 18.5657 4.7359C19.607 4.93088 20.1195 6.09532 20.3356 6.7898ZM18.0698 7.48349C17.1558 7.76315 16.1584 8.06843 15.158 8.3745C15.4393 7.30949 15.973 6.24913 16.6284 5.55388C16.8721 5.29521 17.2131 5.00701 17.6171 4.84232C17.9967 5.62535 18.0792 6.73387 18.0698 7.48349ZM16.2001 3.90393C16.5223 3.89694 16.7935 3.96685 17.0253 4.11755C16.6544 4.30787 16.296 4.58131 15.9596 4.93787C15.088 5.86228 14.42 7.29706 14.1536 8.68134C13.3229 8.93536 12.5102 9.18472 11.762 9.4131C12.2344 7.23414 14.0821 3.96452 16.2001 3.90393Z"
          fill="#95BF47"
        />
        <path
          d="M26.6482 8.16418C26.5452 8.15564 24.5286 8.12534 24.5286 8.12534C24.5286 8.12534 22.842 6.50646 22.6754 6.34178C22.6133 6.28041 22.5292 6.24856 22.4412 6.23535L22.4419 30.9994L30.0001 29.1428C30.0001 29.1428 26.9162 8.53395 26.8965 8.39257C26.8769 8.25119 26.7511 8.17273 26.6482 8.16418Z"
          fill="#5E8E3E"
        />
        <path
          d="M18.2512 12.0055L17.3734 15.2518C17.3734 15.2518 16.3941 14.8113 15.2333 14.8836C13.531 14.99 13.5129 16.0511 13.5302 16.3176C13.623 17.7695 17.4873 18.0864 17.7042 21.4873C17.8748 24.1626 16.2684 25.9928 13.9538 26.1373C11.1756 26.3105 9.64624 24.6909 9.64624 24.6909L10.2349 22.2159C10.2349 22.2159 11.7745 23.3641 13.0068 23.2872C13.8116 23.2367 14.0992 22.5896 14.0702 22.132C13.9491 20.2382 10.8023 20.35 10.6035 17.2381C10.4361 14.6195 12.1761 11.9659 16.0153 11.7266C17.4944 11.6326 18.2512 12.0055 18.2512 12.0055Z"
          fill="white"
        />
      </svg>
      <p className={styles.ShopName}>Spectrally yours</p>
    </div>
  );

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
        discardConfirmationModal: true,
      }}
      contextControl={contextControlMarkup}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
      colorScheme="dark"
      accessibilityLabel="User menu"
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      onFocus={handleSearchFieldFocus}
      onBlur={handleSearchFieldBlur}
      value={searchValue}
      placeholder="Search"
      searchResultsVisible={searchActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
      contextControl={contextControlMarkup}
      searchResultsOverlayVisible
    />
  );
  // ---- Navigation ----
  const navigationMarkup = (
    <Navigation location="/" contextControl={contextControlMarkup}>
      <Navigation.Section
        items={[
          {
            label: 'Home',
            icon: HomeMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('home');
            },
            matches: navItemActive === 'home',
            url: '#',
          },
          {
            label: 'Orders',
            icon: OrdersMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('orders');
            },
            matches: navItemActive === 'orders',
            url: '#',
            subNavigationItems: [
              {
                label: 'All orders',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('all-orders');
                },
                matches: navItemActive.includes('orders'),
                url: '#',
              },
              {
                url: '#',
                label: 'Drafts',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('drafts');
                },
                matches: navItemActive === 'drafts',
              },
              {
                url: '#',
                label: 'Abandoned checkouts',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('abandoned');
                },
                matches: navItemActive === 'abandoned',
              },
            ],
          },
          {
            label: 'Products',
            icon: ProductsMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('products');
            },
            matches: navItemActive === 'products',
            url: '#',
            subNavigationItems: [
              {
                label: 'All products',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('all-products');
                },
                matches: navItemActive.includes('products'),
                url: '#',
              },
              {
                url: '#',
                label: 'Inventory',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('inventory');
                },
                matches: navItemActive === 'inventory',
              },
              {
                url: '#',
                label: 'Transfers',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('transfers');
                },
                matches: navItemActive === 'transfers',
              },
            ],
          },
          {
            label: 'Customers',
            icon: CustomersMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('customers');
            },
            matches: navItemActive === 'customers',
            url: '#',
          },
          {
            label: 'Analytics',
            icon: AnalyticsMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('analytics');
            },
            matches: navItemActive === 'analytics',
            url: '#',
          },
          {
            label: 'Marketing',
            icon: MarketingMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('marketing');
            },
            matches: navItemActive === 'marketing',
            url: '#',
          },
          {
            label: 'Discounts',
            icon: DiscountsMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('discounts');
            },
            matches: navItemActive === 'discounts',
            url: '#',
          },
          {
            label: 'Apps',
            icon: AppsMajor,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('apps');
            },
            matches: navItemActive === 'apps',
            url: '#',
          },
        ]}
      />
      <Navigation.Section
        fill
        title="Sales channels"
        action={{
          icon: CirclePlusMinor,
          accessibilityLabel: 'Add sales channel',
          onClick: toggleModalActive,
        }}
        items={[
          {
            label: 'Point of sale',
            icon: posIcon,
            onClick: () => {
              toggleIsLoading();
              setNavItemActive('pos');
            },
            matches: navItemActive === 'pos',
            url: '#',
            subNavigationItems: [
              {
                label: 'Overview',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('pos');
                },
                matches: navItemActive.includes('pos'),
                url: '#',
              },
              {
                url: '#',
                label: 'Staff',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('pos');
                },
                matches: navItemActive === 'pos',
              },
              {
                url: '#',
                label: 'Locations',
                onClick: () => {
                  toggleIsLoading();
                  setNavItemActive('pos');
                },
                matches: navItemActive === 'pos',
              },
            ],
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            icon: SettingsMajor,
            label: 'Settings',
            onClick: toggleModalActive,
          },
        ]}
      />
    </Navigation>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;

  const skipToContentTarget = (
    <a
      href="#SkipToContent"
      id="SkipToContentTarget"
      ref={skipToContentRef}
      tabIndex={-1}
    />
  );

  // ---- Description ----
  const [descriptionValue, setDescriptionValue] = useState(initialDescription);

  // ---- Select ----
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Keyboard', value: 'keyboard'},
    {label: 'Accessories', value: 'accessories'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];

  const handleChange = useCallback((newValue) => {
    setDescriptionValue(newValue);
    setPreviewValue(newValue);
  }, []);

  const actions1 = [
    {
      content: 'Duplicate',
      // eslint-disable-next-line no-console
      onAction: () => console.log('duplicate'),
    },
    {
      content: 'Print',
      // eslint-disable-next-line no-console
      onAction: () => console.log('print'),
    },
  ];
  const actions2 = [
    {
      content: 'Print',
      // eslint-disable-next-line no-console
      onAction: () => console.log('print'),
    },
  ];

  const [actions, setActions] = useState(actions1);

  const toggleActions = () => {
    if (actions.length === 2) {
      setActions(actions2);
    } else {
      setActions(actions1);
    }
  };

  // ---- Dropzone ----
  const [files, setFiles] = useState<File[]>([]);

  const handleDropZoneDrop = useCallback<NonNullable<DropZoneProps['onDrop']>>(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    [],
  );

  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={
              validImageTypes.indexOf(file.type) > 0
                ? // eslint-disable-next-line node/no-unsupported-features/node-builtins
                  window.URL.createObjectURL(file)
                : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
            }
          />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  // ---- Page markup ----
  const actualPageMarkup = (
    <Page
      fullWidth
      breadcrumbs={[{content: 'Products', url: '/products/31'}]}
      title="The North Face Ventrix Active Trail Hybrid Hoodie - Men's"
      titleMetadata={<Badge status="success">Success badge</Badge>}
      additionalNavigation={<Avatar initials="JD" />}
      primaryAction={{
        content: 'Save this page',
        // eslint-disable-next-line no-console
        onAction: () => console.log('save'),
      }}
      additionalMetaData="Created May 8, 2020 at 7:31 am from Developer Tools (via import)"
      secondaryActions={[
        ...actions,
        {
          content: 'View',
          onAction: () => {
            // eslint-disable-next-line no-console
            console.log(previewValue);
          },
        },
      ]}
      actionGroups={[
        {
          title: 'Promote',
          actions: [
            // eslint-disable-next-line no-console
            {content: 'Promote', onAction: () => console.log('promote')},
          ],
        },
        {
          title: 'More actions',
          actions: [
            {
              content: 'Embed on a website',
              // eslint-disable-next-line no-console
              onAction: () => console.log('embed'),
            },
            {
              content: 'Toggle page actions',
              onAction: toggleActions,
            },
          ],
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <Layout>
        {skipToContentTarget}
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Title"
                value="M60-A"
                onChange={() => setIsDirty(true)}
              />
              <TextField
                label="Description"
                value={descriptionValue}
                onChange={handleChange}
                multiline
              />
            </FormLayout>
          </Card>
          <Card title="Media" sectioned>
            <DropZone onDrop={handleDropZoneDrop}>
              {uploadedFiles}
              {fileUpload}
            </DropZone>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card title="Organization">
            <Card.Section>
              <Select
                label="Product type"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
              <br />
              <Select
                label="Vendor"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </Card.Section>
            <Card.Section title="Collections" />
            <Card.Section title="Tags" />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );

  // ---- Loading ----
  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

  // ---- Modal ----
  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      skipToContentTarget={skipToContentRef}
    >
      {contextualSaveBarMarkup}
      {loadingMarkup}
      {pageMarkup}
      {toastMarkup}
      {modalMarkup}
    </Frame>
  );
}

const posIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20"><path d="M8.717 9.46l.77-2.26s-.52-.29-1.57-.29c-2.71 0-4.06 1.8-4.06 3.66 0 2.21 2.22 2.27 2.22 3.61 0 .33-.23.77-.8.77-.87 0-1.9-.88-1.9-.88l-.53 1.73s1.01 1.21 2.97 1.21c1.64 0 2.85-1.22 2.85-3.12 0-2.42-2.7-2.81-2.7-3.85 0-.18.06-.93 1.26-.93.82 0 1.49.35 1.49.35zm-2.34-5.62c-.51.14-.88.57-.94 1.09-.04.42.2.85.7.81s.9-.51 1-.97c.11-.49-.18-1.04-.76-.93zm1.35-2.7c-.32 0-.72.55-.84 1.36l1.6-.39c-.19-.64-.53-.97-.76-.97zm1.93.9c.32.09.62.29.81.58l1.62 2.13c.16.23.196.458.18.78l-.23 4.84-.33 6.68-.1 1.96c0 .13-.01.26-.03.38-.09.49-.51.67-.97.59l-8.65-1.62c-.51-.09-1.07-.15-1.57-.29-.6-.17-.34-1.1-.28-1.55l.36-2.78.82-6.23c.03-.21.05-.42.08-.63.05-.28.17-.55.34-.78l1.68-2.39c.18-.28.47-.48.8-.55l1.21-.3.3-.07c.09-1.58.94-2.79 2.04-2.79.9 0 1.65.86 1.92 2.04zM12 2l3.875 2.616c.168.157.276.37.31.598l1.77 13.008c.05.195 0 .4-.135.55-.13.15-.33.226-.527.2l-3.61-.37.066-1.36.33-6.864.25-5.208c.01-.182-.05-.36-.164-.503L12 2z"/></svg>`;
