import React from 'react';
import './Main.scss'
import logo from '../../assets/images/main-todo-logo.png';

const Main = () => {
    return (
        <div className='main'>
            <div className="main__img-container">
                <img src={logo} alt=""/>
            </div>
            <p>На данном сайте находится веб-приложение Todo List, написанное Макогоновым Данилом на языке TypeScript.
                В качесте стейт менеджера использовался Redux и упрощающая работу с ним библиотека Redux Toolkit.
                В приложении реализованы все функции, указанные в ТЗ: добавление, удаление, редактирование и получение задач с помощью API. </p>
        </div>
    );
};

export default Main;
