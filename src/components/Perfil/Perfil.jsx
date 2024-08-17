import React from "react";
import minhaImagem from "../imagens/medicimg.png";
import styles from "./Perfil.module.css";

const Perfil = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={minhaImagem} alt="foto gerada por i.a de uma médica" />
                <h1 className={styles.title}>Calculadora IMC</h1>
            </div>
        </header>
    )

}

export default Perfil;