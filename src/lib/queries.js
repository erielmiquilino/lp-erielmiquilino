export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    profileName,
    profileTitle,
    tagline,
    bio,
    heroCtaText,
    footerGameOverText,
    footerCtaText,
    copyrightText,
    navItems[]{ id, label }
  }
`;

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc){
    _id,
    title,
    subtitle,
    description,
    techStack,
    "type": projectType,
    color,
    year,
    role
  }
`;

export const SKILLS_QUERY = `
  *[_type == "skill"] | order(rank asc){
    _id,
    name,
    score,
    rank,
    category
  }
`;

export const EXPERIENCE_QUERY = `
  *[_type == "experience"] | order(order asc){
    _id,
    role,
    company,
    period,
    level,
    description
  }
`;

export const CONTENT_ITEMS_QUERY = `
  *[_type == "contentItem"] | order(publishedAt desc){
    _id,
    "type": contentType,
    title,
    platform,
    color,
    size,
    url
  }
`;

export const SOCIAL_LINKS_QUERY = `
  *[_type == "socialLink"] | order(order asc){
    _id,
    label,
    url,
    icon
  }
`;
