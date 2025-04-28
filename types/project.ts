export type Project = {
  id: string;
  title: string;
  client?: string;
  startDate?: string;    // ISO
  endDate?: string;    // ISO
  dueDate?: string;
  progress?: number;     // 0-100
  status: 'todo' | 'doing' | 'done' | 'blocked';
};

  