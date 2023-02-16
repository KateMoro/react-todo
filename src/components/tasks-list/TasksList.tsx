import { useToDoStore } from '../../data/stores/useToDoStore';
import { filter } from '../../helpers';
import TaskItem from '../task-item/TaskItem';
import TasksEmpty from '../tasks-empty/TasksEmpty';
import styles from './TasksList.module.scss';

const TasksList: React.FC = () => {
  const { tasks, currentFilter } = useToDoStore();
  const filteredTasks = filter[currentFilter](tasks);

  return (
    <ul className={styles.tasksList}>
      {
        tasks.length === 0 && <TasksEmpty />
      }
      {
        filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))
      }
    </ul>
  )
}

export default TasksList;
