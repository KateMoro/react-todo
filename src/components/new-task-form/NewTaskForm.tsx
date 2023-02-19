import { ChangeEvent, FormEvent, useState } from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import styles from './NewTaskForm.module.scss';

const NewTaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const createTask = useToDoStore((state) => state.createTask);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (title.trim() !== '') {
      createTask(title);
      setTitle('');
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <input
        className={styles.formInput}
        type="text"
        name="title"
        placeholder="Type here.."
        value={title}
        onChange={handleChange}
      />

      <button
        className={styles.formButton}
        type="submit"
        aria-label="Add a new task"
      />

    </form>
  )
}

export default NewTaskForm;
