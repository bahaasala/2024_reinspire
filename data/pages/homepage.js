const query = `
  query {
    homepage {
      seo {
        title
        description
        image {
          url
        }
      }
      title
      images {
        image {
          url
          alt
          width
          height
        }
      }
      introText
      showreelTitle
      year
      videoId
      works {
        title
        slug
        categories {
          name
        }
        featuredImage {
          url
          alt
          width
          height
        }
      }
      imageBahaa {
        url
        alt
        width
        height
      }
      aboutBahaa
      imageMilo {
        url
        alt
        width
        height
      }
      aboutMilo
      contactTitle
      contactImage {
        url
        alt
        width
        height
      }
      email
    }
  }
`;

export default query;
