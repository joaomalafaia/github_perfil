import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuário }) => {
    const [repos, setRepos] = useState([])
    const [estáCarregando, setEstáCarregando] = useState(true)
    const [usuárioInexistente, setUsuárioInexistente] = useState(false)

    useEffect(() => {
        setEstáCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuário}/repos`)
        .then((res) => {
            if (res.status === 404) {
                setUsuárioInexistente(true);
                setEstáCarregando(false);
                return [];
            } else {
                return res.json();
            }
        })
        .then((resJson) => {
            setTimeout(() => {
                setEstáCarregando(false);
                setRepos(resJson);
            }, 3000);
        });
    }, [nomeUsuário]);

    return (
        <div className="container">
            {usuárioInexistente ? (
                <h2>Usuário não encontrado, tente um usuário válido</h2>
            ) : estáCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> 
                                {repositorio.name} 
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {repositorio.language} 
                            </div>
                                <a className={styles.itemLink}target="_blank" href={repositorio.html_url}>Visitar no github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList