import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BiLinkExternal } from 'react-icons/bi'

import { Main } from '@components/shared/Main'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { projectsData } from './constants/data'

type ProjectData = {
  id: number
  title: string
  image: string
  slug: string
  text: string
  projectUrl: string
}

const getProjectDataBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find((project) => project.slug === slug)
}

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const { project } = params
  const projectData = getProjectDataBySlug(project)

  if (!projectData) {
    notFound()
  }

  const { id, title, text, projectUrl, image } = projectData

  return (
    <Main dataLayout="ProjectDetailPage">
      <Slide>
        <div key={id} className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-start justify-between">
            <SectionTitle type="h1">{title}</SectionTitle>

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
              src={image}
              alt=""
              priority
            />
          </div>

          <p className="mt-10">{text}</p>
        </div>
      </Slide>
    </Main>
  )
}

export default ProjectPage
