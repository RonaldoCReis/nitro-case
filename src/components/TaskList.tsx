import { useAtomValue, useSetAtom } from 'jotai';
import { Task as TaskType } from '../types/interfaces';
import Task from './Task';
import Button from './ui/Button';
import Paper from './ui/Paper';
import SectionTitle from './ui/SectionTitle';
import { activeTaskAtom, taskModalAtom, tasksAtom } from '../atoms';
import { statusTitles } from '../constants/statusList';

interface TaskListProps {
  status: TaskType['status'];
}

const TaskList = ({ status }: TaskListProps) => {
  const tasks = useAtomValue(tasksAtom);
  const setShowModal = useSetAtom(taskModalAtom);
  const setActiveTask = useSetAtom(activeTaskAtom);

  const filteredTasks = tasks.filter((task) => task.status === status);

  const handleNewTask = () => {
    setShowModal(true);
    setActiveTask(null);
  };

  return (
    <section className="w-full">
      <SectionTitle>{statusTitles[status]}</SectionTitle>
      <Paper>
        {status === 'inProgress' && (
          <Button onClick={handleNewTask} className="mb-6">
            Adicionar Nova Tarefa
          </Button>
        )}
        <ul className="flex flex-col gap-6">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Task {...task} />
            </li>
          ))}
          {filteredTasks.length === 0 && (
            <div className="border border-dashed p-8 bg-gray-50 rounded-md text-center">
              Nenhuma tarefa nessa etapa
            </div>
          )}
        </ul>
      </Paper>
    </section>
  );
};

export default TaskList;
