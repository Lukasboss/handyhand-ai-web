
import React from "react"
export default function TaskCard({ title, price, location }){
  const fmt = (n)=> new Intl.NumberFormat("fa-IR").format(n)
  return (
    <div className="bg-white rounded-2xl shadow p-4 border">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{location}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-primary font-bold">{fmt(price)} تومان</span>
        <button className="px-3 py-1.5 rounded-xl border hover:bg-gray-50">جزئیات</button>
      </div>
    </div>
  )
}
