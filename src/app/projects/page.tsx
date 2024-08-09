import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Main } from '@components/shared/Main'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { projects } from './constants/data'

export const metadata: Metadata = {
  title: 'Projects | Masahiro Koumura',
  description: '私が取り組んできたこれまでのプロジェクト',
}

export default async function Project() {
  return (
    <Main dataLayout="ProjectPage">
      <section className="space-y-8">
        <Slide>
          <SectionTitle type="h1">Projects</SectionTitle>
        </Slide>

        <Slide delay={0.1}>
          {projects.map((project) => {
            const { id, image, title, text } = project
            return (
              <div key={id} className="mb-6 flex flex-col">
                <Link
                  className="group flex flex-col items-start gap-8 rounded-lg border border-zinc-200 bg-secondary-bg p-6 lg:flex-row lg:items-center dark:border-zinc-800 dark:bg-primary-bg"
                  href="/projects/aaa"
                >
                  <div className="relative size-full text-clip lg:w-[300px]">
                    <Image
                      className="rounded-md bg-zinc-100 object-cover duration-300 group-hover:scale-110 dark:bg-zinc-800"
                      src={image}
                      width={300}
                      height={300}
                      sizes="100vw"
                      alt=""
                    />
                  </div>

                  <div className="max-w-lg">
                    {/* TODO: replace SectionTitle */}
                    <h2 className="mb-4 max-w-sm text-2xl font-semibold tracking-tight">
                      {title}
                    </h2>
                    <p className="text-[0.95rem] text-zinc-600 dark:text-zinc-400">
                      {text}
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </Slide>
      </section>
    </Main>
  )
}
