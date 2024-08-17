import styles from "./Formulario.module.css";

const Formulario = () => {
    return (
        <>
        <p className={styles.text}>Olá, vamos calcular o seu IMC, preencha os campos abaixo:</p>
        <form>
            <input className={styles.forms} type="number" placeholder="Informe seu peso"/>
            <input className={styles.forms} type="number" placeholder="Informe sua altura"/>
            <button className={styles.button} type="button">Calcular IMC</button>
        </form>
        
        </>
    )
}

export default Formulario;