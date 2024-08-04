export const Footer = () => {
  return (
    <footer className="mt-44 border-t border-zinc-100 dark:border-zinc-800">
      <div className="px-6 py-16 text-center md:px-16">
        <small className="text-zinc-500">
          &copy; {new Date().getFullYear()} Masahiro Koumura.
        </small>
      </div>
    </footer>
  )
}
