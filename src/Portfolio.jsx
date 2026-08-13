import { useState } from "react"
import { NavBar } from "./components/NavBar.jsx"
import { VIEWS } from "./views/index.js"

export function Portfolio() {
  const [currentView, setCurrentView] = useState('landing')
  const ActiveView = VIEWS[currentView]

  return (
    <div>
      <NavBar currentView={currentView} setCurrentView={setCurrentView}/>
      <ActiveView />
    </div>
  )
}