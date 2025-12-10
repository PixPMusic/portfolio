import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, resume } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/me.png'),
  fullName: 'Alex Jankowiak',
  role: 'Senior Technical Support Engineer',
  details: [
    {
      label: 'Email',
      value: 'me@pixp.cc',
      url: 'mailto:me@pixp.cc',
    },
    { label: 'Location', value: 'Seattle, WA' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'me@pixp.cc' },
    {
      label: 'LinkedIn',
      value: 'alex-jankowiak',
      url: 'https://linkedin.com/in/alex-jankowiak',
    },
    {
      label: 'GitHub',
      value: 'PixPMusic',
      url: 'https://github.com/PixPMusic',
    },
    {
      label: 'Website',
      value: 'pixp.cc',
      url: 'https://pixp.cc',
    },
  ],
  description:
    'I am a Technical Support Engineer with a background in Computer Science and a passion for development. I am always looking for new opportunities to learn and grow as a developer.',
  tags: [{ name: 'Bug Battler' }, { name: 'Documentation Deity' }, { name: 'Ticket Tamer' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Alex_Jankowiak.pdf',
  },
  links: [
    resume({ url: '/cv.pdf' }),
    github({ url: 'https://github.com/PixPMusic' }),
    linkedin({ url: 'https://linkedin.com/in/alex-jankowiak' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
