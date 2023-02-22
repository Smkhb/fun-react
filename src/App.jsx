import { useState } from 'react'
import './App.css'

function App() {
  const [nome,setNome] = useState('')
  const [numero,setNumero] = useState(0)

  const escondaOZero = (numero) =>{
    if(numero === 0) return "";return numero
  }
  const soma = () => {
    setNumero((prevNumber) =>prevNumber +1)

  }
  return (
    <div className="App">
      <h2 className='Digite_Nome'>Digite seu nome</h2>
      <h2 className='Seu_Nome'>{nome}</h2>
      <input value={nome} onChange={e=>setNome(e.target.value)} className='Input_Nome' ></input>
      <h2>Contator de clicks</h2>
      <h2>{escondaOZero(numero)}</h2>
      <button onClick={soma} className='Btn_contador'>Contando</button>
    </div>
  )
}

export default App
