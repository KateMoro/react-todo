import { FilterType } from './const';
import { Task } from './types/task';

type GenerateID = () => string;

export const generateId: GenerateID = () => {
  return Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
};

export const filter = {
  [FilterType.ALL]: (tasks: Task[]) => tasks,
  [FilterType.ACTIVE]: (tasks: Task[]) => tasks.filter((task) => task.isDone === false),
  [FilterType.DONE]: (tasks: Task[]) => tasks.filter((task) => task.isDone === true),
};
