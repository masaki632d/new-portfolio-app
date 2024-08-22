import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

import { SectionTitle } from '@components/shared/SectionTitle'

import { formatDate } from '../functions/date'
import { ExperienceItemProps } from '../type'

export const ExperienceItem = ({
  url,
  logo,
  name,
  jobTitle,
  startDate,
  endDate,
  description,
}: ExperienceItemProps) => (
  <div
    data-layout="ExperienceItem"
    className="grid grid-cols-1 gap-y-6 lg:grid-cols-2"
  >
    <div className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-20 before:h-[calc(100%-70px)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
      <Link
        href={url}
        className="relative grid min-h-20 min-w-20 place-items-center text-clip rounded-md border border-zinc-200 bg-secondary-bg p-2 duration-300 hover:opacity-70 dark:border-zinc-800 dark:bg-primary-bg"
      >
        <Image src={logo} alt={`${name}`} fill sizes="78px" />
      </Link>
      <div className="flex flex-col items-start">
        <SectionTitle type="h3">{name}</SectionTitle>
        <p>{jobTitle}</p>
        <time className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
          {formatDate(startDate)} -{' '}
          {endDate ? (
            formatDate(endDate)
          ) : (
            <span className="text-tertiary-color dark:text-primary-color">
              在籍中
            </span>
          )}
        </time>
      </div>
    </div>

    <ul className="space-y-2">
      {description.map((desc, index) => (
        <li
          key={index}
          className="flex text-sm tracking-tight before:mr-3 before:block before:content-['▹']"
        >
          <p className="[&_span]:text-tertiary-color dark:[&_span]:text-primary-color">
            {parse(desc)}
          </p>
        </li>
      ))}
    </ul>
  </div>
)
