import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function About() {
  return (
    // min-h-screen으로 전체 높이 보장, grid로 3개 영역 분할
    <div className="flex min-h-screen flex-col">
      {/* Header 영역 */}
      <Header />
      {/* Main 영역 */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* 섹션 제목 */}
            <h2 className="text-3xl font-bold tracking-tight">소개</h2>
          </div>
        </div>
      </main>

      {/* Footer 영역 */}
      <Footer />
    </div>
  )
}
