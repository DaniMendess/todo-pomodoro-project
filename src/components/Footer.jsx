import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";

import "./footer.css"

const Footer = () => {
    return (
        <>
              <div className="footer__item__infos">
                <div className="icon__social">
                    <a href="">
                        <AiOutlineLinkedin size={20} />
                    </a>
                    <a href="">
                        <TbBrandGithub size={20} />
                    </a>
                </div>

                <p>Desenvolvido por: Daniel Barbosa Mendes</p>
            </div>
        </>
    )
}

export default Footer