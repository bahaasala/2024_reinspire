// homepage
interface Homepage {
  seo: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  title: string;
  introText: string;
  images: Image[];
  showreelTitle: string;
  year: number;
  videoId: string;
  works: Works[];
  imageBahaa: Image;
  aboutBahaa: string;
  imageMilo: Image;
  aboutMilo: string;
  contactTitle: string;
  contactImage: Image;
  email: string;
}

// image
interface Image {
  image: any;
  url: string;
  alt: string;
  width: number;
  height: number;
}

// works
interface Works {
  id: string;
  title: string;
  slug: string;
  categories: Category[];
  featuredImage: Image;
}

// single work
interface Work {
  seo: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  id: string;
  title: string;
  slug: string;
  externalUrl: string;
  featuredImage: Image;
  categories: Category[];
  description: string;
  customer: string;
  mainVideoUrl: string;
  mockupsTwoColumns: Image[];
  mockupFullWidth: Image;
  secondMockupsTwoColumns: Image[];
}

// category
interface Category {
  name: string;
}

// single proposal
interface Proposal {
  id: string;
  proposalNumber: number;
  proposalBanner: Image;
  title: string;
  website: string;
  introduction: string;
  praise: string;
  improvements: string;
  webInspirationTitle1: string;
  webInspirationLink1: string;
  webInspirationImage1: Image;
  webInspirationTitle2: string;
  webInspirationLink2: string;
  webInspirationImage2: Image;
  conceptPicture: Image;
  conceptImprovements: string;
  experimentationGallery: Image[];
}
