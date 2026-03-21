"use client";

import Header from "@/components/header";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Quote, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const words = `まだ見ぬ自分に、会いに行こう。その一歩が未来を変える地図になる。`;

export default function AboutUnivPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* メインヒーロー：TextGenerateEffectを使用 */}
      <section className="bg-blue-900 text-white py-24 border-b border-blue-800">
        <div className="max-w-5xl mx-auto px-6">
          <Badge className="mb-6 bg-blue-500/30 text-blue-100 border-blue-400">University Concept</Badge>
          <div className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter mb-8 min-h-[100px]">
            <TextGenerateEffect duration={2} words={words} />
          </div>
          <p className="text-xl md:text-2xl font-light text-white text-blue-200 decoration-blue-500 decoration-2 underline-offset-8">
            昨日までの君を、超える場所がここにある。
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 左側：学長メッセージ本文 */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Quote size={32} fill="currentColor" className="opacity-20" />
              <h2 className="text-2xl font-bold">学長挨拶</h2>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              <p className="font-semibold text-xl text-slate-900">
                ご入学おめでとうございます。今日から、皆さんの「探究」という名の新しい旅が始まります。
              </p>
              <p>
                理系の学びとは、単に教科書の知識を蓄えることではありません。目の前の現象に対して「なぜ？」と問い続け、仮説を立て、自らの手で真実を導き出すプロセスそのものです。
              </p>
              <p>
                時には複雑な数式や、終わりの見えない実験に壁を感じることもあるでしょう。しかし、その苦悩の先にある「発見」の喜びこそが、世界を一歩前へと進める原動力になります。
              </p>
              <p>
                このキャンパスには、最新の設備と、同じ志を持つ最高の仲間が揃っています。失敗を恐れず、自由に想像し、論理の翼を広げてください。あなたの好奇心が、いつか未来の「標準」を創り出す。その無限の可能性を、私たちは全力で応援します。
              </p>
            </div>

            <div className="pt-10 border-t border-slate-200">
              <p className="text-sm text-slate-500">滝筑大学 学長</p>
              <p className="text-2xl font-bold text-slate-900 mt-1 font-serif">滝筑 太郎</p>
            </div>
          </div>

          {/* 右側：サイドコンテンツ/リンク */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="p-6 space-y-6">
                <h3 className="font-bold text-lg border-b pb-2">クイックメニュー</h3>
                
                <div className="space-y-4">
                  <Link href="/living/ug" className="group block">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-slate-700 group-hover:text-blue-900">授業・履修</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                    </div>
                  </Link>

                  <Link href="/living/scholarship" className="group block">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-slate-700 group-hover:text-emerald-900">授業料・奨学金</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                    </div>
                  </Link>
                </div>

                <div className="bg-slate-50 p-4 rounded-md mt-4">
                  <p className="text-xs text-slate-500 leading-snug">
                    ※ 履修登録や奨学金の詳細な申請スケジュールは各案内ページをご確認ください。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* イメージ画像スペース */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
              <Image 
                src="/campus-view.png" 
                alt="Campus View" 
                fill 
                className="object-cover transition-transform hover:scale-110 duration-700"
              />
            </div>
          </div>
        </div>
      </main>

      {/* アクションエリア */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 text-slate-800">必要な情報を確認する</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-blue-200 py-10 text-center text-sm">
         © 2026 Takichiku University. All rights reserved.
      </footer>
    </div>
  );
}

// --- ボタンコンポーネント ---

export function Button1() {
  return (
    <Link href="/living/ug" className="w-full sm:w-auto">
      <Button 
        variant="default" 
        size="lg" 
        className="w-full sm:w-auto h-16 px-8 text-xl bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200/50 transition-all"
      >
        <BookOpen className="mr-2 h-6 w-6" />
        授業・履修について
      </Button>
    </Link>
  );
}

export function Button2() {
  return (
    <Link href="/living/scholarship" className="w-full sm:w-auto">
      <Button 
        variant="destructive" 
        size="lg" 
        className="w-full sm:w-auto h-16 px-8 text-xl shadow-lg hover:shadow-red-200/50 transition-all"
      >
        <GraduationCap className="mr-2 h-6 w-6" />
        授業料・奨学金について
      </Button>
    </Link>
  );
}
export function Academics(){
  return(
    <>
    
    </>
  )
}