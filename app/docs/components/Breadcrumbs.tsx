'use client'

import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  slug: string[]
}

export function Breadcrumbs({ slug }: BreadcrumbsProps) {
  return (
    <div className="text-muted-foreground flex items-center gap-2">
      <span>문서</span>
      {slug.map((segment, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          <span className={index === slug.length - 1 ? 'text-foreground font-medium' : ''}>
            {segment}
          </span>
        </div>
      ))}
    </div>
  )
}
