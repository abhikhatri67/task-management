import { FC } from 'react';

import TaskTable from '@/components/table/Table';
import { Tasks as tasks } from '../data/taskData';

const headers: string[] = ['ID', 'Title', 'Priority', 'Status'];

const Tasks: FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">Tasks</h1>
      <TaskTable items={tasks} columnHeaders={headers} />
    </div>
  );
};

export default Tasks;
