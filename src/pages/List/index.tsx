import { Theme } from '../../components/theme'
import { useForm, FormsActions } from '../../context/FormContext';
import { useHistory } from 'react-router'
import * as S from './styles'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const List = () => {
  const history = useHistory()
  const { state, dispatch } = useForm()


  useEffect(() => {
    if (state.name === '') {
      history.push('/Support')
    } else {
      dispatch({
        type: FormsActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  return (
    <Theme>
      <S.Container>
        <S.Wrapper>
          <p>{state.name}</p> <p>{state.email}</p> <p>{state.cpf}</p> <p>{state.phone}</p>
        </S.Wrapper>
        <Link to="/" className="back">Voltar</Link>
      </S.Container>
    </Theme>
  )
}