import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './todo.css'
import { RiAddCircleLine, RiSearchLine, RiCloseFill } from "react-icons/ri";
import { TbNotesOff } from "react-icons/tb";
import { BsPencil, BsCheck2, BsTrash } from "react-icons/bs";

import Footer from "../../components/Footer"

const Todo = () => {
    const [tasks, setTask] = useState([])

    const [complete, setComplete] = useState(true)

    
    // [{ id: random, task: "ISSO" },{ id: random, task: "ISSO" }]

    const taskName = useRef()

    // const newTask = {id:random, task: taskName.current.value}

    const handleItem = () => {
        if(taskName.current.value) {
            document.querySelector('.btn__add__task').style.cursor = 'pointer'
            console.log("red")
        }else{
            document.querySelector('.btn__add__task').style.cursor = 'no-drop'
        }
    }



    const addTask = () => {

        if(!taskName.current.value ) {
            handleItem()
            return
        }

        const newTask = { id: uuidv4(), text: taskName.current.value, isComplete: false } 
        setTask([...tasks, newTask])
    }

    const deleteTask = (taskId) => {
        const newTask = tasks.filter(task => task.id !== taskId)
        setTask(newTask)
    }

    const isTaskComplete = (id) => {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return { ...task, isComplete: !task.isComplete };
          }
          return task;
        });
      
        setTask(updatedTasks);
        console.log(updatedTasks);
      };


    return (
        <>
            <div className="all__items">
                <div className="add__task">
                    <input ref={taskName} className="task__item" type="text" placeholder="Adicione as suas tarefas..." onChange={handleItem}/>
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
                                        <p style={{fontSize: 14}}className="task__name">{task.text}</p>
                                        <div className="option__items">
                                            <span><BsPencil /></span>
                                            <span><BsCheck2 onClick={() => isTaskComplete(task.id)} /></span>
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
            <div className="modal-wraper  ">
                <div className="modal card">
                    <form className="input__edit" action="">
                        <input className="edit__task" type="text" placeholder="Digite o novo nome..." />
                        <button className="btn__edit">
                            <BsPencil />
                        </button>
                    </form>
                    <h2>
                        <button className="close" >
                            <RiCloseFill />
                        </button>
                    </h2>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Todo