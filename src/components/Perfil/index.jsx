import styles from './Perfil.module.css'

// export default () => {
const Perfil = ({ nomeUsuário }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuário}.png`}/>
            <h1 className={styles.name}>{nomeUsuário}</h1>
        </header>
    )
}

export default Perfil