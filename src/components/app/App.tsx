import NewTaskForm from '../new-task-form/NewTaskForm';
import TasksList from '../tasks-list/TasksList';
import styles from './App.module.scss';

const App: React.FC = () => {

  return (
    <>
      <h1 className={styles.appTitle}>ToDo List</h1>
      <NewTaskForm />
      <TasksList />
    </>
  )
}

export default App;
