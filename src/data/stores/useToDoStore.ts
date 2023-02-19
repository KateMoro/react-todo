import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../../helpers';
import { Task } from '../../types/task';
import { FilterType } from './../../const';

interface ToDoStore {
  tasks: Task[];
  currentFilter: string,
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  toggleDone: (id: string) => void;
  removeTask: (id: string) => void;
  changeCurrentFilter: (filter: string) => void;
}

export const useToDoStore = create<ToDoStore>()(persist((set, get) => (
  {
    tasks: [],
    currentFilter: FilterType.ALL,

    createTask: (title) => {
      const { tasks } = get();
      const newTask = {
        id: generateId(),
        title,
        isDone: false,
      };
      set({ tasks: [newTask, ...tasks] });
    },

    updateTask: (id, title) => {
      const { tasks } = get();
      set({
        tasks: tasks.map((task) => ({
          ...task,
          title: (task.id === id) ? title : task.title,
        }))
      })
    },

    toggleDone: (id) => {
      const { tasks } = get();
      set({
        tasks: tasks.map((task) => ({
          ...task,
          isDone: (task.id === id ? !task.isDone : task.isDone)
        }))
      })
    },

    removeTask: (id) => {
      const { tasks } = get();
      set({ tasks: tasks.filter((task) => task.id !== id) })
    },

    changeCurrentFilter: (filter) => {
      set({ currentFilter: filter })
    },
  }),
  {
    name: 'tasks',
  }
));
