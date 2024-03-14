import { Edit2, EllipsisVertical } from 'lucide-react';
import type { Task } from '../types/interfaces';
import { cn } from '../utils/cn';
import { statusTitles } from '../constants/statusList';
import { activeTaskAtom, taskModalAtom } from '../atoms';
import { useAtom } from 'jotai';

const Task = ({ description, status, title, id }: Task) => {
  const [, setShowModal] = useAtom(taskModalAtom);
  const [, setActiveTask] = useAtom(activeTaskAtom);

  const handleEdit = () => {
    setActiveTask(id);
    setShowModal(true);
  };
  return (
    <div className="bg-white rounded-md p-8">
      <h2 className="text-primary text-lg font-semibold mb-2">{title}</h2>
      <p className="text-primary line-clamp-4">{description}</p>
      <div
        className={cn(
          'flex items-center gap-2 my-6',
          status === 'done' ? 'text-green-500' : 'text-blue-500'
        )}
      >
        <EllipsisVertical /> {statusTitles[status]}
      </div>
      <button
        onClick={handleEdit}
        className="flex text-gray-400 items-center gap-2 hover:text-gray-500"
      >
        <Edit2 size={18} /> Editar
      </button>
    </div>
  );
};

export default Task;
