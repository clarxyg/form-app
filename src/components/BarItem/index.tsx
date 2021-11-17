import { Link } from 'react-router-dom'
import * as S from './styles'

type Props = {
  title: string;
  icon: string;
  path: string;
  active: boolean;
}

export const BarItem = ({ title, path, active }: Props) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Wrapper>
          <S.Info>
            <S.Title> {title} </S.Title>
          </S.Info>
          <S.Dot active={active}>

          </S.Dot>
        </S.Wrapper>
      </Link>
    </S.Container>
  )
}