/* eslint-disable react/display-name */
import { useRouter } from 'next/router'

export default function comAutorizacao(Componente) {
  const estaLogado = false;
  return (props) => {
    const router = useRouter();
    if (!estaLogado ) {
      if (typeof window !== 'undefined') {
        router.push('/login')
      }
    } else {
      return <Componente {...props} />
    }
  }
}