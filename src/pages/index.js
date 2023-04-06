import { useState } from 'react'
import { Pessoa } from '@/components/Pessoa'
import comAutorizacao from '@/hoc/comAutorizacao'

function Home() {
  const pessoas = [
    {
      nome: 'Douglas',
      idade: 25
    },
    {
      nome: 'Giovanni',
      idade: 15
    },
    {
      nome: 'Maria',
      idade: 16
    },
    {
      nome: 'Carol',
      idade: 34
    }

  ]
  const [idadeDouglas, setIdadeDouglas] = useState(15)

  const incrementaIdadeDouglas = () => {
    const idade = idadeDouglas + 1;
    setIdadeDouglas(idade)
  }

  return (
    <div>
       <h1>Giovanni {process.env.NEXT_PUBLIC_TEST}</h1>
      <h2>Perrotta</h2>
     <Pessoa nome="Douglas" idade={idadeDouglas} />
      <Pessoa nome="Giovanni" idade={64} />
      {pessoas.map((p, index) => {
        return (
          <Pessoa
            key={index}
            nome={p.nome}
            idade={p.idade}
          />
        )
      })}

      <button onClick={incrementaIdadeDouglas}>incrementa Idade do Douglas</button>
    </div>
  )
}


export default  comAutorizacao(Home)
