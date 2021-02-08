import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons/'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <h2>Contact us</h2>
        <a href="mailto:pedro.vvs@outlook.com">pedro.vvs@outlook.com</a>
      </S.Column>
      <S.Column>
        <h2>Follow us</h2>
        <S.Socials aria-labelledby="social-media">
          <S.EachSocial>
            <a href="https://www.github.com/ordep2v">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </S.EachSocial>
          <S.EachSocial>
            <a href="https://www.linkedin.com/in/pedro-cunha-73b3041b0/">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </S.EachSocial>
        </S.Socials>
      </S.Column>
    </S.Content>
    <S.Copyright>Developed by V1VXZ</S.Copyright>
  </S.Wrapper>
)

export default Footer
