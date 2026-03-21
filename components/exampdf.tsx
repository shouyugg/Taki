// import Link from "next/link";

// type ExamPDFProps= {
//     title:string;
//     pdflink:string;
//     year:string[];
// }

// export default function ExamPDF(props:ExamPDFProps) {
//   return (
//     <>
//     <div className="border-2 border-black border-b-0 mx-60 py-2 text-left">
//         <div className="text-2xl font-medium">{props.title}</div>
//     </div>
//     <div className="border-2 border-black mx-60 py-2 text-left mb-10">
//             <div className="text-xl">
//         {
//             props.year.map((a)=> (<div key={a}>
//             <Link href={props.pdflink}>
//             {a}
//             </Link>
//             <br></br>
//             </div>
//             ))}

//     </div>
//     </div>
//     </>
//     )}

import Link from "next/link";
import { FileText, Download } from "lucide-react"; // アイコンを入れると大学サイトっぽくなります

type YearItem = {
  label: string;
  link: string;
}

type ExamPDFProps = {
  title: string;
  yearData: YearItem[]; // 型をオブジェクト配列に変更
}

export default function ExamPDF({ title, yearData }: ExamPDFProps) {
  return (
    <div className="mx-auto max-w-4xl mb-8 px-4">
      {/* 科目名ヘッダー */}
      <div className="bg-slate-900 text-white px-6 py-3 rounded-t-lg shadow-sm">
        <div className="text-xl font-bold flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-400" />
          {title}
        </div>
      </div>

      {/* 年度別リンクエリア */}
      <div className="border-x border-b border-slate-200 bg-white rounded-b-lg shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-4">
          {yearData.map((item) => (
            <Link 
              key={item.label} 
              href={item.link}
              target="_blank" // PDFを別タブで開く
              className="flex items-center justify-between p-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors group border border-transparent hover:border-blue-100"
            >
              <span className="text-base font-medium text-slate-700 group-hover:text-blue-700">
                {item.label}
              </span>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
          ))}
        </div>
        {yearData.length === 0 && (
          <p className="p-6 text-center text-slate-400 text-sm">現在、公開されている過去問はありません。</p>
        )}
      </div>
    </div>
  )
}