
import React from "react"
export default function QuickSearch(){
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8">
      <div className="bg-white p-4 rounded-2xl shadow flex flex-col md:flex-row gap-3">
        <input placeholder="مثلاً: تعمیر شیر آب" className="flex-1 px-3 py-2 rounded-xl border outline-none" />
        <input placeholder="محله / شهر" className="flex-1 px-3 py-2 rounded-xl border outline-none" />
        <button className="px-4 py-2 rounded-xl bg-primary text-white">جستجو</button>
      </div>
    </section>
  )
}
