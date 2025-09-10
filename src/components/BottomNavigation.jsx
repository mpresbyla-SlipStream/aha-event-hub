import { Home, Calendar, Users, MapPin, FileText } from 'lucide-react'

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'sessions', icon: Calendar, label: 'Sessions' },
    { id: 'meetings', icon: Users, label: 'Meetings' },
    { id: 'logistics', icon: MapPin, label: 'Logistics' },
    { id: 'resources', icon: FileText, label: 'Resources' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 z-[999]">
      <div className="flex justify-around">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === id 
                ? 'text-primary bg-primary/10' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavigation

