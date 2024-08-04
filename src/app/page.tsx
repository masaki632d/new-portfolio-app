import { Experience } from '@components/features/top/Experience'
import { Hero } from '@components/features/top/Hero'

export default function Home() {
  return (
    <main className="mx-auto mt-20 px-6 md:max-w-5xl md:px-0">
      <Hero />
      <Experience />
    </main>
  )
}
