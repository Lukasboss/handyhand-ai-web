
import React from "react"
import TaskCard from "../ui/TaskCard.jsx"

const sample = [
  { id: 1, title: "تعمیر درب کابینت", price: 900000, location: "تهران - سعادت‌آباد" },
  { id: 2, title: "رنگ‌آمیزی اتاق", price: 2500000, location: "اصفهان - مرداویج" },
  { id: 3, title: "اسباب‌کشی سبک", price: 1800000, location: "شیراز - معالی‌آباد" }
]

export default function FeaturedTasks(){
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">آگهی‌های پیشنهادی</h2>
        <a href="#" className="text-primary text-sm">همه</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {sample.map(t => <TaskCard key={t.id} {...t} />)}
      </div>
    </section>
  )
}
