import { Theme } from '../../components/theme'
import { useForm, FormsActions } from '../../context/FormContext';
import { useHistory } from 'react-router'
import * as S from './styles'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Support = () => {
  const history = useHistory()
  const { state, dispatch } = useForm()

  const handleNext = () => {
    history.push('/List')
    if (state.cpf !== '' && state.phone !== '' && state.email !== '') {
      console.log(state)
    }

    localStorage.setItem('key', 'value')
  }

  useEffect(() => {
    if (state.name === '') {
      history.push('/')
    } else {
      dispatch({
        type: FormsActions.setCurrentStep,
        payload: 2
      })
    }
  }, [])

  return (
    <Theme>
      <S.Container>
        <h2> Seja bem-vindo(a) ao Form App, {state.name}</h2>
        <p>Seus dados estão guardados, clique em "próximo" para ver quem esteve aqui 😁</p>
        <Link to="/" className="back">Voltar</Link>
        <button onClick={handleNext}>
          Próximo
        </button>
      </S.Container>
    </Theme>
  )
}

function value(arg0: string, value: any, any: any) {
  throw new Error('Function not implemented.');
}
