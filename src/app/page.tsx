import { Contact } from '@components/features/top/Contact'
import { Experience } from '@components/features/top/Experience'
import { Hero } from '@components/features/top/Hero'

export default function Home() {
  return (
    <main
      data-layout="Home"
      className="mx-auto mt-20 space-y-32 px-5 md:max-w-5xl"
    >
      <Hero />
      <Experience />
      <Contact />
    </main>
  )
}
