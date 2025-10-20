
import React from "react"
export default function Navbar(){
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">HandyHand</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-primary">خانه</a>
          <a href="#" className="hover:text-primary">خدمت‌ها</a>
          <a href="#" className="hover:text-primary">چگونه کار می‌کند؟</a>
          <button className="px-3 py-1.5 rounded-xl bg-primary text-white hover:opacity-90">ثبت آگهی</button>
        </nav>
      </div>
    </header>
  )
}
