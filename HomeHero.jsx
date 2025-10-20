
import React from "react"
export default function HomeHero(){
  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            پیدا کردن کمک محلی، سریع و مطمئن
          </h1>
          <p className="mt-3 text-gray-600">
            آگهی بسازید، کمک‌کاران نزدیک را ببینید، قیمت بگیرید و کار را جلو ببرید.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-primary text-white">شروع</button>
            <button className="px-4 py-2 rounded-xl border">مشاهده کمک‌کاران</button>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <img src="https://images.unsplash.com/photo-1581091870621-1b1a5f3f2222?q=80&w=1200&auto=format&fit=crop" alt="handy" className="rounded-xl w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
