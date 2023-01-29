import { useToDoStore } from '../../data/stores/useToDoStore';
import TaskItem from '../task-item/TaskItem';
import TasksEmpty from '../tasks-empty/TasksEmpty';
import styles from './TasksList.module.scss';

const TasksList: React.FC = () => {
  const { tasks } = useToDoStore();

  return (
    <ul className={styles.tasksList}>
      {
        tasks.length === 0 && <TasksEmpty />
      }
      {
        tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))
      }
    </ul>
  )
}

export default TasksList;
