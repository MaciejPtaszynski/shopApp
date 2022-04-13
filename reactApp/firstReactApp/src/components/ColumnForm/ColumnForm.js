import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput />
            Icon: <TextInput />
            <Button>Add column</Button>
        </form>
        
	);
};

export default ColumnForm;
