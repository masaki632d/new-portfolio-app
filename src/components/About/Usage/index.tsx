import { LinkButton } from '@components/shared/LinkButton'
import { SectionTitle } from '@components/shared/SectionTitle'

import { data } from './constants/data'

export const Usage = () => {
  return (
    <section data-layout="Usage">
      <div className="space-y-6">
        <SectionTitle type="h2">Skills</SectionTitle>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          プロジェクトにおいて、以下のスキルを活用しています。
        </p>
      </div>

      <div className="space-y-16">
        <ul className="mt-8 flex flex-wrap items-center gap-3">
          {data.map(({ text }) => {
            return (
              <li
                key={text}
                className="rounded-md border border-transparent bg-zinc-300 px-2 py-1 hover:border-zinc-700 dark:bg-zinc-400"
              >
                {text}
              </li>
            )
          })}
        </ul>

        <LinkButton href="projects">制作実績の一覧</LinkButton>
      </div>
    </section>
  )
}
