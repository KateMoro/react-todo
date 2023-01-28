import { useToDoStore } from '../../data/stores/useToDoStore';
import TaskItem from '../task-item/TaskItem';
import styles from './TasksList.module.scss';

const TasksList: React.FC = () => {
  const { tasks } = useToDoStore();

  return (
    <ul className={styles.tasksList}>
      {
        tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))
      }
    </ul>
  )
}

export default TasksList;
