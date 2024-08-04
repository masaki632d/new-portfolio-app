import Link from 'next/link'

import { socialLinks } from './constants/social'

type Props = {
  type: string
}

export const Social = ({ type }: Props) => {
  return (
    <ul data-layout="Social" className="my-10 flex items-center space-x-5">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <Link
              className="flex items-center border-b border-zinc-200 dark:border-b-zinc-800"
              href={value.url}
              rel="noopener"
              target="_blank"
            >
              <value.icon className="size-5 text-zinc-500 duration-300 hover:text-zinc-800 hover:dark:text-white" />{' '}
              &nbsp;
              {value.name}
            </Link>
          </li>
        ))}
    </ul>
  )
}
