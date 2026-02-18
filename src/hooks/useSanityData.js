import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';
import {
  SITE_SETTINGS_QUERY,
  PROJECTS_QUERY,
  SKILLS_QUERY,
  EXPERIENCE_QUERY,
  CONTENT_ITEMS_QUERY,
  SOCIAL_LINKS_QUERY,
} from '../lib/queries';

// Fallback data — mantém o site funcional enquanto o Sanity não retorna dados
import {
  profileData as mockProfile,
  navItems as mockNav,
  projects as mockProjects,
  skills as mockSkills,
  experience as mockExperience,
  contentItems as mockContentItems,
  socialLinks as mockSocialLinks,
} from '../data/mock';

const transformSettings = (settings) => {
  if (!settings) return null;

  return {
    profileData: {
      name: settings.profileName || '',
      title: settings.profileTitle || '',
      tagline: settings.tagline || '',
      bio: settings.bio || '',
      heroCtaText: settings.heroCtaText || 'INSERT COIN TO CONTINUE',
      footerGameOverText: settings.footerGameOverText || 'GAME OVER',
      footerCtaText: settings.footerCtaText || 'Thanks for playing. Insert coin to continue...',
      copyrightText: settings.copyrightText || '',
    },
    navItems: settings.navItems || [],
  };
};

export const useSanityData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [profileData, setProfileData] = useState(mockProfile);
  const [navItems, setNavItems] = useState(mockNav);
  const [projects, setProjects] = useState(mockProjects);
  const [skills, setSkills] = useState(mockSkills);
  const [experience, setExperience] = useState(mockExperience);
  const [contentItems, setContentItems] = useState(mockContentItems);
  const [socialLinks, setSocialLinks] = useState(mockSocialLinks);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          settingsResult,
          projectsResult,
          skillsResult,
          experienceResult,
          contentResult,
          socialsResult,
        ] = await Promise.all([
          sanityClient.fetch(SITE_SETTINGS_QUERY),
          sanityClient.fetch(PROJECTS_QUERY),
          sanityClient.fetch(SKILLS_QUERY),
          sanityClient.fetch(EXPERIENCE_QUERY),
          sanityClient.fetch(CONTENT_ITEMS_QUERY),
          sanityClient.fetch(SOCIAL_LINKS_QUERY),
        ]);

        // Site Settings
        const transformed = transformSettings(settingsResult);
        if (transformed) {
          setProfileData(transformed.profileData);
          if (transformed.navItems.length > 0) {
            setNavItems(transformed.navItems);
          }
        }

        // Collections — só substitui se houver dados
        if (projectsResult?.length > 0) setProjects(projectsResult);
        if (skillsResult?.length > 0) setSkills(skillsResult);
        if (experienceResult?.length > 0) setExperience(experienceResult);
        if (contentResult?.length > 0) setContentItems(contentResult);
        if (socialsResult?.length > 0) setSocialLinks(socialsResult);
      } catch (err) {
        console.error('Failed to fetch Sanity data:', err);
        setError(err);
        // Mantém os dados do mock como fallback
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return {
    loading,
    error,
    profileData,
    navItems,
    projects,
    skills,
    experience,
    contentItems,
    socialLinks,
  };
};
