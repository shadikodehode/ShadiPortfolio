import { ViewProvider, useView } from "./context/ViewContext.jsx"
import { VIEWS } from "./views/index.js"
import { Card } from "./components/Card.jsx"
import { CardLayout } from "./components/CardLayout.jsx"

function PortfolioContent() {
  const { currentView } = useView()
  const ActiveView = VIEWS[currentView]

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card>
        <CardLayout ActiveView={ActiveView} />
      </Card>
    </div>
  )
}

export function Portfolio() {
  return(
    <ViewProvider>
      <PortfolioContent />
    </ViewProvider>
  )
}