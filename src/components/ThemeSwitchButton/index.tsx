'use client'

import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'
import { LuSun, LuMoon } from 'react-icons/lu'

export const ThemeSwitchButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted)
    return (
      <span className="min-h-8 min-w-8 animate-pulse rounded-full border border-zinc-300 bg-zinc-200 p-2 dark:border-zinc-700 dark:bg-zinc-800"></span>
    )

  return (
    <button
      data-layout="ThemeSwitchButton"
      onClick={toggleTheme}
      className={`group: rounded-full border border-zinc-200 bg-zinc-100 p-2 text-zinc-500 transition-transform duration-300 dark:border-zinc-800 dark:bg-primary-bg dark:text-primary-color ${
        currentTheme === 'light' ? '-rotate-180' : 'rotate-0'
      }`}
      type="button"
      aria-label="Toggle Theme"
    >
      {currentTheme === 'light' ? <LuSun /> : <LuMoon />}
    </button>
  )
}
