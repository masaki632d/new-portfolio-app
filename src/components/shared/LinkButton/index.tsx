import Link from 'next/link'

type Props = {
  href: string
  left?: boolean
  children: React.ReactNode
}

export const LinkButton = ({ href, left, children }: Props) => {
  return (
    <Link
      data-layout="LinkButton"
      className={`mx-auto block w-fit rounded border border-primary-color px-6 py-4 font-mono text-sm text-primary-color duration-300 hover:opacity-70 ${left ? 'mx-auto sm:mx-0' : undefined}`}
      href={href}
    >
      {children}
    </Link>
  )
}
