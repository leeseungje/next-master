import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'

interface DocCardLinkProps {
  href: string
  title: string
  description: string
}

export function DocCardLink({ href, title, description }: DocCardLinkProps) {
  return (
    <Link href={href}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
