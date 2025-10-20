
import React from "react"
export default function HelperCard({ name, rating, jobs, skills = [] }){
  return (
    <div className="bg-white rounded-2xl shadow p-4 border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">★ {rating}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{jobs} کار انجام‌شده</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((s,i) => <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{s}</span>)}
      </div>
      <div className="mt-4 text-left">
        <button className="px-3 py-1.5 rounded-xl bg-primary text-white">ارتباط</button>
      </div>
    </div>
  )
}
