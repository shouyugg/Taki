import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="滝筑大学 ロゴ"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-blue-900 leading-none">
              滝筑大学
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest mt-1 uppercase">
              Takitsuku University
            </span>
          </div>
        </Link>

        {/* ナビゲーション */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavGroup title="大学案内" mainTitle="大学概要" description="滝筑大学の理念や歴史、キャンパスの様子をご紹介します。" pageLink={"/welcome"}>
              <ListItem href="/welcome/aboutuniv" title="大学概要">滝筑大学について知りたい場合は、こちら。</ListItem>
              <ListItem href="/welcome/canvas" title="キャンパス案内">豊かな自然と最新設備が共存するキャンパス紹介。</ListItem>
              <ListItem href="/welcome/news" title="広報・ニュース">最新のニュースやプレスリリースをご覧いただけます。</ListItem>
            </NavGroup>

            <NavGroup title="学部・大学院" mainTitle="教育組織" description="専門性を高め、未来を創造する多様な学部・学科。" pageLink={"/academics"}>
              <ListItem href="/academics/sciences" title="理学部">数学科、化学科、物理学科</ListItem>
              <ListItem href="/academics/engineering" title="工学部">情報工学科、建築科</ListItem>
              <ListItem href="/academics/medical" title="医学部">最先端の医療を学ぶ医学科・看護科</ListItem>
            </NavGroup>

            <NavGroup title="受験生の方へ" mainTitle="入試情報" description="あなたの挑戦をサポートする、様々な入試制度のご案内。" pageLink={"/examinee"}>
              <ListItem href="/examinee/exam" title="過去問">共通問題、医学部専用問題のアーカイブ。</ListItem>
              <ListItem href="/examinee/holistic" title="総合型選抜">多角的な評価を行う選抜形式の詳細。</ListItem>
              <ListItem href="/examinee/mypage" title="出願者マイページ">Web出願から合格発表の確認まで。</ListItem>
            </NavGroup>

            <NavGroup title="教育・学生生活" mainTitle="学生生活" description="充実した学びと、豊かなキャンパスライフを支える制度。" pageLink={"/living"}>
              <ListItem href="/living/ug" title="授業・履修">シラバスや履修登録に関する情報。</ListItem>
              <ListItem href="/living/scholarship" title="奨学金制度">学びを経済面からサポートする各種制度。</ListItem>
              <ListItem href="/living/procedures" title="学籍・諸手続き">休学、復学、住所変更などの手続き。</ListItem>
            </NavGroup>
          </NavigationMenuList>
        </NavigationMenu>

        {/* クイックリンク（オプション） */}
        {/*<div className="hidden xl:flex items-center gap-4">
           <button className="text-xs font-bold px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
             資料請求
           </button>
        </div>*/}
      </div>
    </header>
  )
}

// 共通のグループ構造
function NavGroup({ title, mainTitle, description, children, pageLink = "/"}: { title: string, mainTitle: string, description: string, children: React.ReactNode, pageLink?: string}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-slate-100 text-slate-700 font-semibold">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.8fr_1fr] bg-white">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <Link
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-blue-50 to-blue-100 p-6 no-underline outline-hidden focus:shadow-md border border-blue-200"
                href={pageLink}
              >
                <div className="mt-4 mb-2 text-lg font-bold text-blue-900">{mainTitle}</div>
                <p className="text-sm leading-tight text-blue-700/80">{description}</p>
              </Link>
            </NavigationMenuLink>
          </li>
          {children}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

function ListItem({ className, title, children, href, ...props }: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-slate-100 hover:text-blue-900 focus:bg-slate-100 focus:text-blue-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}