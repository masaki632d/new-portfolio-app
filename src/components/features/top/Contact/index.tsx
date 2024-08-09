import Link from 'next/link'

import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/Slide'

export const Contact = () => {
  return (
    <section data-layout="Contact" className="space-y-16 text-center">
      <Slide>
        <SectionTitle type="h2">Contact</SectionTitle>
      </Slide>

      <Slide delay={0.16} className="space-y-16">
        <p className="text-sm md:text-base">
          現在、リモートワーク主体での仕事や新しい機会を探しています。
          <br />
          お気軽にご連絡ください。
        </p>
        <Link
          className="mx-auto block w-fit rounded border-2 border-primary-color p-4 px-6 font-mono text-sm capitalize text-primary-color duration-300 hover:opacity-70"
          href="mailto:masaki632d@gmail.com"
        >
          send mail
        </Link>
      </Slide>
    </section>
  )
}
