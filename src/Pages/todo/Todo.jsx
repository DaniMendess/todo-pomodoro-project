import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './todo.css'
import { RiAddCircleLine, RiSearchLine, RiCloseFill } from "react-icons/ri";
import { TbNotesOff } from "react-icons/tb";
import { BsPencil, BsCheck2, BsTrash } from "react-icons/bs";

import Footer from "../../components/Footer"



const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState('modal-wraper');
    const taskName = useRef();
    const inputEditTask = useRef();
    const editTaskId = useRef(null);

    const handleItem = () => {
        if (taskName.current.value) {
            document.querySelector('.btn__add__task').style.cursor = 'pointer'
            console.log("red")
        } else {
            document.querySelector('.btn__add__task').style.cursor = 'no-drop'
        }
    }

    const addTask = () => {
        if (!taskName.current.value) {
            handleItem()
            return
        }

        const newTask = { id: uuidv4(), text: taskName.current.value, isComplete: false }
        setTasks([...tasks, newTask])
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
    }

    const toggleTaskComplete = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isComplete: !task.isComplete };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const editMyTask = (id) => {
        if (modal === 'modal-wraper') {
            setModal('modal-wraper open')
        } else {
            setModal('modal-wraper')
        }
        editTaskId.current = id;
    }

    const editTask = () => {
        const id = editTaskId.current;
        const nameTask = inputEditTask.current.value;
        
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: nameTask };
            }
            return task;
        });
        setTasks(updatedTasks);
        setModal('modal-wraper');
        inputEditTask.current.value = "";
        editTaskId.current = null;
    }


    return (
        <>
            <div className="all__items">
                <div className="add__task">
                    <input ref={taskName} className="task__item" type="text" placeholder="Adicione as suas tarefas..." onChange={handleItem} />
                    <button className="btn__add__task" onClick={addTask}>
                        <RiAddCircleLine size={25} />
                    </button>
                </div>
                <main className="is__main">
                    {tasks.length > 0 && (
                        <div className="nav__search">
                            <div className="search__list">
                                <form className="search__list__item">
                                    <input className="search__item" placeholder="Pesquisar" type="text" />
                                    <button className="btn__search__task">
                                        <RiSearchLine />
                                    </button>

                                    <select defaultValue={'DEFAULT'} className="select__item__search">
                                        <option value="DEFAULT" disabled>Filtrar</option>
                                        <option value="feitas">Feitas</option>
                                        <option value="feitas">A fazer</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="my__tasks ">
                        {tasks.length ? (
                            <>
                                <div className="tasks">
                                    {tasks.map((task) => (
                                        <div className={task.isComplete ? 'task-container completed' : 'task-container'} key={task.id}
                                        >
                                            <p style={{ fontSize: 14 }} className="task__name">{task.text}</p>
                                            <div className="option__items">
                                                <span><BsPencil onClick={() => editMyTask(task.id)} /></span>
                                                <span><BsCheck2 onClick={() => toggleTaskComplete(task.id)} /></span>
                                                <span><BsTrash onClick={() => deleteTask(task.id)} /></span>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </>

                        ) : <div className="info__item">
                            <div className="note__img">
                                <TbNotesOff size={90} />
                            </div>

                            <h3>
                                Você não possui tarefas listadas
                            </h3>
                            <p>
                                Crie suas tarefas e organize aqui...
                            </p>
                        </div>}
                    </div>
                </main>
            </div>
            {tasks.map((task) => (
                <div className={modal} key={task.id}>
                <div className="modal card">
                    <div className="input__edit">
                        <input ref={inputEditTask} className="edit__task" type="text" placeholder="Digite o novo nome..." />
                        <button className="btn__edit" onClick={() => editTask(task.id)} >
                            <BsPencil />
                        </button>
                    </div>
                    <h2>
                        <button className="close" onClick={editMyTask} >
                            <RiCloseFill />
                        </button>
                    </h2>
                </div>
            </div>
            ))}
            
            <Footer />
        </>
    )
}


export default Todo