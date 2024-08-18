import { Metadata } from 'next'

import { ProjectCard } from '@components/Projects/ProjectCard'
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

        <Slide delay={0.1} className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Slide>
      </section>
    </Main>
  )
}
