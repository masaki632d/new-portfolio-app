import Image from 'next/image'
import Link from 'next/link'

import { ProjectCardProps } from './type'

export const ProjectCard = ({
  id,
  slug,
  title,
  image,
  text,
  name,
}: ProjectCardProps) => {
  return (
    <Link
      key={id}
      className="group flex flex-col space-x-0 space-y-6 rounded-lg border border-zinc-200 bg-secondary-bg p-6 sm:flex-row lg:items-center lg:space-x-6 lg:space-y-0 dark:border-zinc-800 dark:bg-primary-bg"
      href={`/projects/${slug}`}
    >
      <div className="mx-auto shrink-0 sm:w-80">
        <Image
          className="rounded-md bg-zinc-100 object-cover duration-300 group-hover:scale-110 dark:bg-zinc-800"
          src={image}
          width={300}
          height={300}
          alt={`${title} image`}
        />
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-zinc-600 dark:text-zinc-400">{text}</p>
        <p className="flex text-sm tracking-tight before:mr-3 before:block before:content-['▹']">
          {name}
        </p>
      </div>
    </Link>
  )
}
