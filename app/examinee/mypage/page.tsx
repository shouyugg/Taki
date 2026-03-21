"use client"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
export default function Home() {
  return (
    <>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">出願者マイページ</h1>
        </div>
      </section>
      <br/><br/>
      <div className="px-80">
          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      
      <AccordionItem value="item-1">
        <AccordionTrigger>STEP1 インターネット出願方法の確認</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>
          <Link href="/examinee/mypage/how_to_apply">出願方法の確認</Link>
          </Button>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>STEP2 インターネット出願に情報を入力する</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>出願情報を入力する</Button>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>STEP3 受験料・調査書の送信</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>送信</Button>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>STEP4 合否確認</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>確認</Button>
        </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </>
  )
}