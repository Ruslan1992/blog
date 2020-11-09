import client from 'lib/sanity';

const HomeContent = `
  greeting,
  fullname,
  about,
  'avatar': avatar.asset->url,
  'photo': photo.asset->url
`;
const PersonInfo = `
  'avatar': avatar.asset->url,
  info,  
  stats
`;
const PersonSkills = `
  skills
`;
const PersonExperience = `
  education,
  experience
`;
const PersonContact = `
  contact
`;
const BlogDetail = `  
  content[]{..., "asset": asset->}
`;

const Portfolio = `
  title,
  description,
  content,
  'image': image.asset->url,  
  'innerImage': inner_image.asset->url
`

export async function getHomeContent() {
  const result = await client
    .fetch(`*[_type == "person"]{${HomeContent}}`)
    .then((res) => res?.[0]);
  return result;
}
export async function getPersonInfo() {
  const results = await client
    .fetch(`*[_type == "person"]{${PersonInfo}}`)
    .then((res) => res?.[0]);
  return results;
}
export async function getPersonSkills() {
  const results = await client
    .fetch(`*[_type == "person"]{${PersonSkills}}`)
    .then((res) => res?.[0]);
  return results;
}
export async function getPersonExperience() {
  const results = await client
    .fetch(`*[_type == "person"]{${PersonExperience}}`)
    .then((res) => res?.[0]);
  return results;
}
export async function getPersonContact() {
  const result = await client
    .fetch(`*[_type == "person"]{${PersonContact}}`)
    .then((res) => res?.[0]);
  return result;
}

export async function getPortfolio() {
  const result = await client
    .fetch(`*[_type == "portfolio"]{${Portfolio}}`)
  return result;
}
