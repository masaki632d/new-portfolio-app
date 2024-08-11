import parse from 'html-react-parser'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BiEnvelope } from 'react-icons/bi'

import { SocialLink } from '@components/About/SocialLink'
import { Usage } from '@components/About/Usage'
import { Main } from '@components/shared/Main'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'
import profile from '@public/shared/profile.png'

import { data } from './constants/data'

export const metadata: Metadata = {
  title: 'About | Masahiro Koumura',
  description: '私の経歴とスキルについて',
}

export default async function About() {
  return (
    <Main dataLayout="AboutPage">
      <section className="mb-8 grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-custom">
        <div className="space-y-8">
          <Slide className="order-2 space-y-6 lg:order-none">
            <SectionTitle type="h1">About</SectionTitle>
          </Slide>

          <Slide delay={0.1} className="space-y-8">
            <div className="space-y-4">
              {data.text.map((text) => (
                <p key={text} className="leading-relaxed">
                  {parse(text)}
                </p>
              ))}
            </div>

            <SocialLink type="social" />
          </Slide>
        </div>

        <Slide
          delay={0.14}
          className="order-none mx-auto mb-12 w-full gap-y-8 space-y-4 lg:order-1"
        >
          <Image
            className="mx-auto size-40 rounded-2xl bg-top object-cover md:size-96"
            src={profile}
            width={400}
            height={400}
            alt=""
            priority
          />
          <div className="flex items-center justify-center space-x-2">
            <BiEnvelope className="text-lg" />
            <Link
              href="mailto:masaki632d@gmail.com"
              className="duration-300 hover:text-primary-color"
            >
              masaki632d@gmail.com
            </Link>
          </div>
        </Slide>
      </section>

      <Slide delay={0.14}>
        <Usage />
      </Slide>
    </Main>
  )
}
