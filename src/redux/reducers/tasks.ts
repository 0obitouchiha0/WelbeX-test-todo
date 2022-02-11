import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface Task {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TasksInitialState {
    tasks: Task[]
}

const initialState: TasksInitialState = {
    tasks: []
}

const setTasks = createAsyncThunk(
    'tasks/setTasks',
    async () => {
        const res = await axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(({data}) => data.slice(0, 10))
        return res
    }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({
                userId: 1,
                id: state.tasks.length + 1,
                title: action.payload,
                completed: false
            })
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        renameTask: (state, action: PayloadAction<{title: string, id: number}>) => {
            for(let i in state.tasks) {
                if(state.tasks[i].id === action.payload.id) {
                    state.tasks[i].title = action.payload.title
                }
            }

        }
    },
    extraReducers: builder => {
        builder.addCase(setTasks.fulfilled, (state: TasksInitialState, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload
        })
    }

})


export const {addTask, deleteTask, renameTask} = tasksSlice.actions
export {setTasks}

export default tasksSlice.reducer

