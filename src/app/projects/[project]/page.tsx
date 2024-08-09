import Image from 'next/image'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

import { Main } from '@components/shared/Main'
import { Slide } from '@components/shared/Slide'
import profile from '@public/shared/profile.png'

import { data } from './constants/data'

export default function Project() {
  // const [name, projectUrl] = data;

  return (
    <Main dataLayout="ProjectDetail">
      <Slide>
        {data.map((data) => {
          const { id, name, projectUrl } = data
          return (
            <div key={id} className="mx-auto max-w-3xl">
              <div className="mb-4 flex flex-wrap items-start justify-between">
                <h1 className="mb-4 max-w-md font-incognito text-3xl font-black tracking-tight sm:text-5xl">
                  {name}
                </h1>
                <div className="flex items-center gap-x-2">
                  <Link
                    className="flex items-center gap-x-2 rounded-md border border-transparent bg-secondary-bg px-4 py-2 text-zinc-700 duration-200 dark:bg-primary-bg dark:text-white"
                    href={projectUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <BiLinkExternal aria-hidden="true" />
                    {projectUrl ? 'Live URL' : 'Coming Soon'}
                  </Link>
                </div>
              </div>

              <div className="relative h-40 w-full pt-[52.5%]">
                <Image
                  className="rounded-xl border border-zinc-100 object-cover dark:border-zinc-800"
                  fill
                  src={profile}
                  alt=""
                  quality={100}
                />
              </div>
            </div>
          )
        })}
      </Slide>
    </Main>
  )
}
