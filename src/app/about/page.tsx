import { Metadata } from 'next'
import Image from 'next/image'
import { BiEnvelope } from 'react-icons/bi'

import { Usage } from '@components/features/about/Usage'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/Slide'
import profile from '@public/shared/profile.png'

export const metadata: Metadata = {
  title: 'About | Masahiro Koumura',
  description: '私の経歴とスキルについて',
}

export default async function About() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      <section className="relative mb-8 grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-custom">
        <Slide className="order-2 space-y-6 lg:order-none">
          <SectionTitle type="h1">About</SectionTitle>

          <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <strong> 医療系求⼈サイト運営会社 </strong>/
              <strong> ⼤⼿鉄道専任の制作会社 </strong>/
              <strong> Webメディア運営会社 </strong>の3社をこれまで経験。
            </p>
            <p>
              現在は、<strong> 金融系の⾃社Webメディア運営会社 </strong> である
              エイチームライフザイン社 に、 <strong> Webデザイナー </strong>
              として在籍。（デザインエンジニア / Front-Endデザイナー）
            </p>
            <p>
              現職では、 Designer組織 の中で、
              <strong>
                新規コンテンツのフロントエンド開発・UI/UX・A11Y・CVR改善・リプレイス・デザインシステム運用・サイト保守/運用など{' '}
              </strong>
              を担当し、<strong> 事業課題の解決 </strong>に貢献しています。
            </p>
            <p>
              HTML / CSS / JavaScript を⽤いたWeb開発を得意としています。
              <br />
              滋賀在住で、趣味は釣りと⾳楽です。
            </p>
          </div>
        </Slide>

        <Slide
          delay={0.1}
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
          <div className="">
            <a
              href="mailto:masaki632d@gmail.com"
              className="flex items-center justify-center gap-x-2 hover:text-primary-color"
            >
              <BiEnvelope className="text-lg" />
              masaki632d@gmail.com
            </a>
          </div>
        </Slide>
      </section>

      <Slide delay={0.14}>
        <Usage />
      </Slide>
    </main>
  )
}
