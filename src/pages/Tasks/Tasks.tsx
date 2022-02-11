import React, {useState} from 'react';
import './Tasks.scss'
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {addTask} from '../../redux/reducers/tasks'
import TaskItem from "../../components/TaskItem/TaskItem";



const Tasks = () => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.tasks.tasks)


    const setInputValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        if(inputValue !== '') {
            dispatch(addTask(inputValue))
            setInputValue('')
        }
    }

    const taskList = tasks.map(task => (
        <TaskItem task={task} key={task.id}/>
    ))

    return (
        <div className='tasks'>
            <div className="tasks__form">
                <input
                    type="text"
                    placeholder='Введите название'
                    value={inputValue}
                    onInput={setInputValueHandler}
                />

                <button
                    onClick={addTaskHandler}
                >Добавить</button>
            </div>
            <div className="tasks__list">
                {taskList}
            </div>
        </div>
    );
};

export default Tasks;