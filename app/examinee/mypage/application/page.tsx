// "use client"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import {
//   Combobox,
//   ComboboxContent,
//   ComboboxEmpty,
//   ComboboxInput,
//   ComboboxItem,
//   ComboboxList,
// } from "@/components/ui/combobox"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"

// const frameworks = [
// "理学部","工学部","医学部"
// ] as const
// const Gakka = {
//   "理学部": ["数学科","化学科","物理学科"],
//   "工学部": ["情報工学科","建築科"],
//   "医学部": ["医学科","看護科"]
// }

// export default function Home() {
//   const [selected,setSelected] = useState<keyof typeof Gakka>("理学部");
//   const [checkedItems,setCheckedItems] = useState<string[]>([]);
//   const handleCheck = (item:string) => {
//     setCheckedItems((prev) =>
//       prev.includes(item)
//     ? prev.filter((i) => i !== item) //true
//     : [...prev,item] //false
//     );
//   }

//   return (
//     <>
//     <div className="px-40">
//     <h1 className="text-2xl font-bold">出願情報の入力</h1>
//     <h1 className="">出願情報を入力してください。当出願ページで知り得た個人情報は受験票の発行のみに使用します。情報は厳重に管理され、第三者の手に渡ることはありません。</h1>
//       <h1 className="text-2xl font-bold">個人情報</h1>
//       名前<Input placeholder="(例):滝筑　纏" />
//       氏名<Input placeholder="(例):タキツク　テン" />
//       生年月日<Input placeholder="(例):2026/02/21"/>
//       性別<RadioGroup defaultValue="comfortable" className="w-fit">
//       <div className="flex items-center gap-3">
//         <RadioGroupItem value="male" id="r1" />
//         <Label htmlFor="r1">男</Label>
//       </div>
//       <div className="flex items-center gap-3">
//         <RadioGroupItem value="female" id="r2" />
//         <Label htmlFor="r2">女</Label>
//       </div>
//       <div className="flex items-center gap-3">
//         <RadioGroupItem value="others" id="r3" />
//         <Label htmlFor="r3">その他</Label>
//       </div>
//     </RadioGroup>
//       都道府県<Input placeholder="(例):東京都" />
//       メールアドレス(任意)<Input placeholder="(例):takitukuten@example.jp" />
//       <br/>
//       受験学部
//       <Combobox
//           items={Object.keys(Gakka)}
//           value={selected}
//           // ※お使いのコンポーネントライブラリの仕様に合わせて、
//           // onValueChange, onChange, onSelectionChange などの適切なイベント名に置き換えてください。
//           onValueChange={(val) => {
//             // 文字列として受け取った値を型アサーションしてセット
//             setSelected(val as keyof typeof Gakka);
//             setCheckedItems([]); // 空(初期化)
//           }}
//         >
//       <ComboboxInput placeholder="学科を選択..." />
//       <ComboboxContent>
//         <ComboboxEmpty>見つかりませんでした。</ComboboxEmpty>
//         <ComboboxList>
//           {/* items に渡した Object.keys(Gakka) の配列要素が item として渡ってきます */}
//           {(item: string) => (
//             <ComboboxItem key={item} value={item}>
//               {item}
//             </ComboboxItem>
//           )}
//         </ComboboxList>
//       </ComboboxContent>
//     </Combobox>
//       <div className="space-y-2">
//         {Gakka[selected].map((item) => (
//           <label key={item} className="flex items-center gap-2">
//             <input type="checkbox" checked={checkedItems.includes(item)} //itemが含まれてるかの是非でcheckが入るか決まる(変数が配列に入っているかいなか)
//             onChange={() => handleCheck(item)}/>
//             {item}
//           </label>))}
//       </div>
//       <Button>受験票を発行する</Button>
//       </div>
//     </>
//     )
//   }
//55-59 mapのようなもの

/*jspdfでかくこと　
右側が受験票となりますので、切り離して用いてください。
また、この受験票は試験開始直前に回収しますので、必ず持参してください。
試験開始時刻 9:30受付開始 10:25受付終了 10:30試験開始 19:00 試験終了
試験会場（新宿キャンパス　徒歩30分）　
受験票の持参について
試験当日は本受験票を必ず持参し、試験中は机上の見えやすい位置（通路側など）に提示してください。万が一紛失したり忘れたりした場合は、試験開始前に速やかに試験本部の係員に申し出てください。

入室・遅刻について
試験開始の20分前までに試験室へ入室し、指定された座席に着席してください。試験開始後30分以内の遅刻に限り受験を認めますが、試験時間の延長は一切行いません。

机上に置けるもの
黒鉛筆（H、F、HB）、シャープペンシル、プラスチック製消しゴム、鉛筆削り（小型で電動でないもの）、時計（辞書・電卓・通信・アラーム機能のないもの）、眼鏡、ハンカチのみとします。これ以外のものはカバンにしまってください。

電子機器類の取り扱い
スマートフォン、スマートウォッチ、ウェアラブル端末、ICレコーダー等の電子機器類は、入室前に必ずアラーム設定を解除し、電源を切ってカバンの中にしまってください。試験中に身につけていたり、操作している場合は不正行為とみなします。

不正行為への対応
カンニングなどの不正行為が行われた場合、直ちに受験の中止と退室を命じます。また、本学におけるすべての試験結果を無効とします。

その他（体調不良・途中退出等）
試験中の飲食は原則として禁止です。試験中に体調が悪くなった場合やトイレに行きたい場合は、声を出さずに手を挙げ、監督者の指示に従ってください。

試験後の注意
試験終了後は、第1食堂の『滝筑名物・必勝カツカレー』が受験生割引で提供されます。本受験票を食堂の券売機横で提示してください。
ーーーーー
右　入力情報掲載
1. 試験当日必ず持参してください。
2. 氏名、生年月日等、記載内容に訂正がある場合は当日、
試験官の指示に従ってください。
3. この受験票は、試験開始直前に回収します。
4. 万が一、受験票を忘れた場合は、時間に余裕をもって
受付まで申し出てください。仮受験票を発行します。
*/

"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { jsPDF } from "jspdf"
import "@/lib/IPAexg-normal"

const Gakka = {
  "理学部": ["数学科", "化学科", "物理学科"],
  "工学部": ["情報工学科", "建築科"],
  "医学部": ["医学科", "看護科"]
}

export default function Home() {
  // フォーム入力値のステート管理
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [pref, setPref] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<keyof typeof Gakka>("理学部");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (item: string) => {
    setCheckedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // true
        : [...prev, item] // false
    );
  }
  const num = Math.floor(Math.random() * 900000) + 100000
  // PDF生成処理
  const handleGeneratePDF = () => {
    // A4サイズ、横向き（landscape）で生成
    const doc = new jsPDF("landscape", "mm", "a4");
// "MyFontName" の部分は、作成したJSファイル内で定義されている名前に書き換えてください
    doc.setFont("IPAexg");

    // 画像オブジェクトを作成
    const logoImg = new Image();
    // publicフォルダに配置した画像へのパス（例: public/logo.png）
    logoImg.src = "/logo.png";
    
    // ==========================================
    // ※注意：jsPDFで日本語を出力するにはカスタムフォントが必要です。
    // 以下はNotoSansJPなどをBase64化して読み込む際の例です。
    // doc.addFileToVFS("NotoSansJP-Regular.ttf", "ここにBase64文字列");
    // doc.addFont("NotoSansJP-Regular.ttf", "NotoSansJP", "normal");
    // doc.setFont("NotoSansJP");
    // ==========================================
    doc.addImage(logoImg, "PNG", 125, 10, 20, 20);
    // --- 左側（注意事項） ---
    doc.setFontSize(14);
    doc.text("【受験票について・注意事項】", 15, 20);
    
    doc.setFontSize(10);
    const leftText = `右側が受験票となりますので、切り離して用いてください。
また、この受験票は試験開始直前に回収しますので、必ず持参してください。

【試験スケジュール】
受付開始 9:30 / 受付終了 10:25 / 試験開始 10:30 / 試験終了 19:00

【試験会場】
新宿キャンパス（徒歩30分）

【受験票の持参について】
試験当日は本受験票を必ず持参し、試験中は机上の見えやすい位置（通路側など）に提示してください。万が一紛失したり忘れたりした場合は、試験開始前に速やかに試験本部の係員に申し出てください。

【入室・遅刻について】
試験開始の20分前までに試験室へ入室し、指定された座席に着席してください。試験開始後30分以内の遅刻に限り受験を認めますが、試験時間の延長は一切行いません。

【机上に置けるもの】
黒鉛筆（H、F、HB）、シャープペンシル、プラスチック製消しゴム、鉛筆削り（小型で電動でないもの）、時計（辞書・電卓・通信・アラーム機能のないもの）、眼鏡、ハンカチのみとします。これ以外のものはカバンにしまってください。

【電子機器類の取り扱い】
スマートフォン、スマートウォッチ、ウェアラブル端末、ICレコーダー等の電子機器類は、入室前に必ずアラーム設定を解除し、電源を切ってカバンの中にしまってください。試験中に身につけていたり、操作している場合は不正行為とみなします。

【不正行為への対応】
カンニングなどの不正行為が行われた場合、直ちに受験の中止と退室を命じます。また、本学におけるすべての試験結果を無効とします。

【その他（体調不良・途中退出等）】
試験中の飲食は原則として禁止です。試験中に体調が悪くなった場合やトイレに行きたい場合は、声を出さずに手を挙げ、監督者の指示に従ってください。

【試験後の注意】
試験終了後は、第1食堂の『滝筑名物・必勝カツカレー』が受験生割引で提供されます。本受験票を食堂の券売機横で提示してください。`;
    
    const splitLeftText = doc.splitTextToSize(leftText, 125);
    doc.text(splitLeftText, 15, 30);

    // --- 中央（切り取り線） ---
    doc.setLineDashPattern([3, 3], 0);
    doc.line(148.5, 10, 148.5, 200);
    doc.setLineDashPattern([], 0); // 線のスタイルを元に戻す

    // --- 右側（受験票本体） ---
    doc.setFontSize(18);
    doc.text("滝筑大学 受験票", 160, 25);
    doc.setFontSize(10);
    doc.text("TAKITSUKU UNIVERSITY", 160, 31);
    doc.rect(248, 14, 32, 8);
    doc.setFontSize(15);
    doc.text("受験番号", 250, 20);
    doc.rect(248, 22, 32, 12);
    doc.setFontSize(22);
    doc.text(`${num}`, 250, 30);
    // 入力情報の描画
    doc.setFontSize(12);
    doc.text(`氏名: ${name} (${furigana})`, 160, 45);
    doc.text(`生年月日: ${dob}`, 160, 55);
    doc.text(`性別: ${gender}`, 160, 65);
    doc.text(`都道府県: ${pref}`, 160, 75);
    doc.text(`受験学部: ${selected}`, 160, 85);
    doc.text(`受験学科: ${checkedItems.join(", ")}`, 160, 95);

    // 右下の確認事項枠
    doc.rect(160, 120, 120, 50);
    doc.setFontSize(10);
    const rightRules = `1. 試験当日必ず持参してください。
2. 氏名、生年月日等、記載内容に訂正がある場合は当日、
   試験官の指示に従ってください。
3. この受験票は、試験開始直前に回収します。
4. 万が一、受験票を忘れた場合は、時間に余裕をもって
   受付まで申し出てください。仮受験票を発行します。`;
    doc.text(rightRules, 165, 130);

    // PDFの保存
    doc.save("滝筑大学受験票.pdf");
  };

  return (
    <>
      <div className="sm:px-4 md:px-40 py-10 space-y-4">
        <h1 className="text-2xl font-bold">出願情報の入力</h1>
        <p className="text-sm text-gray-600">
          出願情報を入力してください。当出願ページで知り得た個人情報は受験票の発行のみに使用します。情報は厳重に管理され、第三者の手に渡ることはありません。
        </p>

        <h2 className="text-xl font-bold mt-8">個人情報</h2>
        
        <div className="grid gap-4 max-w-md">
          <div>
            <Label>名前</Label>
            <Input placeholder="(例):滝筑　纏" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>氏名（フリガナ）</Label>
            <Input placeholder="(例):タキツク　テン" value={furigana} onChange={(e) => setFurigana(e.target.value)} />
          </div>
          <div>
            <Label>生年月日</Label>
            <Input placeholder="(例):2026/02/21" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          
          <div>
            <Label>性別</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="w-fit mt-2">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="男" id="r1" />
                <Label htmlFor="r1">男</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="女" id="r2" />
                <Label htmlFor="r2">女</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="その他" id="r3" />
                <Label htmlFor="r3">その他</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>都道府県</Label>
            <Input placeholder="(例):東京都" value={pref} onChange={(e) => setPref(e.target.value)} />
          </div>
          <div>
            <Label>メールアドレス(任意)</Label>
            <Input placeholder="(例):takitukuten@example.jp" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="mt-8 space-y-4 max-w-md">
          <Label>受験学部</Label>
          <Combobox
            items={Object.keys(Gakka)}
            value={selected}
            onValueChange={(val) => {
              setSelected(val as keyof typeof Gakka);
              setCheckedItems([]); // 学部変更時は学科をリセット
            }}
          >
            <ComboboxInput placeholder="学部を選択..." />
            <ComboboxContent>
              <ComboboxEmpty>見つかりませんでした。</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>

          <Label className="block mt-4">受験学科</Label>
          <div className="space-y-2">
            {Gakka[selected].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => handleCheck(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Button onClick={handleGeneratePDF}>受験票を発行する</Button>
        </div>
      </div>
    </>
  )
}