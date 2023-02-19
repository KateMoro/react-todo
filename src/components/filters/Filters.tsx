import { shallow } from 'zustand/shallow';
import { useToDoStore } from '../../data/stores/useToDoStore';
import { filterButtons } from '../../const';
import styles from './Filters.module.scss';


const Filters: React.FC = () => {
  const [currentFilter, changeCurrentFilter] = useToDoStore(
    (state) => [state.currentFilter, state.changeCurrentFilter],
    shallow
  );

  return (
    <div className={styles.filters}>
      {
        filterButtons.map(({ name, label }) => {
          return (
            <button
              className={`${styles.filtersButton} ${name === currentFilter ? styles.filtersButtonActive : ''}`}
              type='button'
              key={name}
              onClick={() => changeCurrentFilter(name)}
            >
              {label}
            </button>
          )
        })
      }
    </div>
  )
}

export default Filters;
