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
  collections: Collections[];
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

// collections
interface Collections {
  id: string;
  title: string;
  slug: string;
  collectionPicture: Image;
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

// single collection
interface Collection {
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
  collectionBanner: Image;
  description: string;
  visualsThreeColumns: Image[];
}

// category
interface Category {
  name: string;
}
