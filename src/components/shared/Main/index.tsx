import { ReactNode } from 'react'

type Props = {
  dataLayout: string
  children: ReactNode
}

export const Main = ({ dataLayout, children }: Props) => {
  return (
    <main
      data-layout={dataLayout}
      className="mx-auto mt-20 space-y-32 px-5 md:max-w-5xl lg:px-0"
    >
      {children}
    </main>
  )
}
