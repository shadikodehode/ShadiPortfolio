import { createContext, useContext, useState } from "react"

const ViewContext = createContext(null)

export function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState('landing')
  const isLanding = currentView === 'landing'

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView, isLanding }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  const context = useContext(ViewContext)
  if (!context) throw new Error('useView must be used within a ViewProvider')
  return context
}