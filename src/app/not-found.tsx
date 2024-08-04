import { Metadata } from 'next'

import { NotFoundComponent } from '@components/NotFoundComponent'

export const metadata: Metadata = {
  title: 'Error 404',
}

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404"
      description="申し訳ありません！このページは存在しません。"
    />
  )
}
