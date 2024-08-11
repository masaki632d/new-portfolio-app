import parse from 'html-react-parser'

import { HeroSvg } from '@components/Home/Hero/HeroSvg'
import { LinkButton } from '@components/shared/LinkButton'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { data } from './constants/data'

export const Hero = () => {
  return (
    <section
      data-layout="Hero"
      className="space-y-8 md:flex md:items-center md:space-x-8"
    >
      <div className="space-y-10 md:w-2/3">
        <Slide className="space-y-6">
          <p className="text-sm md:text-base">
            Web Designer / Frontend Developer / Web Director
          </p>
          <SectionTitle type="h1">
            {data.title.map((title) => (
              <span key={title} className="block">
                {title}
              </span>
            ))}
          </SectionTitle>
          <p className="leading-relaxed">
            {data.text.map((text) => (
              <span key={text} className="block">
                {parse(text)}
              </span>
            ))}
          </p>
        </Slide>

        <Slide delay={0.1} className="block">
          <LinkButton href="#experience" left>
            これまでの経歴
          </LinkButton>
        </Slide>
      </div>

      <Slide delay={0.14} className="mx-auto w-2/3 sm:w-1/3 lg:w-1/3">
        <HeroSvg />
      </Slide>
    </section>
  )
}
