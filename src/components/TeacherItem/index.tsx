import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/62821363?s=460&u=c3098ea13bac42421094b904fce980ec83760e74&v=4" alt="Yllan Gurgel"/>
                <div>
                    <strong>Yllan Gurgel</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro voluptatibus quod quaerat animi nesciunt voluptatum harum qui veritatis, cupiditate esse amet nisi expedita, rem, eos maxime pariatur minima dolor!
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>    
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem