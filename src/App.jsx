import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulário from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formuárioEstáVisível, setFormuárioEstáVisível] = useState(true)
  const [nomeUsuário, setNomeUsuário] = useState('')

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuário(e.target.value)}/>
      {nomeUsuário.length > 4 && (
        <>
          <Perfil nomeUsuário={nomeUsuário}/>
          <ReposList nomeUsuário={nomeUsuário}/>
        </>
      )}

      {/* {formuárioEstáVisível && (
        <Formulário/>
      )}
      <button onClick={() => setFormuárioEstáVisível(!formuárioEstáVisível)} type="button">toggle form</button>  */}
    </>
  )
}

export default App
