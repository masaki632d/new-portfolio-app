'use client'

import { useState } from 'react'

import Link from 'next/link'
import { HiOutlineX } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'

import { data } from './constants/data'

export const MobileMenu = () => {
  const [navShow, setNavShow] = useState(false)
  const toggleNav = () => setNavShow((prev) => !prev)

  return (
    <div
      data-layout="MobileMenu"
      className={`block md:hidden ${navShow ? 'overflow-hidden' : ''}`}
    >
      <button
        className="rounded-md border border-zinc-200 bg-secondary-bg p-2 dark:border-zinc-800 dark:bg-primary-bg"
        onClick={toggleNav}
        aria-label="Toggle Menu"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>

      <div
        className={`fixed left-0 top-0 size-full space-y-6 bg-white pt-6 duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 ${
          navShow ? 'translate-x-0 rounded-none' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-8">
          <button
            className="font-signature text-2xl capitalize text-primary-color"
            onClick={toggleNav}
            aria-label="ページトップに戻る"
          >
            portfolio
          </button>

          <button
            className={`rounded-full border border-zinc-200 bg-secondary-bg p-2 duration-500 dark:border-zinc-800 dark:bg-primary-bg ${
              !navShow ? 'rotate-[-360deg]' : null
            }`}
            onClick={toggleNav}
            aria-label="メニューを閉じる"
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>

        <nav className="flex flex-col">
          {data.map((link) => {
            const { title, href } = link
            return (
              <Link
                key={title}
                href={href}
                className="dark:shadow-line-dark shadow-line-light flex items-center gap-x-2 p-6 font-incognito text-lg font-bold"
                onClick={toggleNav}
              >
                <link.icon className="text-zinc-500" aria-hidden={!navShow} />
                {title}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
