import { ReactNode } from 'react'

type Props = {
  id?: string
  type: 'h1' | 'h2' | 'h3'
  dataLayout?: string
  children: ReactNode
}

const classes = ({ type }: Pick<Props, 'type'>) => {
  switch (type) {
    case 'h1':
      return `
        text-4xl leading-tight tracking-tight
        lg:text-5xl
      `
    case 'h2':
      return `
        font-incognito text-3xl font-bold tracking-tight
        lg:text-4xl
      `
    case 'h3':
      return `
        text-xl font-bold
      `
  }
}

export const SectionTitle = ({
  id,
  type: Tag,
  dataLayout = `SectionTitle${Tag.toLocaleUpperCase()}`,
  children,
}: Props) => {
  const className = classes({ type: Tag })

  return (
    <Tag id={id} data-layout={dataLayout} className={className}>
      {children}
    </Tag>
  )
}
