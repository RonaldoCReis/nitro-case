import { atomWithStorage } from 'jotai/utils';
import { Task } from './types/interfaces';
import { atom } from 'jotai';

export const tasksAtom = atomWithStorage<Task[]>('tasks', [
  {
    id: '1',
    title: 'Task 1',
    description:
      'This is a task in progress This is a task in progress This is a task in progress This is a task in progress This is a task in progress',
    status: 'inProgress',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'This is a task',
    status: 'done',
  },
]);

export const activeTaskAtom = atom<Task['id'] | null>(null);

export const taskModalAtom = atom(false);
