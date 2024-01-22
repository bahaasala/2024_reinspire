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
            }
        }
`;

export default query;