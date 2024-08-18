export type SectionTitle = (typeof SECTION_TITLES)[keyof typeof SECTION_TITLES]

export type ProjectDataProps = {
  id: number
  title: string
  slug: string
  image: string
  projectUrl: string
  overviewText: string[]
  technologyText: string[]
  mainProblemText: string[]
  projectText: string[]
  keyExperienceText: string[]
}
