import { FocusCardsDemo } from "@/components/FocusCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* ヒーローセクション / ヘッダー */}
            <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-bold">重要なお知らせ</h3>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">一覧を見る →</a>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { date: "2026.01.31", title: "令和8年度 一般選抜入試の合格発表について", tag: "入試" },
            { date: "2026.01.25", title: "次世代AI研究センターの設立と記念講演のお知らせ", tag: "研究" },
            { date: "2026.01.18", title: "春季オープンキャンパスの事前予約を開始しました", tag: "イベント" },
          ].map((news, i) => (
            <div key={i} className="group cursor-pointer">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-slate-200 text-slate-700 rounded mb-2">
                {news.tag}
              </span>
              <p className="text-sm text-slate-500 mb-1">{news.date}</p>
              <p className="font-bold group-hover:text-blue-600 transition-colors leading-snug">
                {news.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* メインビジュアル・カードセクション */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl mb-4">
              未来を切り拓く、学びの場。
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              最先端の研究設備と、多様性に富んだコミュニティ。あなたの可能性を最大限に引き出す環境がここにあります。
            </p>
          </div>

          {/* FocusCardsセクション */}
          <div className="z-0 rounded-xl overflow-hidden ">
            <FocusCardsDemo />
          </div>
        </div>
      </section>

      {/* ニュース・トピックス */}


      {/* フッター */}

    </main>
  );
}