/* eslint-disable react/display-name */
import { useRouter } from 'next/router'

export default function comAutorizacao(Componente) {
  const estaLogado = true;
  return (props) => {
    const router = useRouter();
    if (typeof window !== 'undefined') {
      if (!estaLogado) {
        router.push('/login')
        return null
      }
      return (
        <>
          <Componente {...props} />
        </>
      )
    }
    return null
  }
}