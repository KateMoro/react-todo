import styles from './TasksEmpty.module.scss';

const TasksEmpty: React.FC = () => {

  return (
    <p className={styles.text}>
      There is no one task.
    </p>
  )
}

export default TasksEmpty;
