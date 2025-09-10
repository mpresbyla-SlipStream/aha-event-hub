import { MapPin, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MeetingsPage = () => {
  const meetings = [
    {
      id: 1,
      venue: "Venue",
      details: "Details",
      location: "Location",
      time: "Time: location",
      category: "Logistics"
    },
    {
      id: 2,
      venue: "Hotel",
      details: "Address",
      location: "Transportation",
      time: "Details",
      category: "Logistics"
    }
  ]

  return (
    <div className="p-4 space-y-4">
      {meetings.map(meeting => (
        <div key={meeting.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{meeting.venue}</h3>
              <p className="text-sm text-gray-600 mb-2">{meeting.details}</p>
              
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{meeting.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{meeting.time}</span>
                </div>
              </div>
            </div>
            
            <MapPin className="w-6 h-6 text-gray-400 ml-3" />
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              Details
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Check In
            </Button>
          </div>
        </div>
      ))}
      
      {/* Attendees Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Attendees</h3>
            <span className="text-sm text-gray-500">&gt;</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>View all attendees</span>
        </div>
      </div>
    </div>
  )
}

export default MeetingsPage

