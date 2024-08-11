import { LinkButton } from '@components/shared/LinkButton'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

export const Contact = () => {
  return (
    <section data-layout="Contact" className="space-y-16 text-center">
      <Slide>
        <SectionTitle type="h2">Contact</SectionTitle>
      </Slide>

      <Slide delay={0.16} className="space-y-16">
        <p className="leading-relaxed">
          現在、リモートワーク主体での仕事や新しい機会を探しています。
          <br />
          お気軽にご連絡ください。
        </p>
        <LinkButton href="mailto:masaki632d@gmail.com">お問い合わせ</LinkButton>
      </Slide>
    </section>
  )
}
