import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BiLinkExternal } from 'react-icons/bi'

import { Main } from '@components/shared/Main'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { SECTION_TITLES, projectsData } from './constants/data'
import { ProjectDataProps } from './type'

const getProjectDataBySlug = (slug: string): ProjectDataProps | undefined => {
  return projectsData.find((project) => project.slug === slug)
}

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const projectData = getProjectDataBySlug(params.project)

  if (!projectData) {
    notFound()
  }

  const {
    title,
    projectUrl,
    image,
    overviewText,
    technologyText,
    problemText,
    mainProjectText,
    keyExperienceText,
  } = projectData

  const sections = [
    { title: SECTION_TITLES.OVERVIEW, content: overviewText },
    { title: SECTION_TITLES.TECHNOLOGY, content: technologyText },
    { title: SECTION_TITLES.PROBLEM, content: problemText },
    { title: SECTION_TITLES.MAIN_PROJECT, content: mainProjectText },
    { title: SECTION_TITLES.KEY_EXPERIENCE, content: keyExperienceText },
  ]

  return (
    <Main dataLayout="ProjectDetailPage">
      <section className="mx-auto max-w-3xl space-y-16">
        <Slide className="space-y-6">
          <div className="flex flex-wrap items-start justify-between">
            <SectionTitle type="h1">{title}</SectionTitle>
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
          <div className="relative h-40 w-full pt-[52.5%]">
            <Image
              className="rounded-xl border border-zinc-100 object-cover dark:border-zinc-800"
              fill
              src={image}
              alt=""
              priority
            />
          </div>
        </Slide>

        <Slide className="space-y-16">
          {sections.map(({ title, content }, index) => (
            <div key={index} className="space-y-6">
              <SectionTitle type="h2">{title}</SectionTitle>
              <ul className="space-y-4">
                {content.map((text, id) => (
                  <li
                    key={id}
                    className="flex text-sm tracking-tight before:mr-3 before:block before:content-['▹']"
                  >
                    <p className="leading-relaxed">{parse(text)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slide>
      </section>
    </Main>
  )
}

export default ProjectPage
