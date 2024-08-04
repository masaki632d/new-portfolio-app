import Link from 'next/link'

import { ThemeSwitchButton } from '@components/ThemeSwitchButton'

import { data } from './constants/data'

export const Navbar = () => {
  return (
    <header
      data-layout="Navbar"
      className="mb-10 border-b border-zinc-200 p-6 text-sm md:mb-28 md:px-16 dark:border-zinc-800"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-2xl text-primary-color duration-300 hover:opacity-70">
          <Link href="/" className="block">
            portfolio
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {data.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-base text-zinc-600 duration-300 hover:text-zinc-900 dark:text-white dark:hover:text-primary-color"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4 duration-300 hover:opacity-70">
          <ThemeSwitchButton />
        </div>
      </div>
    </header>
  )
}
