import { HeroSvg } from '@app/assets/icons/HeroSvg'
import { Social } from '@components/features/top/Hero/Social'
import { Slide } from '@components/Slide'

import { data } from './constants/data'

export const Hero = () => {
  return (
    <section data-layout="Hero" className="space-x-8 md:flex">
      {data.map((data) => (
        <div key={data.id} className="space-y-7">
          <Slide className="space-y-6">
            <p className="text-sm md:text-base">
              Web Designer / Frontend Developer / Web Director
            </p>
            <h1 className="min-w-full text-4xl leading-tight tracking-tight sm:text-6xl">
              {data.title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {data.shortText.map((text, index) => (
                <span key={index} className="block">
                  {text}
                </span>
              ))}
            </p>
          </Slide>

          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
      ))}

      <Slide delay={0.14} className="">
        <HeroSvg />
      </Slide>
    </section>
  )
}
