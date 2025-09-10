import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Announcements Section */}
      <section className="bg-gray-50 rounded-lg p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Announcements</h2>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">Welcome to AHA 2025! Check your schedule and don't miss any important sessions.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">Networking lunch starts at 12:00 PM in the main hall.</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-20 flex flex-col items-center justify-center space-y-2 border-2 hover:border-primary hover:bg-primary/5"
          >
            <span className="text-2xl">📅</span>
            <span className="text-sm font-medium">Sessions</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col items-center justify-center space-y-2 border-2 hover:border-primary hover:bg-primary/5"
          >
            <span className="text-2xl">🏢</span>
            <span className="text-sm font-medium">Booth Schedule</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col items-center justify-center space-y-2 border-2 hover:border-primary hover:bg-primary/5"
          >
            <span className="text-2xl">👥</span>
            <span className="text-sm font-medium">Meetings</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col items-center justify-center space-y-2 border-2 hover:border-primary hover:bg-primary/5"
          >
            <span className="text-2xl">🗺️</span>
            <span className="text-sm font-medium">Logistics</span>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

