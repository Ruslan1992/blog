import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.NEXT_PUBLIC_DATASET,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
};

export default sanityClient(options);
