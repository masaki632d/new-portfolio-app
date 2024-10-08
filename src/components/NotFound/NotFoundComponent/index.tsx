import Image from 'next/image'

import { Main } from '@components/shared/Main'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'
import duckImage from 'public/shared/searching-duck.gif'

type props = {
  title: string
  description: string
}

export const NotFoundComponent = ({ title, description }: props) => {
  return (
    <Main dataLayout="NotFoundComponent">
      <section className="mb-8 space-y-6">
        <Slide className="space-y-2">
          <SectionTitle type="h1">{title}</SectionTitle>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </Slide>

        <Slide className="flex justify-center" delay={0.1}>
          <Image width={90} height={90} src={duckImage} alt="duck searching" />
        </Slide>
      </section>
    </Main>
  )
}
