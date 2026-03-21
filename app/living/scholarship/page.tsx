import Header from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Landmark, Users, CalendarDays } from "lucide-react";

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ヒーローセクション */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-500">学費サポート</Badge>
          <h1 className="text-4xl font-bold mb-4">奨学金制度・経済支援</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            滝筑大学では、学業優秀な学生への奨励や、経済的な理由で修学が困難な学生を支援するため、多様な奨学金制度を整えています。
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* クイックアクセスカード */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <CardTitle>給付型（返済不要）</CardTitle>
                <CardDescription>学業成績や課外活動を評価</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader className="flex flex-row items-center gap-4">
              <Landmark className="w-8 h-8 text-emerald-600" />
              <div>
                <CardTitle>貸与型（要返済）</CardTitle>
                <CardDescription>無利子または低利子での融資</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* メインコンテンツ（タブ切り替え） */}
        <Tabs defaultValue="internal" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="internal">学内奨学金</TabsTrigger>
            <TabsTrigger value="external">公的・民間奨学金</TabsTrigger>
          </TabsList>

          <TabsContent value="internal" className="space-y-6">
            <div className="prose prose-slate max-w-none mb-8">
              <h2 className="text-2xl font-bold">大学独自の支援制度</h2>
              <p>滝筑大学が独自に運営している、返済の必要がない給付型奨学金です。</p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "滝筑大学 特別特待生奨学金",
                  amount: "授業料全額免除",
                  target: "入試成績上位者",
                  desc: "入学試験において特に優秀な成績を収めた学生を対象に、4年間の学費をサポートします。"
                },
                {
                  title: "学業奨励奨学金",
                  amount: "年額 300,000円",
                  target: "学部2年次以上",
                  desc: "前年度の学業成績が極めて優秀な学生を対象に給付されます。"
                },
                {
                  title: "緊急修学支援金",
                  amount: "最大 500,000円",
                  target: "家計急変者",
                  desc: "主たる家計支持者の失職や災害等により修学が困難になった場合に随時受け付けます。"
                }
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">対象：{item.target}</Badge>
                      </div>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <span className="text-xl font-bold text-orange-600">{item.amount}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="external">
            <Card>
              <CardHeader>
                <CardTitle>日本学生支援機構（JASSO）など</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">国の奨学金制度や、民間団体・地方自治体の奨学金については以下をご確認ください。</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="jasso">
                    <AccordionTrigger>日本学生支援機構 奨学金</AccordionTrigger>
                    <AccordionContent>
                      給付型（修学支援新制度）および貸与型（第一種・第二種）があります。春と秋に定期採用が行われます。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="local">
                    <AccordionTrigger>地方自治体・民間団体奨学金</AccordionTrigger>
                    <AccordionContent>
                      出身地の自治体や、各企業・財団が実施する制度です。募集時期がそれぞれ異なるため、掲示板をこまめに確認してください。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 手続きの流れ */}
        <section className="mt-20 border-t pt-12">
          <div className="flex items-center gap-2 mb-8">
            <CalendarDays className="text-blue-600" />
            <h2 className="text-2xl font-bold">申請スケジュール</h2>
          </div>
          <div className="relative border-l-2 border-blue-200 ml-3 space-y-8">
            {[
              { month: "4月", event: "春季定期採用・学内奨学金募集開始", desc: "新入生・在学生向けのガイダンスを開催します。" },
              { month: "6月", event: "日本学生支援機構 振込開始", desc: "採用決定後、順次振込が開始されます。" },
              { month: "10月", event: "秋季二次採用募集", desc: "一部の制度で追加募集が行われます。" }
            ].map((step, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="text-sm font-bold text-blue-600">{step.month}</div>
                <div className="font-bold text-slate-800">{step.event}</div>
                <div className="text-sm text-slate-500 mt-1">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* フッター（既存のものがあれば差し替え） */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">ご不明な点は学生支援課までお問い合わせください。</p>
          <div className="inline-block border border-slate-700 p-4 rounded-lg">
            <p className="text-sm text-slate-400 font-mono">TEL: 03-7106-3924（奨学金担当）</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export function Academics(){
  return(
    <>
    
    </>
  )
}