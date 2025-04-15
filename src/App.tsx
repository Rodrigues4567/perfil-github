import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import MainPage from './pages/MainPage';
import { User } from './types';

function App() {

  const [apiGithub, setApiGithub] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMensage, setErrorMensage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function showApi() {
    const valueInput = inputRef.current?.value.toLowerCase()

    if (!valueInput) return;

    setIsLoading(true)
    setApiGithub(null)
    setErrorMensage(null)

    try {
      const res = await axios.get<User>(`https://api.github.com/users/${valueInput}`)
      setApiGithub(res.data)
      console.log(res.data)
    }
    catch(err) {
      console.error(err)
      setErrorMensage('Nenhum perfil foi encontrado com esse nome de usuário.')
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <MainPage inputRef={inputRef} showApi={showApi} apiGithub={apiGithub} isLoading={isLoading} errorMensage={errorMensage} />
    </>
  )
}

export default App
