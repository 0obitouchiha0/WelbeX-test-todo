import React, {useState} from 'react';
import {Task, renameTask, deleteTask} from "../../redux/reducers/tasks";
import trashCanPng from "../../assets/images/tasks-trash-can.png"
import pencilPng from "../../assets/images/tasks-pencil.png"
import './TaskItem.scss'
import {useAppDispatch} from "../../utils/hooks";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {

    const [inputValue, setInputValue] = useState(task.title)

    const dispatch = useAppDispatch()

    const setInputValueHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const renameTaskHandler = () => {
        if(inputValue !== '') {
            dispatch(renameTask({
                title: inputValue,
                id: task.id
            }))
        }
    }

    const deleteTaskHandler = () => {
        dispatch(deleteTask(task.id))
    }

    return (
        <div className="taskitem__container">
            <div className='taskitem'>
                <input
                    className="taskitem__name"
                    value={inputValue}
                    onInput={setInputValueHandler}
                />
                <div>
                    <img
                        src={pencilPng}
                        alt=""
                        className="taskitem__btn"
                        onClick={renameTaskHandler}
                    />
                </div>
                <div>
                    <img
                        src={trashCanPng}
                        alt=""
                        className="taskitem__btn"
                        onClick={deleteTaskHandler}
                    />
                </div>
            </div>
        </div>
    )
};

export default TaskItem;
