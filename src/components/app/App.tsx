import NewTaskForm from '../new-task-form/NewTaskForm';
import StatusPanel from '../status-panel/StatusPanel';
import TasksList from '../tasks-list/TasksList';
import styles from './App.module.scss';

const App: React.FC = () => {

  return (
    <>
      <h1 className={styles.appTitle}>ToDo List</h1>
      <NewTaskForm />
      <StatusPanel />
      <TasksList />
    </>
  )
}

export default App;
