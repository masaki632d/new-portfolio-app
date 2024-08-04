export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ja-JP', {
    month: 'short',
    year: 'numeric',
  })
}
