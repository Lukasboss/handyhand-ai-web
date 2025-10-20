
import React from "react"
import Navbar from "../shared/Navbar.jsx"
import HomeHero from "../sections/HomeHero.jsx"
import QuickSearch from "../sections/QuickSearch.jsx"
import FeaturedTasks from "../sections/FeaturedTasks.jsx"
import FeaturedHelpers from "../sections/FeaturedHelpers.jsx"
import Footer from "../shared/Footer.jsx"

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <QuickSearch />
        <FeaturedTasks />
        <FeaturedHelpers />
      </main>
      <Footer />
    </div>
  )
}
