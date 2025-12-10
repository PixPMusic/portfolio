import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const bun = createSkillFactory({
  name: 'Bun',
  icon: 'simple-icons:bun',
  iconColor: '#2496ED',
  url: 'https://bun.sh/',
});

export const cuda = createSkillFactory({
  name: 'CUDA',
  icon: 'simple-icons:nvidia',
  iconColor: '#76B900',
  url: 'https://nvidia.com',
});

export const hubSpot = createSkillFactory({
  name: 'HubSpot',
  icon: 'simple-icons:hubspot',
  iconColor: '#f57722',
  url: 'https://hubspot.com/',
});

export const cPanel = createSkillFactory({
  name: 'cPanel',
  icon: 'simple-icons:cpanel',
  iconColor: '#FF6C2C',
  url: 'https://cpanel.net/',
});

export const containers = createSkillFactory({
  name: 'Containers',
  icon: 'pajamas:container-image',
  iconColor: '#4B66AD',
  url: 'https://containerd.io/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#FCC624',
  url: 'https://www.linux.org/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const ceph = createSkillFactory({
  name: 'Ceph',
  icon: 'simple-icons:ceph',
  iconColor: '#005F9E',
  url: 'https://ceph.io/',
});

export const teraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#623CE4',
  url: 'https://www.terraform.io/',
});

export const ansible = createSkillFactory({
  name: 'Ansible',
  icon: 'simple-icons:ansible',
  iconColor: '#EE0000',
  url: 'https://www.ansible.com/',
});

export const fedora = createSkillFactory({
  name: 'Fedora',
  icon: 'simple-icons:fedora',
  iconColor: '#294172',
  url: 'https://getfedora.org/',
});

export const osTree = createSkillFactory({
  name: 'OSTree',
  icon: 'simple-icons:fedora',
  iconColor: '#294172',
  url: 'https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/package-management/rpm-ostree/',
});

export const openTofu = createSkillFactory({
  name: 'OpenTofu',
  icon: 'simple-icons:opentofu',
  iconColor: '#FF6C2C',
  url: 'https://opentofu.com/',
});

export const apache = createSkillFactory({
  name: 'Apache',
  icon: 'simple-icons:apache',
  iconColor: '#D22128',
  url: 'https://httpd.apache.org/',
});

export const nginx = createSkillFactory({
  name: 'NGINX',
  icon: 'simple-icons:nginx',
  iconColor: '#269539',
  url: 'https://www.nginx.com/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#DC382D',
  url: 'https://redis.io/',
});

export const perl = createSkillFactory({
  name: 'Perl',
  icon: 'simple-icons:perl',
  iconColor: '#39457E',
  url: 'https://www.perl.org/',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#777BB4',
  url: 'https://www.php.net/',
});

export const podman = createSkillFactory({
  name: 'Podman',
  icon: 'simple-icons:podman',
  iconColor: '#BD58DD',
  url: 'https://podman.io/',
});

export const openstack = createSkillFactory({
  name: 'OpenStack',
  icon: 'simple-icons:openstack',
  iconColor: '#ED1944',
  url: 'https://www.openstack.org/',
});

export const wordpress = createSkillFactory({
  name: 'WordPress',
  icon: 'simple-icons:wordpress',
  iconColor: '#21759B',
  url: 'https://wordpress.org/',
});

export const goLang = createSkillFactory({
  name: 'Go',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://golang.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'fa6-brands:java',
  iconColor: '#007396',
  url: 'https://www.java.com/',
});

export const tomcat = createSkillFactory({
  name: 'Apache Tomcat',
  icon: 'simple-icons:apachetomcat',
  iconColor: '#F8DC75',
  url: 'http://tomcat.apache.org/',
});

export const redhat = createSkillFactory({
  name: 'Enterprise Linux',
  icon: 'simple-icons:redhat',
  iconColor: '#EE0000',
  url: 'https://www.redhat.com/',
});

export const ubuntu = createSkillFactory({
  name: 'Ubuntu',
  icon: 'simple-icons:ubuntu',
  iconColor: '#E95420',
  url: 'https://ubuntu.com/',
});

export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const graphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'simple-icons:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#0052CC',
  url: 'https://www.atlassian.com/software/jira',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
