import { Contact } from '@components/Home/Contact'
import { Experience } from '@components/Home/Experience'
import { Hero } from '@components/Home/Hero'
import { Main } from '@components/shared/Main'

export default function Home() {
  return (
    <Main dataLayout="HomePage">
      <Hero />
      <Experience />
      <Contact />
    </Main>
  )
}
