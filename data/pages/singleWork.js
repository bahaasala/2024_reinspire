const query = `
  query GetWork($slug: String!) {
    work(filter: { slug: { eq: $slug } }) {
      seo {
        title
        description
        image {
          url
        }
      }
      id
      title
      slug
      externalUrl
      featuredImage {
        url
        width
        height
        alt
      }
      categories {
        name
      }
      description
      customer
      mainVideoUrl
      mockupsTwoColumns {
        url
        width
        height
        alt
      }
      mockupFullWidth {
        url
        width
        height
        alt
      }
      secondMockupsTwoColumns {
        url
        width
        height
        alt
      }
    }
  }
`;

export default query;
