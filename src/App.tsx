import React, {FC, useEffect} from 'react';
import './App.scss';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Tasks from "./pages/Tasks/Tasks";
import NavBar from "./components/NavBar/Navbar";
import {setTasks} from "./redux/reducers/tasks";
import {useAppDispatch, useAppSelector} from "./utils/hooks";

const App: FC = () => {

    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setTasks())
    }, [])

  return (
    <div className="app">
        <NavBar/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    </div>
  );
}

export default App;
