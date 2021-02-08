import Logo from 'components/Logo'
import * as S from './styles'


const Heading = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Logo />
    </S.LogoWrapper>
    <S.MenuNav>
      <div>
        <S.MenuLink href="#">Calculators</S.MenuLink>
        <S.Underlined/>
      </div>
      <div>
        <S.MenuLink href="#">Partners</S.MenuLink>
        <S.Underlined/>
      </div>
    </S.MenuNav>
  </S.Wrapper>
)

export default Heading
