import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Breadcrumbs, DocCardLink } from '../components'

interface DocsPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params

  // 1. /docs -> 메인 문서 페이지
  // 2. /docs/intro -> 단일 경로
  // 3. /docs/guide/basic -> 다중 경로

  if (!slug) {
    return (
      <>
        <h1 className="text-4xl font-bold">문서 메인 페이지</h1>
        <Separator />
        <div className="grid gap-4">
          <DocCardLink
            href="/docs/intro"
            title="시작하기"
            description="Next.js의 기본 개념과 프로젝트 설정 방법을 알아봅니다."
          />
          <DocCardLink
            href="/docs/guide/basic"
            title="고급 가이드"
            description="심화 개념과 실전 활용 방법을 다룹니다."
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="space-y-4">
        <Breadcrumbs slug={slug} />
        <h1 className="text-4xl font-bold">{slug[slug.length - 1]}</h1>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>현재 경로 정보</CardTitle>
          <CardDescription>
            <code className="bg-muted rounded-md px-2 py-1">
              params.slug: {JSON.stringify(slug)}
            </code>
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}
