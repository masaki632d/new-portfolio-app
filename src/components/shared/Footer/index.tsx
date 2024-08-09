export const Footer = () => {
  return (
    <footer
      data-layout="Footer"
      className="mt-20 border-t border-zinc-100 dark:border-zinc-800"
    >
      <div className="px-6 py-8 text-center md:px-16">
        <small className="text-zinc-500">
          &copy; {new Date().getFullYear()} Masahiro Koumura.
        </small>
      </div>
    </footer>
  )
}
