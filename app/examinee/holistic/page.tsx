"use client"
import {AlertCircle, Badge, CircleDollarSign } from "lucide-react"; 
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
export default function Home() {
  return (
    <>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <CircleDollarSign/>
          <h1 className="text-4xl font-bold mb-4">総合型選抜について</h1>
        </div>
      </section>
      <br/><br/>
      <div className="px-40">
    <Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
      <TableHeader>
        <TableRow>
          <TableHead  className="w-[100px]">前提条件</TableHead>
          <TableCell>
          <p>＜高等学校等卒業者＞</p>
          <p>第1学年から第3学年修了時までの「全体」の学習成績の状況が3.0以上の者。</p>
          <p>＜高等学校等卒業見込者＞</p>
          <p>第1学年から第3学年1学期終了時まで（2学期制の学校で第3学年前期までの記載ができない場合は、第2学年終了時まで）の「全体」の学習成績の状況が3.0以上の者。</p>
          <p>理工学部および学科・コースのアドミッション・ポリシーに則り、志望する学科・コースが指定する個別の出願条件を満たす者。</p></TableCell>
          </TableRow>
          </TableHeader>
      </Table>

      <br/><br/><br/>

      <Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
          <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] bg-muted/50">理学部</TableHead>
          <TableHead>推薦要件</TableHead>
        </TableRow>
    <TableRow>
      <TableCell className="font-medium">数学科</TableCell>
      <TableCell>
        <p>1と2を満たしていること</p>
          <ol className="list-decimal list-inside">
            <li> JMO Bランク上位以上 または 数検2級以上</li>
            <li> 滝筑大学の数学科のオープンキャンパスに参加したことがある</li> 
          </ol>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">化学科</TableCell>
      <TableCell>
          <p>1と2を満たしていること</p>
          <ol className="list-decimal list-inside">
          <li>3年間の化学基礎、化学の平均成績が5段階中4.0以上であること、10段階なら8.0以上であること</li>
          <li>3年間の化学基礎、化学の成績で1、2がついていないこと</li></ol>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">物理学科</TableCell>
      <TableCell>
          <p>1と2を満たしていること</p>
          <ol className="list-decimal list-inside">
          <li>3年間の物理基礎、物理の平均成績が5段階中4.0以上であること、10段階なら8.0以上であること</li>
          <li>3年間の物理基礎、物理の成績で1、2がついていないこと</li>
          </ol>
      </TableCell>
      </TableRow>
    </TableHeader>
      </Table>

      <br/><br/><br/>

      <Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
          <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] bg-muted/50">工学部</TableHead>
          <TableHead>推薦要件</TableHead>
        </TableRow>
    <TableRow>
      <TableCell className="font-medium">情報工学科</TableCell>
      <TableCell>
          <p>1と2を満たしていること</p>
          <ol className="list-decimal list-inside">
            <li> JOI本選を経て春の合宿に参加したことがある</li>
            <li> 滝筑大学の情報工学科のオープンキャンパスに参加したことがある</li> 
          </ol>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">建築科</TableCell>
      <TableCell>
          <p>＜建築科志望者＞ 1から3を満たしていること</p>
          <ol className="list-decimal list-inside">
          <li>3年間の数学ⅰ・Ⅱと数学A・Bの平均成績が5段階中4.0以上であること、10段階なら8.0以上であること</li>
          <li>3年間の数学ⅰ・Ⅱと数学A・Bおよび理科科目で10単位以上履修していること</li>
          <li>滝筑大学の建築科のオープンキャンパスに参加したことがある</li></ol>
      </TableCell>
    </TableRow>
    </TableHeader>
      </Table>

      <br/><br/><br/>

      <Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
          <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] bg-muted/50">医学部</TableHead>
          <TableHead>推薦要件</TableHead>
        </TableRow>
    <TableRow>
      <TableCell className="font-medium">医学科</TableCell>
      <TableCell>
          <p>＜医学科志望者＞ 1と2を満たしていること、定員1名</p>
          <ol className="list-decimal list-inside">
            <li> 全成績が4.0以上である、成績平均が4.4以上である</li>
            <li> 滝筑大学の医学科のオープンキャンパスに参加したことがある</li> 
          </ol>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">看護科</TableCell>
      <TableCell>
          <p>＜看護科志望者＞ 1と2を満たしていること</p>
          <ol className="list-decimal list-inside">
          <li>全成績が4.0以上である、成績平均が4.4以上である</li>
          <li>滝筑大学の看護科のオープンキャンパスに参加したことがある</li>
          </ol>
      </TableCell>
    </TableRow>
    </TableHeader>
      </Table>
      <br/><br/><br/>
    <Alert variant="destructive" className="mb-10 bg-red-50 border-red-200 text-red-900">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="font-bold mb-1">【重要】合格基準について</AlertTitle>
          <AlertDescription className="text-2xl font-medium">
            どの学科も、受験者がこちら側の定めた最低点数に届かない場合は不合格とします。
          </AlertDescription>
        </Alert>
      </div>
    </>
  )
}
