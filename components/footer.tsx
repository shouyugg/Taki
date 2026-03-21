import Image from "next/image"

export default function Footer() {
  return (
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">滝筑大学</h4>
            <p className="text-blue-200 text-sm">
              〒160-0099 <br />
              東京都新宿区西新宿8-21-5<br />
              TEL: 03-4920-5381
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-blue-100">
            <a href="#" className="hover:text-white">お問い合わせ</a>
            <a href="#" className="hover:text-white">アクセス</a>
            <a href="#" className="hover:text-white">サイトポリシー</a>
          </div>
          <div className="text-right">
            <p className="text-xs text-blue-300">© 2026 University of Excellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

