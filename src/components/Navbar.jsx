import React from "react";
import { useNavigate, } from "react-router-dom";
import { RiTimerLine } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";


import "../components/navbar.css"


const Navbar = () => {
    
    
    const navigate = useNavigate()

    const NavPomo = () => {
        navigate('/pomodoro')
        
    }
    const NavTodo = () => {
        navigate('/') 
        
    }

    return (
        <>
            <header className="header__item">
                <nav className="icon__item">
                    <a onClick={NavTodo}>
                        <BiNotepad size={35} />
                    </a>
                    <a onClick={NavPomo}>
                        <RiTimerLine size={35} />
                    </a>
                </nav>
            </header>

        </>

    )
}

export default Navbar