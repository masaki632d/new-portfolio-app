import { data } from './constants/data'

export const Usage = () => {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Skills</h2>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          以下のスキルを活用しています。
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap items-center gap-3">
        {data.map((data) => {
          const { text } = data
          return (
            <li
              key={text}
              className="rounded-md border border-transparent bg-zinc-300 px-2 py-1 hover:border-zinc-700 dark:bg-zinc-400"
            >
              {text}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
