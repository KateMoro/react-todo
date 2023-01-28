import { useToDoStore } from '../../data/stores/useToDoStore';
import styles from './TaskItem.module.scss';

interface TaskItem {
  id: string;
  title: string;
}

const TaskItem: React.FC<TaskItem> = ({ id, title }) => {
  const { removeTask } = useToDoStore();

  return (
    <li className={styles.task}>
      <label>
        <input className={styles.taskCheckbox} type="checkbox" />
        <span>{title}</span>
      </label>

      <button
        className={`${styles.taskButton} ${styles.taskButtonRemove}`}
        type="button"
        aria-label="remove"
        onClick={() => removeTask(id)}
      />
    </li>
  )
}

export default TaskItem;
