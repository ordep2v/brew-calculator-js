import Heading from 'components/Heading'
import Main from 'components/Main'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
export default function Home() {
  return (
    <>
    <section>
      <Container>
        <Heading />
      </Container>
      <Container>
        <Main />
      </Container>
      <Container>
        <Footer/>
      </Container>
      </section>
    </>
  )
}
