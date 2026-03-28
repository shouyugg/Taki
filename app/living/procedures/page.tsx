"use client";

import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  FileText,
  AlertCircle,
  Download,
  MapPin,
  CalendarClock,
  UserCog,
  ArrowRight,
} from "lucide-react";

export default function ProceduresPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ヒーローセクション */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="sm:px-4 md:px-6">
          <div className="flex items-center gap-3 mb-2 text-blue-400">
            <UserCog className="w-6 h-6" />
            <span className="font-bold tracking-wider text-sm">事務手続きガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">学籍異動・住所変更・証明書</h1>
          <p className="text-slate-300 max-w-2xl">
            休学・復学などの学籍に関する手続きや、住所変更の届け出、各種証明書の発行についてご案内します。
            手続きには期限がありますので十分にご注意ください。
          </p>
        </div>
      </section>

      <main className="sm:px-4 md:px-6 py-12">
        {/* 重要なお知らせ（アラート） */}
        <Alert variant="destructive" className="mb-10 bg-red-50 border-red-200 text-red-900">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="font-bold mb-1">【重要】令和8年度春学期の休学願提出期限について</AlertTitle>
          <AlertDescription className="text-sm">
            春学期からの休学を希望する場合、<strong>2026年2月28日（金）17:00</strong> までに教務課へ書類を提出してください。
            期限を過ぎた場合、学費の減免が適用されない場合があります。
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="status" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px] bg-slate-200 p-1">
            <TabsTrigger value="status">休学・復学・退学</TabsTrigger>
            <TabsTrigger value="address">住所・氏名変更</TabsTrigger>
            <TabsTrigger value="cert">証明書発行</TabsTrigger>
          </TabsList>

          {/* --- TAB 1: 学籍異動 (休学・復学など) --- */}
          <TabsContent value="status" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 休学について */}
              <Card className="border-t-4 border-t-blue-600 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-800">休学</span>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-normal">Leave of Absence</span>
                  </CardTitle>
                  <CardDescription>
                    病気、留学、経済的理由などで2ヶ月以上就学できない場合
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="bg-slate-50 p-4 rounded border border-slate-100">
                    <p className="font-bold mb-2">手続きの流れ</p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-700">
                      <li>指導教員（クラス担任）との面談</li>
                      <li>「休学願」の記入・捺印</li>
                      <li>教務課窓口へ提出</li>
                    </ol>
                  </div>
                  <div className="text-slate-600">
                    <p className="font-bold text-slate-800">※ 休学期間中の学費について</p>
                    休学期間中は授業料が免除され、代わりに在籍料（半期 60,000円）の納入が必要です。
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" /> 休学願をダウンロード (PDF)
                  </Button>
                </CardFooter>
              </Card>

              {/* 復学について */}
              <Card className="border-t-4 border-t-emerald-600 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-800">復学</span>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-normal">Reinstatement</span>
                  </CardTitle>
                  <CardDescription>
                    休学期間が終了し、大学へ戻る場合の手続き
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p>
                    休学期間満了の1ヶ月前に大学から案内を送付します。復学の手続きを行わない場合、自動的に「除籍」となる場合がありますのでご注意ください。
                  </p>
                  <div className="bg-emerald-50 p-3 rounded text-emerald-800 text-xs font-bold border border-emerald-100">
                    <CalendarClock className="inline w-4 h-4 mr-1" />
                    春学期復学期限：2月28日 / 秋学期復学期限：8月31日
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" /> 復学願をダウンロード (PDF)
                  </Button>
                </CardFooter>
              </Card>

              {/* 退学について */}
              <Card className="md:col-span-2 bg-slate-50 border-dashed border-slate-300">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-600">退学（中途退学）について</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-slate-500">
                    退学を希望する場合は、必ず指導教員および保証人と相談の上、教務課窓口までお越しください。ウェブ上での手続きはできません。
                  </p>
                  <Button variant="secondary" size="sm">
                    退学手続きの詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* --- TAB 2: 住所・氏名変更 --- */}
          <TabsContent value="address">
            <Card>
              <CardHeader>
                <CardTitle>住所・連絡先の変更</CardTitle>
                <CardDescription>
                  引っ越し等で住所が変わった場合、速やかに変更の手続きを行ってください。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 border p-4 rounded-lg bg-blue-50 border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-blue-100 rounded text-blue-600">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-blue-900">学生本人の住所変更</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      学生ポータルサイト（Takitsuku Portal）からオンラインで即時変更可能です。窓口へ来る必要はありません。
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      ポータルサイトへログイン
                    </Button>
                  </div>

                  <div className="flex-1 border p-4 rounded-lg bg-white border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-slate-100 rounded text-slate-600">
                        <UserCog className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900">保証人の住所変更・改姓</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      保証人の変更や、婚姻等による改姓（氏名の変更）には、公的書類（住民票・戸籍抄本）の原本提出が必要です。
                    </p>
                    <Button variant="outline" className="w-full">
                      必要書類・提出先を確認
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- TAB 3: 証明書発行 --- */}
          <TabsContent value="cert">
            <Card>
              <CardHeader>
                <CardTitle>各種証明書の発行について</CardTitle>
                <CardDescription>
                  在学証明書、成績証明書、卒業見込証明書などの発行方法です。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg hover:bg-slate-50 transition">
                      <h4 className="font-bold text-lg mb-1">① 自動発行機</h4>
                      <p className="text-sm text-slate-500 mb-2">キャンパス内（1号館1F・図書館）</p>
                      <ul className="text-sm list-disc list-inside text-slate-700 space-y-1">
                        <li>在学証明書</li>
                        <li>成績証明書</li>
                        <li>卒業見込証明書</li>
                        <li>健康診断証明書</li>
                      </ul>
                      <p className="text-xs text-blue-600 mt-2 font-bold">手数料：1通 200円 / 即時発行</p>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-slate-50 transition">
                      <h4 className="font-bold text-lg mb-1">② 窓口申請 / 郵送</h4>
                      <p className="text-sm text-slate-500 mb-2">教務課窓口 または 郵送申し込み</p>
                      <ul className="text-sm list-disc list-inside text-slate-700 space-y-1">
                        <li>推薦書</li>
                        <li>英文証明書</li>
                        <li>調査書</li>
                        <li>その他 特殊な証明書</li>
                      </ul>
                      <p className="text-xs text-blue-600 mt-2 font-bold">発行日数：3日〜1週間程度</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 問い合わせセクション */}
        <section className="mt-16 bg-white border border-slate-200 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">手続きに関するお問い合わせ</h2>
          <p className="text-slate-500 text-sm mb-6">
            不明な点がある場合は、自己判断せずにお早めに窓口へご相談ください。
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-xs font-bold text-slate-400 mb-1">休学・復学・証明書</p>
              <p className="font-bold">教務課</p>
              <p className="text-sm">03-7106-2421</p>
            </div>
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-xs font-bold text-slate-400 mb-1">奨学金・学生生活</p>
              <p className="font-bold">学生支援課</p>
              <p className="text-sm">03-7106-3924</p>
            </div>
            <div className="bg-slate-50 p-4 rounded">
              <p className="text-xs font-bold text-slate-400 mb-1">学費納入</p>
              <p className="font-bold">経理課</p>
              <p className="text-sm">03-7106-4025</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}