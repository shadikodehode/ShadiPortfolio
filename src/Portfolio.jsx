import { useState } from "react"
import { NavBar } from "./components/NavBar.jsx"
import { VIEWS } from "./views/index.js"
import { Card } from "./components/Card.jsx"
import { CardLayout } from "./components/CardLayout.jsx"

export function Portfolio() {
  const [currentView, setCurrentView] = useState('landing')
  const ActiveView = VIEWS[currentView]

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card>
        <CardLayout 
          currentView={currentView}
          setCurrentView={setCurrentView}
          ActiveView={ActiveView}
        />
      </Card>
    </div>
  )
}