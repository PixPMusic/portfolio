import type { ReadonlyDeep } from 'type-fest';
import type { Data } from '@/types/data';
import type { DateRange, LinkButton, LabelledValue, IconName } from '@/types/shared';
import type { Job } from '@/types/sections/experience-section.types';
import type { Diploma } from '@/types/sections/education-section.types';
import type { Project } from '@/types/sections/portfolio-section.types';
import type { Testimonial } from '@/types/sections/testimonials-section.types';
import type { SkillSet } from '@/types/sections/skills-section.types';
import { produce } from 'immer';
import { getCollection, type CollectionEntry } from 'astro:content';
import * as skills from '../helpers/skills';
import configData from '../config';
import sectionsData from '../sections';
import type { FavoriteSubSection } from '@/types/sections/favorites-section.types';
import type { DataTransformer } from './transformers';

async function loadExperienceJobs(): Promise<Job[]> {
  const experience = await getCollection('experience');
  return experience
    .sort((a: CollectionEntry<'experience'>, b: CollectionEntry<'experience'>) => {
      const dateA = a.data.dates[0]?.getTime() ?? 0;
      const dateB = b.data.dates[0]?.getTime() ?? 0;
      return dateB - dateA;
    })
    .map((entry: CollectionEntry<'experience'>) => {
      const { role, company, dates, tags, links, image } = entry.data;

      const resolvedTags = tags
        .map((tagId: string) => {
          const skillFactory = (skills as any)[tagId];
          if (!skillFactory) {
            console.warn(`Skill with id "${tagId}" not found`);
            return null;
          }
          return skillFactory();
        })
        .filter(Boolean);

      return {
        role,
        company,
        dates: dates as DateRange,
        image,
        description: entry.body ?? '',
        tagsList: {
          title: 'Technologies',
          tags: resolvedTags,
        },
        links: (links || []) as LinkButton[],
      };
    });
}

async function loadEducationDiplomas(): Promise<Diploma[]> {
  const education = await getCollection('education');
  return education
    .sort((a: CollectionEntry<'education'>, b: CollectionEntry<'education'>) => {
      const dateA = a.data.dates[0]?.getTime() ?? 0;
      const dateB = b.data.dates[0]?.getTime() ?? 0;
      return dateB - dateA;
    })
    .map((entry: CollectionEntry<'education'>) => {
      const { title, institution, dates, links, image, description } = entry.data;
      return {
        title,
        institution,
        dates: dates as DateRange,
        image,
        description: description || entry.body || '',
        links: (links || []) as LinkButton[],
      };
    });
}

async function loadPortfolioProjects(): Promise<Project[]> {
  const portfolio = await getCollection('portfolio');
  return portfolio
    .sort((a: CollectionEntry<'portfolio'>, b: CollectionEntry<'portfolio'>) => {
      const dateA = a.data.dates[0]?.getTime() ?? 0;
      const dateB = b.data.dates[0]?.getTime() ?? 0;
      return dateB - dateA;
    })
    .map((entry: CollectionEntry<'portfolio'>) => {
      const { name, subtitle, dates, image, details, pdfDetails, screenshots, tags, links } = entry.data;

      const resolvedTags = tags
        .map((tagId: string) => {
          const skillFactory = (skills as any)[tagId];
          if (!skillFactory) {
            console.warn(`Skill with id "${tagId}" not found`);
            return null;
          }
          return skillFactory();
        })
        .filter(Boolean);

      return {
        name,
        subtitle,
        dates: dates as DateRange,
        image,
        description: entry.body ?? '',
        details,
        pdfDetails: (pdfDetails || []).map((detail: any) => ({
          ...detail,
          icon: detail.icon as IconName | undefined,
        })),
        screenshots: screenshots || [],
        tagsList: {
          title: 'Technologies',
          tags: resolvedTags,
        },
        links: (links || []) as LinkButton[],
      };
    });
}

async function loadTestimonials(): Promise<Testimonial[]> {
  const testimonialsCollection = await getCollection('testimonials');
  return testimonialsCollection.map((entry: CollectionEntry<'testimonials'>) => ({
    ...entry.data,
    links: (entry.data.links ?? []) as LinkButton[],
    pdfDetails: (entry.data.pdfDetails ?? []).map((detail: any) => ({
      ...detail,
      icon: detail.icon as IconName | undefined,
    })) as LabelledValue[],
    content: entry.body ?? '',
  }));
}

async function loadSkillSets(): Promise<SkillSet[]> {
  const skillsCollection = await getCollection('skills');
  return skillsCollection.map((entry: CollectionEntry<'skills'>) => {
    const mappedSkills = entry.data.skills
      .map((skillRef: any) => {
        const skillFactory = (skills as any)[skillRef.id];
        if (!skillFactory) {
          console.warn(`Skill with id "${skillRef.id}" not found`);
          return null;
        }
        return skillFactory({
          level: skillRef.level,
          description: skillRef.description,
        });
      })
      .filter(Boolean);

    return {
      title: entry.data.title,
      skills: mappedSkills,
    };
  });
}

async function loadFavorites(): Promise<FavoriteSubSection[]> {
  const favoritesCollection = await getCollection('favorites');
  return favoritesCollection.map((entry: CollectionEntry<'favorites'>) => ({
    title: entry.data.title,
    size: entry.data.size,
    items: entry.data.items,
  }));
}

const getCvData = async (...callbacks: DataTransformer[]): Promise<Data> => {
  // Load content from collections
  const [jobs, diplomas, projects, testimonials, skillSets, favorites] = await Promise.all([
    loadExperienceJobs(),
    loadEducationDiplomas(),
    loadPortfolioProjects(),
    loadTestimonials(),
    loadSkillSets(),
    loadFavorites(),
  ]);

  // Merge static config with loaded content
  const data = {
    config: configData,
    sections: {
      ...sectionsData,
      experience: {
        ...sectionsData.experience,
        jobs,
      },
      education: {
        ...sectionsData.education,
        diplomas,
      },
      portfolio: {
        ...sectionsData.portfolio,
        projects,
      },
      testimonials: {
        ...sectionsData.testimonials,
        testimonials,
      },
      skills: {
        ...sectionsData.skills,
        skillSets,
      },
      favorites: {
        ...sectionsData.favorites,
        favorites,
      },
    },
  } as const satisfies ReadonlyDeep<Data>;

  // Apply transformers
  // @ts-ignore -- waiting for https://github.com/sindresorhus/type-fest/pull/540 to be merged
  return produce(data, (draft) => {
    callbacks.forEach((callback) => callback(draft));
  });
};

export type PreciseData = ReadonlyDeep<Data>;

export default getCvData;
