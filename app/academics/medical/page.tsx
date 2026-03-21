"use client"
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import Link from "next/link"
//import { Button } from "@/components/ui/button"
//import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import {
  Accordion,
} from "@/components/ui/accordion"
import Image from "next/image";
//import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
export default function Home() {
  return (
    <>
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      <motion.img
        src="/igaku.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        医学を究め、人を救う<br />
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
        <p>医学部は、人間の生命と健康を科学的に探究し、医療を通じて社会に貢献することを使命とした学部です。</p>
        <p>人体の構造や機能、病気の原因と治療法、医療技術の進歩など、医学に関わる幅広い知識を体系的に学び、未来の医師・医療従事者・研究者を育成します。</p>
        <p>学びは基礎医学と臨床医学の両面から構成されます。基礎医学では、細胞や遺伝子、臓器の働きといった生命の根本原理を理解し、病気のメカニズムを科学的に解明する力を養います。</p>
        <p>続く臨床医学では、病院などの医療現場で実際の患者さんと向き合い、診断・治療に必要な判断力やコミュニケーション能力、倫理観を身につけます。</p>
        <p>医学は日々進化し続ける分野であり、AI医療、再生医療、遺伝子治療といった新たな技術が次々と実用化されています。</p>
        <p>医学部では、こうした最先端の知識や技術に触れながら、「人を救う」という医学本来の使命に向き合う姿勢を重視しています。</p>
        <p>医学部での学びは決して容易ではありません。しかし、生命の尊厳に深く関わり、人々の健康と未来を支える非常に意義深い道でもあります。</p>
        <p>医学部は、確かな専門性と豊かな人間性を兼ね備えた医療人を育てるための、かけがえのない学びの場です。</p>
        医学部では、講義・実習・研究のすべてが連動し、医学を多角的に理解できるカリキュラムが整えられています。
        特に早い段階からの実習や問題解決型学習（PBL）を通じて、医療現場で求められる実践的な思考力を養います。
        また、研究室に所属することで、自らの興味に基づいたテーマに取り組み、未知の領域を切り拓く研究の喜びを体験することができます。
さらに、医学はチーム医療の時代へと進化し、医師だけでなく看護師、薬剤師、検査技師、リハビリ専門職など、多様な専門家と協力しながら患者さんを支える力が求められています。
医学部の学びは、こうした多職種連携に対応できるコミュニケーション能力や協働力も育みます。
医学部の教育は長く厳しいものかもしれませんが、その過程で得られる成長と達成感は大きく、生命を扱う専門家としての確かな基盤になります。
医療が抱える課題に真摯に向き合い、人々の生活をより良くするために貢献したいという思いを持つ方にとって、医学部は最も適した学びの場です。
    </div>

    <div>
      <br></br>
      <div className ="pl-10 py-10">
      <Image src="/rigakubu.png" alt="理学部の教室" width="700" height="512"></Image>
      </div>
      </div>
    </div>
    <div className="text-4xl font-medium pl-10">
          <h2>学部長挨拶</h2>
    </div>
    <div className="text-2xl place-items-center flex font-medium pl-20 py-10 ">
      <div className="">
      <Image src="/igakubucho.jpg" alt="学部長写真" width="500" height="500"></Image>
      </div>
      <div className="text-xl pl-10 py-10">
        <p>医学部は、「人の生命と健康を守る」という普遍的で重大な使命を担う学部です。私たちは、医学の本質を深く理解し、誠実な心を持つ医療人と研究者を育成することを第一の目標としております。</p>
        <p>現代の医療は、基礎医学から臨床医学、さらに高度化する医療技術やAIの活用まで、非常に幅広く、かつ日々進歩を続けています。医学部では、これらの知識と技術を体系的に学ぶだけでなく、「なぜ病気が起こるのか」「どうすれば苦しむ人々を救えるのか」という根源的な問いに真摯に向き合う姿勢を大切にしています。</p>
        <p>医療の現場では、専門的な知識や技術はもちろん、人を思いやる心、仲間と協力する力、責任感、そして困難に立ち向かう強さが求められます。学生の皆さんには、教室・研究室・病院という多様な学びの場を通じて、医師としての確かな専門性と豊かな人間性を育んでほしいと願っています。</p>
        <p>医学部は、生命の神秘に挑み、社会の健康を支える基盤を築く場所です。ここでの学びが、皆さんの未来を力強く支え、そして多くの人々の希望となることを心より期待しています。</p>
    </div>
    </div>
</>

)
}//画像が下に、上の二つがcol2で分けられている
//次回24~35の修正
