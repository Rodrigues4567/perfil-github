import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import MainPage from './pages/MainPage';
import { User } from './types';

function App() {

  const[apiGithub, setApiGithub] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function showApi() {
    const valueInput = inputRef.current?.value.toLowerCase()

    if (!valueInput) return;

    try {
      const res = await axios.get<User>(`https://api.github.com/users/${valueInput}`)
      setApiGithub(res.data)
      console.log(res.data)
    }
    catch(err) {
      console.error(err)
      setApiGithub(null)
    }
  }

  return (
    <>
      <MainPage inputRef={inputRef} showApi={showApi} apiGithub={apiGithub} />
    </>
  )
}

export default App
