https://cdn.contentful.com/spaces/6nwc34w5nv9s/entries/5mlHmpEKuZgFvg4zop8tBA?access_token=tszQQKmJwiZfM9QpklAT4j3_pVnGx1Usa0H-eYk-cx0

```
query All {
  contentfulBook(slug: {eq: "needles"}) {
    id
    title
    yearOfPublication
    coverImage {
      fluid {
        srcSet
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
    purchasing {
      json
    }
  }
}

```

```
query All {
  allContentfulBook {
    edges {
      node {
        title
        description{
          childMarkdownRemark{
            html
          }
        }
        coverImage {
          fluid {
            src
            srcSet
          }
        }
        yearOfPublication
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
        whereToBuy
      }
    }
  }
  # allContentfulAsset {
  #   edges {
  #     node {
  #       fixed {
  #         srcSet
  #       }
  #     }
  #   }
  # }
}
```