import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTaskForm.module.scss';

const NewTaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTitle('');
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
