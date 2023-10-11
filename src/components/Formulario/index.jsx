import { useState, useEffect } from "react" // funções com o 'use' são chamadas de hooks (anzóis)

const Formulário = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log("componente iniciou") // com o array vazio mostra apenas se o componente -no caso o formulário- foi iniciado
        
        return () => {
            console.log("o componente finalizou") // só vai se aplicar se houver uma condicional, comoum booleano
        }
    }, [])

    useEffect(() => {
        console.log("o estado mudou")
    }, [nome]) // aqui nós colocamos o argumento desse useEffect, onde ele vai observar se aparece alguma mudança

    useEffect(() => {
        console.log("matéria A mudou para: " + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)
            return evento.target.value
        })
    }

    function renderizaResultado() {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Parabéns, {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>{nome}, você foi reporvado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))} />

            {renderizaResultado()}
        </form>
    )
}

export default Formulário