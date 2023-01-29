import { useEffect, useRef, useState } from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import styles from './TaskItem.module.scss';

interface TaskItem {
  id: string;
  title: string;
}

const TaskItem: React.FC<TaskItem> = ({ id, title }) => {
  const { removeTask, updateTask } = useToDoStore();
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const taskEditInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      taskEditInputRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <li className={styles.task}>
      <label className={styles.taskLabel}>
        <input className={styles.taskCheckbox} type="checkbox" />
        {isEditMode ? (
          <input
            className={styles.taskEditInput}
            type="text"
            ref={taskEditInputRef}
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                updateTask(id, value);
                setIsEditMode(false);
              }
            }}
          />
        ) : (
          <span>{title}</span>
        )}
      </label>

      {isEditMode ? (
        <button
          className={`${styles.taskButton} ${styles.taskButtonSave}`}
          type="button"
          aria-label="save"
          onClick={() => {
            updateTask(id, value);
            setIsEditMode(false);
          }}
        />
      ) : (
        <button
          className={`${styles.taskButton} ${styles.taskButtonEdit}`}
          type="button"
          aria-label="edit"
          onClick={() => setIsEditMode(true)}
        />
      )}

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
