import { Contact } from '@components/Home/Contact'
import { Experience } from '@components/Home/Experience'
import { Hero } from '@components/Home/Hero'

export default function Home() {
  return (
    <main
      data-layout="HomePage"
      className="mx-auto mt-20 space-y-32 px-5 md:max-w-5xl"
    >
      <Hero />
      <Experience />
      <Contact />
    </main>
  )
}
