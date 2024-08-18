import { LinkButton } from '@components/shared/LinkButton'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Slide } from '@components/shared/Slide'

import { data } from './constants/data'
import { ExperienceItem } from './ExperienceItem'

export const Experience = () => (
  <section data-layout="Experience" id="experience" className="space-y-16">
    <Slide>
      <SectionTitle type="h2">Experience</SectionTitle>
    </Slide>

    <Slide delay={0.1} className="space-y-16">
      <div className="space-y-12">
        {data.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>

      <LinkButton href="projects">制作実績の一覧</LinkButton>
    </Slide>
  </section>
)
