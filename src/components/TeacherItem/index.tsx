import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/66969881?s=460&u=896cc4f9bdc929eb4f30f3c9bcfce04fdd97b793&v=4" alt="Maria Rubinger"/> 
                <div>
                    <strong>Maria Rubinger</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Apaixonada por cálculo desde as operações básicas.
                <br /><br />
                Gosta de ensinar de forma descontraída e descomplicada.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;