import { atomWithStorage } from 'jotai/utils';
import { Task } from './types/interfaces';
import { atom } from 'jotai';

export const tasksAtom = atomWithStorage<Task[]>('tasks', []);

export const activeTaskAtom = atom<Task['id'] | null>(null);

export const taskModalAtom = atom(false);
