
import React from "react"
export default function Footer(){
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} HandyHand — نمونه برای شروع.</p>
      </div>
    </footer>
  )
}
