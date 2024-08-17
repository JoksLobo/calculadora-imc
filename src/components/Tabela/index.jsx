import styles from "./Tabela.module.css";

const Tabela = () => {
    return (
        <div className={styles.tabela}>
        <ul className={styles.list}>
            <li className={styles.listItem1}>IMC</li>
            <li className={styles.listItem}>Menor que 18,5</li>
            <li className={styles.listItem}>Entre 18,5 e 24,9</li>
            <li className={styles.listItem}>Entre 25,0 e 29,9</li>
            <li className={styles.listItem}>Entre 30,0 e 39,9</li>
            <li className={styles.listItem}>Acima de 40,0</li>
        </ul>
        <ul className={styles.list}>
            <li className={styles.listItem1}>Classificação</li>
            <li className={styles.listItem}>Magreza</li>
            <li className={styles.listItem}>Normal</li>
            <li className={styles.listItem}>Sobrepeso</li>
            <li className={styles.listItem}>Obesidade</li>
            <li className={styles.listItem}>Obesidade grave</li>
        </ul>
        </div>
    )
}

export default Tabela;