import { Metadata } from 'next'

import { NotFoundComponent } from '@components/NotFound/NotFoundComponent'

export const metadata: Metadata = {
  title: 'Error 404',
}

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404"
      description="このページは存在しません。"
    />
  )
}
