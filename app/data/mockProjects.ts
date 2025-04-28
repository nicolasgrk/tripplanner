import type { Project } from '@/types/project';

export const mockProjects: Project[] = [
  {
    id: 'p001',
    title: 'Landing-page SaaS',
    client: 'Acme Inc.',
    startDate: '2025-03-02',
    dueDate: '2025-04-15',
    progress: 75,
    status: 'doing',
  },
  {
    id: 'p002',
    title: 'Refonte e-commerce',
    client: 'Boutik Chic',
    startDate: '2025-02-10',
    dueDate: '2025-05-01',
    progress: 30,
    status: 'todo',
  },
  {
    id: 'p003',
    title: 'Audit SEO',
    client: 'GreenMarket',
    startDate: '2025-01-08',
    dueDate: '2025-01-30',
    progress: 100,
    status: 'done',
  },
];
