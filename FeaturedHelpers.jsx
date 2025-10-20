
import React from "react"
import HelperCard from "../ui/HelperCard.jsx"

const helpers = [
  { id: 1, name: "مهدی س.", rating: 4.9, jobs: 120, skills: ["لوله‌کشی","سرویس شیرآلات"] },
  { id: 2, name: "زهرا الف.", rating: 4.8, jobs: 96, skills: ["نقاشی ساختمان","بتونه‌کاری"] },
  { id: 3, name: "علی ک.", rating: 4.7, jobs: 87, skills: ["اسباب‌کشی","بسته‌بندی"] }
]

export default function FeaturedHelpers(){
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">کمک‌کاران برتر</h2>
        <a href="#" className="text-primary text-sm">مشاهده همه</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {helpers.map(h => <HelperCard key={h.id} {...h} />)}
      </div>
    </section>
  )
}
