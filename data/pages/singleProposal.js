const query = `
    query GetProposal($slug: String!) {
        proposal(filter: { slug: { eq: $slug } }) {
            slug
            proposalBanner {
                url
                alt
                width
                height
            }
            title
            website
            introduction
            introductionSelected
            praise
            improvements
            webInspirationTitle1
            webInspirationLink1
            webInspirationImage1 {
                url
                alt
                width
                height
            }
            webInspirationTitle2
            webInspirationLink2
            webInspirationImage2 {
                url
                alt
                width
                height
            }
            conceptPicture {
                url
                alt
                width
                height
            }
            conceptImprovements
            experimentationGallery {
                url
                alt
                width
                height
            }
        }
    }    
`;

export default query;