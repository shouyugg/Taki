"use client"

//Tempでheader,footerの形式を決定、Tempの内側に入れた要素が中身なことをtemplate.tsxで定義
export default function Home() {
  return (
    <>
        <div className="flex justify-around">
            <div className="bg-gray-800">
                <h3 className="text-3xl font-medium">大学概要</h3>
                <ul>
                    <li>
                        <a href="https://google.com">滝筑大学憲章</a>
                    </li>
                    <li>
                        <a href="https://google.com">い</a>
                    </li>
                    <li>
                        <a href="https://google.com">う</a>
                    </li>
                </ul>
            </div> 
            <div className="bg-gray-200">
                <h3 className="text-3xl font-medium">大学概要</h3>
                <ul>
                    <li>
                        <a href="https://google.com">あ</a>
                    </li>
                    <li>
                        <a href="https://google.com">い</a>
                    </li>
                    <li>
                        <a href="https://google.com">う</a>
                    </li>
                </ul>
            </div> 
        </div>
    </>
  )
}