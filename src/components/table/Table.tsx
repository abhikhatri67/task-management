import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Task } from '@/types/task';

interface TableProps {
  items: Array<Task>;
  columnHeaders: string[];
}

const TaskTable: FC<TableProps> = ({ items, columnHeaders }) => {
  const getStatusBadgeClass = (status: string) => {
    const baseClass = 'px-2 py-1 rounded-md text-xs font-medium capitalize';
    switch (status.toLowerCase()) {
      case 'in_progress':
        return `${baseClass} bg-blue-100 text-blue-700`;
      case 'not_started':
        return `${baseClass} bg-gray-100 text-gray-700`;
      case 'completed':
        return `${baseClass} bg-gray-100 text-gray-700`;
      default:
        return `${baseClass} bg-gray-100 text-gray-700`;
    }
  };

  const getPriorityBadgeClass = (priority: string) => {
    const baseClass = 'px-2 py-1 rounded-md text-xs font-medium capitalize';
    switch (priority.toLowerCase()) {
      case 'high':
        return `${baseClass} bg-red-100 text-red-700`;
      case 'medium':
        return `${baseClass} bg-yellow-100 text-yellow-700`;
      case 'low':
        return `${baseClass} bg-green-100 text-green-700`;
      case 'urgent':
        return `${baseClass} bg-red-100 text-red-700`;
      default:
        return `${baseClass} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th
                key={header}
                className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {items.map((item) => (
            <tr key={item.id} className="border-t border-gray-100">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">
                {item.id}
              </td>
              <td className="py-3 px-4 text-sm text-gray-900">{item.title}</td>
              <td className="py-3 px-4">
                <span className={getPriorityBadgeClass(item.priority)}>
                  {item.priority}
                </span>
              </td>
              <td className="py-3 px-4">
                <span className={getStatusBadgeClass(item.status)}>
                  {item.status.replace('_', ' ')}
                </span>
              </td>
              <td className="py-3 px-4 text-right">
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View task
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
