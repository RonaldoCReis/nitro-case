import { statusTitles } from '../constants/statusList';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: keyof typeof statusTitles;
}
