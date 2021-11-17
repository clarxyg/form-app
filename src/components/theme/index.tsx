import { ReactNode } from 'react'
import { useForm } from '../../context/FormContext'
import { BarItem } from '../BarItem'
import { Header } from '../Header'
import * as S from './styles'

type Props = {
  children: ReactNode;
}

export const Theme = ({ children }: Props) => {
  const { state } = useForm()


  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Bar>
            <BarItem
              title="Cadastro"
              icon="user"
              path="/"
              active={state.currentStep === 1}
            />
            <BarItem
              title="Confirmação"
              icon="confirmation"
              path="/Support"
              active={state.currentStep === 2}
            />
            <BarItem
              title="Lista"
              icon="list"
              path="/List"
              active={state.currentStep === 3}
            />
          </S.Bar>
          <S.Page>
            {children}
          </S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  )
}