export interface Task {
  id: number;
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
  priority: 'none' | 'low' | 'medium' | 'high' | 'urgent';
}
