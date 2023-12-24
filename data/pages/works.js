const query = `
  query {
    allWorks {
        id
        title
        slug
        categories {
          name
        }
        featuredImage {
          url
          width
          height
          alt
        }
    }
  }
`;

export default query;
