import React, {useState, useRef} from "react";
import './todo.css'
import { RiAddCircleLine, RiSearchLine, RiCloseFill } from "react-icons/ri";
import { TbNotesOff } from "react-icons/tb";
import { BsPencil, BsCheck2, BsTrash } from "react-icons/bs";




import Footer from "../../components/Footer";





const Todo = () => {
    const [infoHide, setHide] = useState("info__item")
    const [taskHide, setTaskHide] = useState("is__main hide")

    const [tasks, setTask] = useState([])

    const taskName = useRef()

     const [teste, setTeste] = useState(0)

    const addNum = () => {
        setTeste(teste + 1)
        console.log(teste)
        setHide("info__item hide")
        setTaskHide("is__main")
        console.log(taskName.current.value)

        setTask()
    }


    return (
        <div className="container">
            <div className="all__items">
                <div className="add__task">
                    <input ref={taskName} className="task__item" type="text" placeholder="Adicione as suas tarefas..." />
                    <button className="btn__add__task" onClick={addNum}>
                        <RiAddCircleLine size={25} />
                    </button>
                </div>
                <div className={infoHide}>
                    <div className="note__img">
                        <TbNotesOff size={50} />
                    </div>

                    <h3>
                        Você não possui tarefas listadas
                    </h3>
                    <p>
                        Crie suas tarefas e organize aqui...
                    </p>
                </div>
                <main className={taskHide}>
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
                    <div className="my__tasks ">
                        <div className="tasks">
                            <p>ESTUDAR</p>
                            <div className="icons__item">
                                <ul className="option__items">
                                    <li><BsPencil /></li>
                                    <li><BsCheck2 /></li>
                                    <li><BsTrash /></li>
                                </ul>
                            </div>

                        </div>
                        <div className="tasks">
                            <p>ESTUDAR</p>
                            <div className="icons__item">
                                <ul className="option__items">
                                    <li><BsPencil /></li>
                                    <li><BsCheck2 /></li>
                                    <li><BsTrash /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="tasks">
                            <p>ESTUDAR</p>
                            <div className="icons__item">
                                <ul className="option__items">
                                    <li><BsPencil /></li>
                                    <li><BsCheck2 /></li>
                                    <li><BsTrash /></li>
                                </ul>
                            </div>
                        </div>

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

            <Footer />
        </div>
    )
}


export default Todo