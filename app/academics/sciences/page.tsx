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
        src="/rigaku2.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        数理を探求し、楽しむ。<br />
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
        <p>理学部は、自然界の仕組みを数理・物理・化学・生物など多角的に探究する学部です。</p>
        <p>基礎科学の知識を深めながら、実験や観察、データ解析を通じて論理的思考力と探究心を養います。</p>
        <p>将来は研究職だけでなく、教育、技術開発、データサイエンスなど幅広い分野で活躍できます。</p>
        <br></br>
      <p>数学は、まるで謎解きのような楽しさがあります。公式や定理を使って問題を解くたびに、まるでパズルのピースがぴたりとはまる快感があります。</p>
      <p>日常の中にも数学は潜んでいて、論理的に考える力や想像力を育ててくれます。難しいからこそ、解けた時の喜びは格別です。</p>
      <p>滝筑大学では、抽象的な概念を深く追求する知的冒険を行います。定理の背後にある論理や構造を理解することで、世界の見方が一変し、思考の幅が広がります。</p>
      <br></br>
      <p>大学の化学は、「物質を覚える勉強」から「世界の仕組みを理解する学問」へと進化します。高校で学んだ反応式や構造式の背景にある“なぜそうなるのか”を、量子力学や熱力学などの理論を使って深く追究します。</p>
      <p>例えば、分子がどうやって光を吸収して色を生み出すのか、触媒はなぜ反応を早めるのか、ナノスケールでの原子の動きがどのように新しい材料や医薬品の発見につながるのか――そのひとつひとつを自分の手で確かめられるのが大学の化学です。</p>
      <p>実験では、目に見えない世界の法則を「現象」として体験できる瞬間があります。化学反応が理論どおりに進行したとき、あるいは予想外の結果が出たとき、その理由を探る過程こそが最大の魅力です。化学は、世界を構成するあらゆる“物質”への理解を通して、未知を解き明かす知的冒険の学問です。</p>
      <br></br>
      <p>物理は、宇宙からミクロの世界まで、すべての自然現象を数式で説明しようとする学問です。大学の物理では、「公式を使う」段階から「法則を導き出す」段階へと進みます。</p>
      <p>ニュートン力学、電磁気学、量子力学、相対性理論――どれも一見難解ですが、その根底には「自然はシンプルな原理で動いている」という美しい思想があります。大学ではその原理を数学的に追究し、身の回りの現象から宇宙の成り立ちまでをつなげて理解することができます。</p>
      <p>物理の面白さは、理論が現実を正確に予言するところにもあります。数式の中に未来の技術が隠されているのです。スマートフォンの通信、MRI、半導体、量子コンピュータ——これらすべては、物理の知識から生まれました。</p>
      <p>実験やシミュレーションを通して、自然の根本原理が“見えてくる”瞬間は、まさに物理ならではの感動です。</p>
    </div>

    <div>
      <h2 className="text-4xl font-medium pl-10 py-10"></h2>
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
      <Image src="/rigakubucho.jpg" alt="学部長写真" width="300" height="300"></Image>
      </div>
      <div className="text-xl pl-10 py-10">
        <p>理学部は、「自然の原理を探究し、真理を見いだす」ことを使命としています。私たちの周りに広がる世界――宇宙、物質、生命――そのすべては、まだ多くの謎に包まれています。理学は、その謎を解き明かす知的冒険の学問です。</p>
<p>大学で学ぶ理学は、単なる知識の集積ではありません。数学や物理学、化学、生物学、地学といった分野を通じて、自然現象の背後にある“普遍的な法則”を理解し、それを論理的に説明する力を養います。その過程で培われる観察力・思考力・創造力は、科学のみならず、あらゆる分野で価値を発揮します。</p>
<p>理学の探究は、すぐに社会の役に立たないこともあるかもしれません。しかし、今日の便利で豊かな社会を支えている技術や発見の多くは、かつて純粋な好奇心から始まった基礎研究の成果です。理学とは、未来を形づくる「知の原点」なのです。</p>
<p>理学部では、未知への探究心を持つ学生の皆さんが自由に発想し、挑戦し、そして自らの手で新しい発見を生み出す環境を整えています。自然の不思議に魅了され、真理を求める志をもつ皆さんと、この学びの旅を共にできることを楽しみにしています。</p>
    </div>
    </div>
</>

)
}//画像が下に、上の二つがcol2で分けられている
//次回24~35の修正
//45行目のキャッチコピーを派手なやつにする
