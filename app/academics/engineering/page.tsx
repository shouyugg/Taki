"use client"
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import Link from "next/link"
import Image from "next/image";
import { motion } from "motion/react";
//import { Button } from "@/components/ui/button"
import {
  Accordion,
} from "@/components/ui/accordion"
//import { faSortDown } from '@fortawesome/free-solid-svg-icons'
//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="/kogaku2.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        先人が開いた知識で、世を豊かにする。<br />
      </h1>
    </div>
      <div className="px-80">
          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    ></Accordion></div>
    <div className="grid grid-cols-2">
    <div className="text-xl pl-10 py-10">
        <p>工学部は、科学的な知識をもとに社会の課題を解決する「ものづくり」の最前線を担う学部です。機械・電気・情報・建築・材料など多様な分野を通じて、理論を現実社会に応用する力を養います。</p>
        <p>技術革新の中心に立ち、持続可能な社会の実現に貢献するのが工学の使命です。創造力と実践力を兼ね備えたエンジニアを育成し、AI、自動運転、エネルギー、ロボティクスなど、次世代の技術を切り拓く人材を輩出します。</p>
        <br></br>
        <p>情報工学科は、コンピュータと情報の力で新しい価値を生み出す学問を探究する学科です。私たちの生活は、スマートフォン、AI、クラウド、ロボットなど、情報技術によって大きく支えられています。情報工学は、それらの仕組みを支える理論・アルゴリズム・ソフトウェア・ハードウェアを体系的に学ぶ分野です。</p>
        <p>大学では、プログラミングやデータ構造、機械学習、ネットワーク、セキュリティなどを基礎から応用まで幅広く学びます。また、AIによる画像認識、ビッグデータ解析、スマートシステムなど、最先端の研究にも触れることができます。</p>
        <p>情報工学の魅力は、**「アイデアを形にできる力」**を身につけられること。論理的思考と創造力を武器に、社会をより便利で豊かにする新しい技術を自らの手で創り出すことができます。</p>
      <br></br>
        <p>建築科は、「人」と「空間」と「社会」をつなぐデザインを学ぶ学科です。建築は単なる構造物づくりではなく、文化・技術・芸術が融合した総合的な創造行為です。人が安心し、快適に過ごせる空間を生み出すために、美しさと機能性、そして環境との調和を考える力が求められます。</p>
        <p>大学の学びでは、建築設計や構造力学、建築史、都市計画、環境デザインなどを幅広く学びます。製図や模型製作、CAD・BIMといったデジタル設計ツールの実習を通じて、構想を具体的な形にする能力を養います。</p>
        <p>建築科の魅力は、人の暮らしに寄り添いながら未来の景観を創ることにあります。街並みを設計するスケールの大きな視点と、一人ひとりの生活を支える繊細な感性。その両方を身につけ、次世代の建築を担う人材を育てます。</p>
    </div>

    <div>
      <h2 className="text-4xl font-medium pl-10 py-10"></h2>
      <br></br>
      <div className ="pl-10 py-10">
      <Image src="/kogaku.jpg" alt="理学部の教室" width="700" height="512"></Image>
      </div>
      </div>
    </div>
    <div className="text-4xl font-medium pl-10">
          <h2>学部長挨拶</h2>
    </div>
    <div className="text-2xl place-items-center flex font-medium pl-20 py-10 ">
      <div className="">
      <Image src="/kougakubucho.jpg" alt="学部長写真" width="300" height="300"></Image>
      </div>
      <div className="text-xl pl-10 py-10">
        <p>工学は、「科学を社会の力へと変える学問」です。理学が自然の原理を探究する学問であるならば、工学はその成果を活かし、人々の暮らしを豊かにする“応用と創造”の学問といえます。</p>
        <p>現代社会は、AI・情報通信・ロボティクス・エネルギー・建築・環境技術など、多様な工学の力によって支えられています。私たち工学部では、これらの分野を横断的に学びながら、「理論に基づいた実践力」と「課題を発見し解決する力」を育てることを重視しています。</p>
        <p>工学の本質は、単に技術を身につけることではなく、「社会の課題に創造的に挑むこと」です。たとえ小さな発見や試みであっても、それが未来の大きな変革につながる可能性を秘めています。学生の皆さんには、失敗を恐れず、自由な発想と探究心で学びを深めてほしいと願っています。</p>
        <p>工学部は、知識を現実へと結びつけ、未来を設計するための場所です。私たちは、次世代を担うエンジニアとしての誇りと責任を胸に、社会に貢献できる人材の育成に全力を尽くしてまいります。</p>
    </div>
    </div>
</>

)
}//画像が下に、上の二つがcol2で分けられている
//次回24~35の修正
