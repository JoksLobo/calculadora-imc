import { useState,} from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularImc = () => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
            setImc(imcCalculado.toFixed(2));
        }

        return (
            <>
                <p className={styles.text}>Olá, vamos calcular o seu IMC, preencha os campos abaixo:</p>
                <form>
                    <input className={styles.forms} type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Informe seu peso" />
                    <input className={styles.forms} type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Informe sua altura" />
                    <button onClick={calcularImc} className={styles.button} type="button">Calcular IMC</button>
                </form>
                {imc && <p>Seu IMC é {imc}</p>}
            </>
        )

    };
}

    export default Formulario;