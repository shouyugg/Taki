"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
//import { Button } from "@/components/ui/button"
//import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const words = `まだ見ぬ自分に、会いに行こう。その一歩が未来を変える地図になる。
`;
 
export default function UG() {
  return (
    <>
  <div className="sm:px-4 md:px-40">
  <TextGenerateEffect duration={5} filter={false} words={words} />
  <br></br>
  <div className="text-3xl decoration-2">
      昨日までの君を、超える場所がここにある。
    </div>
    <br></br>
    <div className="mb-12">
      ご入学おめでとうございます。今日から、皆さんの「探究」という名の新しい旅が始まります。
      理系の学びとは、単に教科書の知識を蓄えることではありません。目の前の現象に対して「なぜ？」と問い続け、仮説を立て、自らの手で真実を導き出すプロセスそのものです。時には複雑な数式や、終わりの見えない実験に壁を感じることもあるでしょう。しかし、その苦悩の先にある「発見」の喜びこそが、世界を一歩前へと進める原動力になります。
      このキャンパスには、最新の設備と、同じ志を持つ最高の仲間が揃っています。失敗を恐れず、自由に想像し、論理の翼を広げてください。あなたの好奇心が、いつか未来の「標準」を創り出す。その無限の可能性を、私たちは全力で応援します。<br></br>
    </div>
      <h1 className="text-5xl font-bold text-center text-black relative z-2 font-sans">
        理学部<br />
      </h1>
      <div className="text-2xl decoration-2">
      数学科
    </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
        数学講究Ⅰ［2］<br></br>数学講究Ⅱ［2］<br></br>線形数学Ⅰ［4］<br></br>基礎解析学Ⅰ［4］<br></br>
</TableCell>
      <TableCell>
        数学講究Ⅲ［2］<br></br>数学講究Ⅳ［2］<br></br>数学講究Ⅴ［2］<br></br>数学講究Ⅵ［2］<br></br>
      </TableCell>
      <TableCell>
        数学講究Ⅶ［2］<br></br>数学講究Ⅷ［2］<br></br>
      </TableCell>
      <TableCell>
        卒業研究［8］<br></br>
      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
        現代数学（1）［2］<br></br>現代数学（2）［2］<br></br>現代数学（3）［2］<br></br>現代数学（4）［2］<br></br>現代数学（5）［2］<br></br>応用数学（1）［2］<br></br>応用数学（2）［2］<br></br>
      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
        	基礎幾何学［2］
      </TableCell>
      <TableCell>
        線形数学（2）［2］<br></br>基礎解析学（2）［2］<br></br>群論（1）［2］<br></br>群論（2）［2］<br></br>集合と位相（1）［2］<br></br>集合と位相（2）［2］<br></br>微分方程式論（1）［2］<br></br>微分方程式論（2）［2］<br></br>計算機実習（1）［2］<br></br>複素解析学（1）［2］<br></br>教科教育演習［1］<br></br>地学概論I［2］<br></br>地学概論II［2］<br></br>地学実験［1］<br></br>データ構造とアルゴリズムI［2］<br></br>オペレーティングシステム［2］<br></br>
      </TableCell>
      <TableCell>
        複素解析学（2）［4］<br></br>代数学（1）［4］<br></br>代数学（2）［4］<br></br>幾何学（1）［4］<br></br>幾何学（2）［4］<br></br>実解析学（1）［4］<br></br>実解析学（2）［4］<br></br>数理統計学（1）［2］<br></br>数理統計学（2）［2］<br></br>計算機実習（2）［1］<br></br>実験数理解析［1］<br></br>情報理論［2］<br></br>通信方式［2］<br></br>データベース論I［2］<br></br>画像処理［2］<br></br>ネットワーク工学［2］<br></br>コンピュータグラフィックス［2］<br></br>組み込みシステム概論［2］<br></br>移動体通信工学［2］<br></br>情報と社会［2］<br></br>
      </TableCell>
      <TableCell>
        情報と職業［2］
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

<div className="text-2xl decoration-2 pt-6">
      化学科
  </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
        基礎化学[4]<br></br>化学実験[2]<br></br>微分積分学[4]<br></br>英語[4]
</TableCell>
      <TableCell>
        有機化学I[2]<br></br>無機化学I[2]<br></br>物理化学I[2]<br></br>分析化学[2]<br></br>専門化学実験I[4]
      </TableCell>
      <TableCell>
        有機反応機構[2]<br></br>構造化学[2]<br></br>専門化学実験II[6]
      </TableCell>
      <TableCell>
        卒業研究[10]<br></br>演習・ゼミ[2]
      </TableCell>
    </TableRow>



   <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>
      物理学概論[2]<br></br>生物学概論[2]
      </TableCell>
      <TableCell>
      量子化学[2]<br></br>統計力学[2]
      </TableCell>
      <TableCell>
      高分子化学[2]<br></br>生化学[2]
      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>

       <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
      教養科目[8]
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
        </TableBody>
    </Table>

    <div className="text-2xl decoration-2 pt-6">
      物理学科
  </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
        力学[4]<br></br>微積分・線形代数[8]<br></br>物理学実験[2]<br></br>英語[4]
</TableCell>
      <TableCell>
        電磁気学[4]<br></br>熱力学[2]<br></br>解析力学[2]<br></br>物理数学[4]<br></br>物理学実験II[4]
      </TableCell>
      <TableCell>
        量子力学[4]<br></br>統計力学[2]<br></br>物理学実験III[6]
      </TableCell>
      <TableCell>
        卒業研究[10]<br></br>物理学セミナー[2]
      </TableCell>
    </TableRow>



   <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
      相対性理論[2]<br></br>固体物理学[2]<br></br>素粒子物理学[2]
      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>

       <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
      教養科目[10]
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
        </TableBody>
    </Table>

<h1 className="text-5xl py-10 font-bold text-center text-black relative z-2 font-sans">
        工学部<br/>
      </h1>
      <div className="text-2xl decoration-2">
      情報工学科
    </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
        プログラミング基礎[4]<br/>情報リテラシー[2]<br/>離散数学[2]<br/>英語[4]
</TableCell>
      <TableCell>
        データ構造とアルゴリズム[2]<br/>計算機アーキテクチャ[2]<br/>オペレーティングシステム[2]<br/>情報工学実験I[4]
      </TableCell>
      <TableCell>
        ネットワーク概論[2]<br/>ソフトウェア工学[2]<br/>人工知能[2]<br/>情報工学実験II[4]
      </TableCell>
      <TableCell>
        卒業研究[8]<br/>インターンシップ[2]
      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
      線形代数続論[2]<br/>確率統計[2]
      </TableCell>
      <TableCell>
      データベース[2]<br/>コンパイラ[2]
      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
        教養科目[12]
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
        
      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
  </TableBody>
</Table>

<div className="text-2xl decoration-2 pt-6">
      建築科
  </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
      建築概論[2]<br/>建築造形演習[4]<br/>図学[2]<br/>英語[4]
</TableCell>
      <TableCell>
        建築設計製図I[4]<br/>建築史[2]<br/>建築構造力学I[2]<br/>建築材料[2]
      </TableCell>
      <TableCell>
        建築設計製図II[6]<br/>建築施工[2]<br/>建築法規[2]
      </TableCell>
      <TableCell>
        卒業設計、卒業論文[10]
      </TableCell>
    </TableRow>



   <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>
      物理学概論[2]<br></br>生物学概論[2]
      </TableCell>
      <TableCell>
      量子化学[2]<br></br>統計力学[2]
      </TableCell>
      <TableCell>
      高分子化学[2]<br></br>生化学[2]
      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>

       <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
      教養科目[8]
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
        </TableBody>
    </Table>


    <h1 className="text-5xl py-10 font-bold text-center text-black relative z-2 font-sans">
        医学部<br/>
      </h1>
      <div className="text-2xl decoration-2">
      医学科
    </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
      <TableHead>5年次</TableHead>
      <TableHead>6年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
        早期医学体験実習[2]<br/>医学英語[2]<br/>一般教養全般[20]
</TableCell>
      <TableCell>
        解剖学[6]<br/>生理学[4]、<br/>生化学[4]<br/>組織学[4]
      </TableCell>
      <TableCell>
        薬理学[4]<br/>病理学[4]<br/>微生物学[2]<br/>免疫学[2]
      </TableCell>
      <TableCell>
        内科学概論[6]<br/>外科学概論[4]<br/>社会医学[2]<br/>共用試験(CBT/OSCE)対策[-]
      </TableCell>
      <TableCell>
        病院実習（各科ローテーション）[30]
      </TableCell>
      <TableCell>
        高度臨床実習[10]<br/>総合医学演習[4]<br/>卒業試験[-]
      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>


    <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
        
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
  </TableBody>
</Table>

<div className="text-2xl decoration-2 pt-6">
      看護学科
  </div>
<Table className="[&_td]:border-r [&_th]:border-r [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">専門科目</TableHead>
      <TableHead>1年次</TableHead>
      <TableHead>2年次</TableHead>
      <TableHead>3年次</TableHead>
      <TableHead>4年次</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>


    <TableRow>
      <TableCell className="font-medium">必修科目</TableCell>
      <TableCell>
      看護学概論[2]<br/>解剖生理学[4]<br/>基礎看護技術I[2]<br/>英語[4]
</TableCell>
      <TableCell>
        基礎看護学実習I[2]<br/>病態生理学[2]<br/>看護援助論[4]<br/>薬理学[2]
      </TableCell>
      <TableCell>
        成人看護学[2]<br/>小児看護学[2]<br/>母性看護学[2]<br/>精神看護学[2]<br/>領域別実習[8]
      </TableCell>
      <TableCell>
        総合実習[4]<br/>卒業研究[4]<br/>国家試験演習[2]
      </TableCell>
    </TableRow>



   <TableRow>
      <TableCell className="font-medium">選択必修科目</TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>
      保健師選択科目[6]<br/>
      </TableCell>
    </TableRow>

       <TableRow>
      <TableCell className="font-medium">選択科目</TableCell>
      <TableCell>
      教養科目[12]
      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
      <TableCell>

      </TableCell>
    </TableRow>
        </TableBody>
    </Table>
    </div>
  </>
  )
}
