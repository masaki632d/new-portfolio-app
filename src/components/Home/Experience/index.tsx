import Image from 'next/image'
import Link from 'next/link'

import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { data } from './constants/data'
import { formatDate } from './functions/date'

export const Experience = () => {
  return (
    <section data-layout="Experience" id="Experience">
      <Slide delay={0.16} className="mb-16">
        <SectionTitle type="h2">Experience</SectionTitle>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
          {data.map((data) => (
            <>
              <div
                key={data._id}
                className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-20 before:h-[calc(100%-70px)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-800"
              >
                <Link
                  href={data.url}
                  className="relative grid min-h-20 min-w-20 place-items-center text-clip rounded-md border border-zinc-200 bg-secondary-bg p-2 dark:border-zinc-800 dark:bg-primary-bg"
                >
                  <Image
                    src={data.logo}
                    className="object-contain duration-300"
                    alt={`${data.name} logo`}
                    sizes="auto"
                    fill
                    // width={50}
                    // height={50}
                  />
                </Link>

                <div className="flex flex-col items-start">
                  <div className="mb-4">
                    <SectionTitle type="h3">{data.name}</SectionTitle>
                    <p>{data.jobTitle}</p>
                    <time className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                      {formatDate(data.startDate)} -{' '}
                      {data.endDate ? (
                        formatDate(data.endDate)
                      ) : (
                        <span className="text-tertiary-color dark:text-primary-color">
                          在籍中
                        </span>
                      )}
                    </time>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {data.description.map((description, index) => (
                  <li
                    key={index}
                    className="before:text-accent flex text-sm tracking-tight text-zinc-600 before:mr-3 before:block before:content-['▹'] dark:text-zinc-400"
                  >
                    {description}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </Slide>
    </section>
  )
}
