"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 import React from "react";
 import { Badge } from "@/components/ui/badge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
//import { IconAppWindow } from "@tabler/icons-react";
import Link from 'next/link';
const words = `キャンパスについて
`;
 
export default function TextGenerateEffectDemo() {
  return (
    <>
          <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-500">学生生活</Badge>
          <h1 className="text-4xl font-bold mb-4">キャンパスについて</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            滝筑大学では、ロシアの無人島から、日本の南までと、多様な位置にキャンパスが位置しています。
          </p>
        </div>
      </section>
  <div className="px-60">
  <TextGenerateEffect duration={5} filter={false} words={words} />
    <div>
      {/* ヒーローセクション */}

  <div className="py-10">
  <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={`rigakucampus.jpg`}
          alt="Aogashima"
          height="400"
          width="400"
          className="object-contain mx-auto rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          理学部
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          理学部には吉祥寺キャンパス、武蔵小杉キャンパス、青ヶ島キャンパスが存在します。（画像は青ヶ島キャンパス）<br></br>
          1,2年生の間は吉祥寺キャンパスで基礎科目を学び、3,4年で研究分野に応じて武蔵小杉キャンパスもしくは青ヶ島キャンパスへ移動します。
        </p>
        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
          <Link href="academics/sciences/">理学部についてはこちら</Link>
        </button>
      </BackgroundGradient>
      </div>
      <div className="py-10">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={`kogakucampus.jpg`}
          alt="Aogashima"
          height="400"
          width="400"
          className="object-contain mx-auto rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          工学部
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          工学部には荻窪キャンパス、梅田キャンパス、難波キャンパスが存在します。（画像は梅田）<br></br>
          1,2年生の間は荻窪キャンパスまたは難波キャンパスで基礎科目を学び、3,4年で研究のため梅田キャンパスへ移動します。
        </p>
        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
          <Link href="academics/engineering/">工学部についてはこちら</Link>
        </button>
      </BackgroundGradient>
      </div>
      <div className="py-10">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={`igakucampus.jpg`}
          alt="Aogashima"
          height="400"
          width="400"
          className="object-contain mx-auto rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          医学部
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          医学部には新宿キャンパス、横浜キャンパス、十月革命キャンパスが存在します。（画像は新宿）<br></br>
          1,2,3年生の間は新宿キャンパスで基礎科目を学び、4,5年生では横浜キャンパスで実習を行い,6年生では医師国家試験に向けて十月革命島(現地での名称:остров Октябрьской Революции)での厳しい環境で医師国家試験対策を行います。
        </p>
        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
          <Link href="academics/sciences/">医学部についてはこちら</Link>
        </button>
      </BackgroundGradient>
      </div>
</div>
    </div>
  </>
  )
}
export function Academics(){
  return(
    <>
    
    </>
  )
}