"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = `未来を創る「知のエンジン」になるために、たくさん教科書と向き合うことから始めよう。
`;
 
export default function TextGenerateEffectDemo() {
  return (
    <>
  <div className="px-50">
  <TextGenerateEffect duration={5} filter={false} words={words} />
  <br></br>
  <div className="text-3xl decoration-2">
      勇敢にも本大学を受けようとしている受験生たちへ
    </div>
    <br></br>
    <div>
      本学は、創立以来一貫して科学技術の発展と社会への貢献を理念としてきた、日本有数の理工系総合大学です。すごい！すごいよ！こんな狂人の集まりの大学を受けようとしているなんでもうお母さん涙が出ちゃうわ
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