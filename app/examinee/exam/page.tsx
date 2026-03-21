//"use client"

//import ExamPDF from "@/components/exampdf"
//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
//export default function Home() {
//    const yearlist=["令和六年","令和五年","令和四年","令和三年","令和二年"]
 //   const titlelist=["共通問題 数学","共通問題 英語","共通問題（選択） 化学","共通問題（選択） 物理","医学部専用問題 数学","医学部専用問題 英語","生物(医学部のみ受験)"]
//  return (
//    <>
  //  <div>
    //    {
      //    titlelist.map((title => (
        //    <ExamPDF 
          //  key ={title}
            //year = {yearlist}
            //pdflink="https://google.com"
            //title={title}
            ///>
          //)))}
    //</div>
    //</>
  //)
//}

"use client"

import ExamPDF from "@/components/exampdf"

export default function Home() {
  // 年度とURLをセットにしたオブジェクトの配列に変更
  const examData = [
    {
      title: "共通問題 数学",
      years: [
        { label: "令和六年", link: "/pdf/math_r6.pdf" },
        { label: "令和五年", link: "/pdf/math_r5.pdf" },
        { label: "令和四年", link: "/pdf/math_r4.pdf" },
        { label: "令和三年", link: "/pdf/math_r3.pdf" },
        { label: "令和二年", link: "/pdf/math_r2.pdf" },
      ]
    },
    {
      title: "共通問題 英語",
      years: [
        { label: "令和六年", link: "/pdf/eng_r6.pdf" },
        { label: "令和五年", link: "/pdf/eng_r5.pdf" },
        { label: "令和四年", link: "/pdf/eng_r4.pdf" },
        { label: "令和三年", link: "/pdf/eng_r3.pdf" },
        { label: "令和二年", link: "/pdf/eng_r2.pdf" },
      ]
    },
        {
      title: "共通問題（選択） 化学",
      years: [
        { label: "令和六年", link: "/pdf/chem_r6.pdf" },
        { label: "令和五年", link: "/pdf/chem_r5.pdf" },
        { label: "令和四年", link: "/pdf/chem_r4.pdf" },
        { label: "令和三年", link: "/pdf/chem_r3.pdf" },
        { label: "令和二年", link: "/pdf/chem_r2.pdf" },
      ]
    },{
      title: "共通問題（選択） 物理",
      years: [
        { label: "令和六年", link: "/pdf/phys_r6.pdf" },
        { label: "令和五年", link: "/pdf/phys_r5.pdf" },
        { label: "令和四年", link: "/pdf/phys_r4.pdf" },
        { label: "令和三年", link: "/pdf/phys_r3.pdf" },
        { label: "令和二年", link: "/pdf/phys_r2.pdf" },
      ]
    },{
      title: "医学部専用問題　数学",
      years: [
        { label: "令和六年", link: "/pdf/math_r6_medi.pdf" },
        { label: "令和五年", link: "/pdf/math_r5_medi.pdf" },
        { label: "令和四年", link: "/pdf/math_r4_medi.pdf" },
        { label: "令和三年", link: "/pdf/math_r3_medi.pdf" },
        { label: "令和二年", link: "/pdf/math_r2_medi.pdf" },
      ]
    },{
      title: "医学部専用問題　英語",
      years: [
        { label: "令和六年", link: "/pdf/eng_r6_medi.pdf" },
        { label: "令和五年", link: "/pdf/eng_r5_medi.pdf" },
        { label: "令和四年", link: "/pdf/eng_r4_medi.pdf" },
        { label: "令和三年", link: "/pdf/eng_r3_medi.pdf" },
        { label: "令和二年", link: "/pdf/eng_r2_medi.pdf" },
      ]
    },{
      title: "生物(医学部のみ受験)",
      years: [
        { label: "令和六年", link: "/pdf/bio_r6.pdf" },
        { label: "令和五年", link: "/pdf/bio_r5.pdf" },
        { label: "令和四年", link: "/pdf/bio_r4.pdf" },
        { label: "令和三年", link: "/pdf/bio_r3.pdf" },
        { label: "令和二年", link: "/pdf/bio_r2.pdf" },
      ]
    },
  ];

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">過去問題一覧</h1>
      {examData.map((exam) => (
        <ExamPDF 
          key={exam.title}
          title={exam.title}
          yearData={exam.years} // オブジェクト配列を渡す
        />
      ))}
    </div>
  )
}