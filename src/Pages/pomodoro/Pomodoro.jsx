import React, { useState, useEffect, useRef } from "react";
import Palm from "../../assets/HandPalm.svg"

import { VscDebugStart } from "react-icons/vsc"
import "./pomodoro.css"




const Pomodoro = () => {
    const inputMyTime = useRef()

    const [erro, setErro] = useState(false)
    const [isCount, setIsCount] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0);

    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft - minutes * 60).toString().padStart(2, '0');


    useEffect(() => {
        const interval = setInterval(() => {
            isCount && setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [isCount])

    const handleStart = () => {
        const time = inputMyTime.current.value
        if (time <= 0) {
            setErro(true)
            minutes = 0
        }
        const minutes = parseInt(inputMyTime.current.value);
        setTimeLeft(minutes * 60);
        setIsCount(true)
        inputMyTime.current.value = ""
        setErro(false)
    }

    const handleRestart = () => {
        setIsCount(false)
        setTimeLeft(2 * 60)
    }

    return (
        <div className="container">
            <div className="info__time">
                {erro ? <input className="input__time__erro" type="number" placeholder="Campo vazio" ref={inputMyTime} /> : <input className="input__time" type="number" placeholder="Digite o tempo desejado" ref={inputMyTime} />}
                <button className="btn__start" onClick={handleStart} ><VscDebugStart size={30} /></button>
            </div>

            <main className="display__timer">
                <div className="timer">
                    <span className="minutes" >{minutes}</span>
                    <span className="ball">:</span>
                    <span className="seconds">{seconds}</span>
                </div>
                <button className="controls" onClick={handleRestart} >
                    <img src={Palm} alt="palma-de-mão" />
                    PARAR
                </button>
            </main>
        </div>
        
    )
}


export default Pomodoro