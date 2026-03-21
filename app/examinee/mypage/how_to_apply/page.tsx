"use client"

import Link from "next/link"

export default function Home() {
  return (
  <>
  <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">出願方法について</h1>
        </div>
      </section>
      <br/><br/>
  <div className="px-80">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-slate-100 mb-6 border-l-10 border-indigo-800 p-4">
  その1 | 出願情報の入力
</h1>
<h3 className="m-6 text-2xl">
  <Link href="/examinee/mypage/application" className="font-medium">出願システム</Link>
  に情報を入力してください
</h3>

<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-slate-100 mb-6 border-l-10 border-indigo-800 p-4">
  その2 | 受験票の印刷
</h1>
<h3 className="m-6 text-2xl">
  入力完了後、受験票が記載されたpdfファイルが出力されますので、それを印刷してください。家庭にプリンターがない場合は、コンビニのプリンター等で印刷してください。
</h3>
  </div>
  </>
  )
}