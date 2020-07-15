---
name: Skeleton page
category: Feedback indicators
releasedIn: 1.7.0
keywords:
  - SkeletonPage
  - skeleton
  - loading
  - page
---

# Skeleton page

Skeleton page is used with other skeleton loading components to provide a low fidelity representation of the user interface (UI) before content appears on the page. It improves load times perceived by merchants.

---

## Best practices

Skeleton page component should:

- Be used for pages where all content loads at the same time.
- Give merchants an indication of what the page layout will be once loaded. Do this by mimicking its layout similarly to the state that will be loaded.

---

## Content guidelines

Show page titles that never change for a page. For example, keep the title “Products” on the product list page, but use skeleton loading for titles that change on the product details page. Don’t use placeholder content for titles that will change when the page fully loads.

Secondary actions are always represented with skeleton content. You can change the number of skeleton actions that best represent the number of actions once loaded.

<!-- usageblock -->

#### Do

Use skeleton loading for dynamic content, and use actual content for content that doesn’t change.

<div class="TypographyUsageBlockImg">

![Image showing skeleton loading for changing content](/public_images/skeleton/do-use-skeleton-for-changing-content@2x.png)

</div>

#### Don’t

Use placeholder content that will change when the page fully loads. This will confuse merchants and create a jumpy loading experience.

<div class="TypographyUsageBlockImg">

![Image showing placeholder content that will change](/public_images/skeleton/dont-use-placeholder-content-that-will-change@2x.png)

</div>

<!-- end -->

---

## Examples

### Page with dynamic content

Use this component to compose a loading version of a page where the page title and header content are dynamic, meaning, the content changes.

```jsx
<SkeletonPage primaryAction secondaryActions={2}>
  <Layout>
    <Layout.Section>
      <Card sectioned>
        <SkeletonBodyText />
      </Card>
      <Card sectioned>
        <TextContainer>
          <SkeletonDisplayText size="small" />
          <SkeletonBodyText />
        </TextContainer>
      </Card>
      <Card sectioned>
        <TextContainer>
          <SkeletonDisplayText size="small" />
          <SkeletonBodyText />
        </TextContainer>
      </Card>
    </Layout.Section>
    <Layout.Section secondary>
      <Card>
        <Card.Section>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={2} />
          </TextContainer>
        </Card.Section>
        <Card.Section>
          <SkeletonBodyText lines={1} />
        </Card.Section>
      </Card>
      <Card subdued>
        <Card.Section>
          <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={2} />
          </TextContainer>
        </Card.Section>
        <Card.Section>
          <SkeletonBodyText lines={2} />
        </Card.Section>
      </Card>
    </Layout.Section>
  </Layout>
</SkeletonPage>
```

### Page with static content

Use this component to compose a loading version of a page where the page title and header content are known and stay the same.

```jsx
<SkeletonPage title="Products" primaryAction secondaryActions={2}>
  <Layout>
    <Layout.Section>
      <Card sectioned>
        <SkeletonBodyText />
      </Card>
      <Card sectioned title="Images">
        <SkeletonBodyText />
      </Card>
      <Card sectioned title="Variants">
        <SkeletonBodyText />
      </Card>
    </Layout.Section>
    <Layout.Section secondary>
      <Card title="Sales channels">
        <Card.Section>
          <SkeletonBodyText lines={2} />
        </Card.Section>
        <Card.Section>
          <SkeletonBodyText lines={1} />
        </Card.Section>
      </Card>
      <Card title="Organization" subdued>
        <Card.Section>
          <SkeletonBodyText lines={2} />
        </Card.Section>
        <Card.Section>
          <SkeletonBodyText lines={2} />
        </Card.Section>
      </Card>
    </Layout.Section>
  </Layout>
</SkeletonPage>
```

### Page inside a Frame

Use this component to compose a loading version of a page that includes a frame loading bar.

```jsx
<Frame>
  <SkeletonPage title="Products" primaryAction secondaryActions={2} loading>
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <SkeletonBodyText />
        </Card>
        <Card sectioned title="Images">
          <SkeletonBodyText />
        </Card>
        <Card sectioned title="Variants">
          <SkeletonBodyText />
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
        <Card title="Sales channels">
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText lines={1} />
          </Card.Section>
        </Card>
        <Card title="Organization" subdued>
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  </SkeletonPage>
</Frame>
```

---

## Related components

- Use the [Skeleton body text](https://polaris.shopify.com/components/feedback-indicators/skeleton-body-text) and [Skeleton display text](https://polaris.shopify.com/components/feedback-indicators/skeleton-display-text) components to represent blocks of content.
- When giving feedback for in-context operations, use [Progress bar](https://polaris.shopify.com/components/feedback-indicators/progress-bar) or [Spinner](https://polaris.shopify.com/components/feedback-indicators/spinner) component.
