import { Theme } from '../../components/theme'
import { useForm, FormsActions } from '../../context/FormContext';
import { useHistory } from 'react-router'
import * as S from './styles'
import { ChangeEvent, useEffect } from 'react';


export const FormStep = () => {
  const history = useHistory()
  const { state, dispatch } = useForm()

  const handleNext = () => {
    if (state.name !== '' && state.email !== '' && state.cpf !== '' && state.phone !== '') {
      history.push('/Support')
    } else {
      console.log('Preencha o formulário')
    }
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormsActions.setName,
      payload: e.target.value
    })
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormsActions.setEmail,
      payload: e.target.value
    })
  }

  const handleChangeCpf = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormsActions.setCpf,
      payload: e.target.value
    })
  }

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormsActions.setPhone,
      payload: e.target.value
    })
  }

  useEffect(() => {
    dispatch({
      type: FormsActions.setCurrentStep,
      payload: 1
    })
  }, [])

  return (
    <Theme>
      <S.Container>
        <div className="form">
          <input
            type="text"
            name="name"
            autoComplete="off"
            required
            onChange={handleChangeName} />
          <label
            htmlFor="name"
            className="label-name">
            <span
              className="content-name" >
              Nome completo (Sem abreviações)
            </span>
          </label>
        </div>
        <div className="form">
          <input
            type="text"
            name="email"
            autoComplete="off"
            required
            onChange={handleChangeEmail}
          />
          <label
            htmlFor="email"
            className="label-name">
            <span
              className="content-name" >
              E-mail
            </span>
          </label>
        </div>
        <div className="form">
          <input
            type="text"
            name="cpf"
            autoComplete="off"
            required
            onChange={handleChangeCpf}
          />
          <label
            htmlFor="cpf"
            className="label-name">
            <span
              className="content-name" >
              CPF
            </span>
          </label>
        </div>
        <div className="form">
          <input
            type="phone"
            name="phone"
            autoComplete="off"
            required
            onChange={handleChangePhone}
          />
          <label
            htmlFor="phone"
            className="label-name">
            <span
              className="content-name" >
              Telefone
            </span>
          </label>
        </div>
        <button onClick={handleNext}>
          Cadastrar
        </button>
      </S.Container>
    </Theme>
  )
}