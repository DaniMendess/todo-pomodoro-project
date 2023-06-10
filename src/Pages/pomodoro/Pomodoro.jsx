import React from "react";

import { VscDebugStart } from "react-icons/vsc"


import "./pomodoro.css"


const Pomodoro = () => {
    return (
        <div className="container">
            <div className="info__time">
                <input className="input__time" type="text" placeholder="Digite o tempo desejado" />
                <button className="btn__start"><VscDebugStart size={30} /></button>
            </div>

            <main className="display__timer">
                <div class="timer">
                    <span className="minutes">10</span>
                    <span className="ball">:</span>
                    <span className="seconds">00</span>
                </div>
                <button class="controls">
                
                    PARAR
                </button>
            </main>
        </div>
    )
}


export default Pomodoro