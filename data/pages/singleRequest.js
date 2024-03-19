const query = `
    query GetRequest($slug: String!) {
        request(filter: { slug: { eq: $slug } }) {
            id
            slug
            client
            website
            engagement
            clarify
            act
            debriefing
            prototype
          }
      }
`;

export default query;