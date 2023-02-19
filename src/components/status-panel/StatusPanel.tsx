import { useToDoStore } from '../../data/stores/useToDoStore';
import Filters from '../filters/Filters';
import { filter } from '../../helpers';
import { FilterType } from '../../const';
import styles from './StatusPanel.module.scss';

const StatusPanel: React.FC = () => {
  const tasks = useToDoStore((state) => state.tasks);
  const activeTasks = filter[FilterType.ACTIVE](tasks);

  return (
    <div className={styles.statusPanel}>
      <p className={styles.statusPanelText}>
        total: {tasks.length}
      </p>
      <p className={styles.statusPanelText}>
        active: {activeTasks.length}
      </p>

      <Filters />
    </div>
  )
}

export default StatusPanel;
