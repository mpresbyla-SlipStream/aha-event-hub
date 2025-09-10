import { useState } from 'react'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'
import HomePage from './pages/HomePage'
import SessionsPage from './pages/SessionsPage'
import MeetingsPage from './pages/MeetingsPage'
import LogisticsPage from './pages/LogisticsPage'
import ResourcesPage from './pages/ResourcesPage'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const getPageTitle = () => {
    switch (activeTab) {
      case 'home': return 'AHA 2025 Event Hub'
      case 'sessions': return 'Sessions'
      case 'meetings': return 'Meetings'
      case 'logistics': return 'Logistics'
      case 'resources': return 'Resources'
      default: return 'AHA 2025 Event Hub'
    }
  }

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home': return <HomePage />
      case 'sessions': return <SessionsPage />
      case 'meetings': return <MeetingsPage />
      case 'logistics': return <LogisticsPage />
      case 'resources': return <ResourcesPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      <Header 
        title={getPageTitle()}
        showBackButton={activeTab !== 'home'}
        onBack={() => setActiveTab('home')}
      />
      
      <main className="flex-1 overflow-y-auto pb-16">
        {renderCurrentPage()}
      </main>
      
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

export default App
