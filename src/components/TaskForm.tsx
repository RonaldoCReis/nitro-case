import { useForm } from 'react-hook-form';
import { statusList, statusTitles } from '../constants/statusList';
import { Task } from '../types/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '../utils/cn';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { activeTaskAtom, taskModalAtom, tasksAtom } from '../atoms';

const inputStyles = 'border bg-gray-100 px-4 py-3 block w-full';

const TaskForm = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const activeTaskId = useAtomValue(activeTaskAtom);
  const setShowModal = useSetAtom(taskModalAtom);

  const activeTask = tasks.find((task) => task.id === activeTaskId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      id: activeTask ? activeTask.id : uuidv4(),
      title: activeTask ? activeTask.title : '',
      description: activeTask ? activeTask.description : '',
      status: activeTask ? activeTask.status : 'inProgress',
    },
  });

  const onSubmit = handleSubmit((data) => {
    const taskIndex = tasks.findIndex((task) => task.id === data.id);
    const newTasks = [...tasks];
    if (taskIndex > -1) {
      newTasks[taskIndex] = data;
    } else {
      newTasks.push(data);
    }
    setTasks(newTasks);
    setShowModal(false);
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTasks = tasks.filter((task) => task.id !== activeTaskId);
    setTasks(newTasks);
    setShowModal(false);
  };

  return (
    <form className="flex flex-col w-full gap-6" onSubmit={onSubmit}>
      <input type="hidden" {...register('id')} />
      <div>
        <input
          className={cn(inputStyles, errors.title && 'border-red-500')}
          type="text"
          placeholder="Título da tarefa"
          {...register('title', { required: 'O título é obrigatório' })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm mt-1 block">
            {errors.title.message}
          </span>
        )}
      </div>
      <textarea
        className={cn(inputStyles, 'resize-none')}
        rows={8}
        placeholder="Descrição da tarefa"
        {...register('description')}
      />
      <select
        {...register('status')}
        className={cn(inputStyles, 'appearance-none', !activeTask && 'hidden')}
      >
        {statusList.map((status) => (
          <option key={status} value={status}>
            {statusTitles[status]}
          </option>
        ))}
      </select>
      <div className="flex justify-end gap-4 mt-10">
        {activeTask && (
          <button
            onClick={handleDelete}
            className="border border-red-500 text-red-500 font-semibold py-2 px-10 rounded-full hover:bg-red-100"
          >
            Excluir
          </button>
        )}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-green-900 font-semibold py-2 px-10 rounded-full"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
