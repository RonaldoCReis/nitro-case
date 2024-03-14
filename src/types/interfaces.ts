import { statusTitles } from '../utils/statusList';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: keyof typeof statusTitles;
}
