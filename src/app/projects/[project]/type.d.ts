export type SectionTitle = (typeof SECTION_TITLES)[keyof typeof SECTION_TITLES]

export type ProjectDataProps = {
  id: number
  title: string
  slug: string
  image: string
  projectUrl: string
  overviewText: string[]
  technologyText: string[]
  problemText: string[]
  mainProjectText: string[]
  keyExperienceText: string[]
}
