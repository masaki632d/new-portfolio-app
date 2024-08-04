import Image from 'next/image'

import duckImage from 'public/searching-duck.gif'

type props = {
  title: string
  description: string
}

export const NotFoundComponent = ({ title, description }: props) => {
  return (
    <main data-layout="NotFoundComponent" className="px-6 md:px-16">
      <header>
        <h1 className="mb-3 mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <div className="flex justify-center">
          <Image width={80} height={80} src={duckImage} alt="duck searching" />
        </div>
      </header>
    </main>
  )
}
