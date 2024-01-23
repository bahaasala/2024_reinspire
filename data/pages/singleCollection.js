const query = `
    query GetCollection($slug: String!) {
        collection(filter: { slug: { eq: $slug } }) {
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
            collectionBanner {
              url
              width
              height
              alt
            }
            description
          }
      }
`;

export default query;