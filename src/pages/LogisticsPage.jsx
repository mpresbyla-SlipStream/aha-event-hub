
import { useState } from 'react'
import { MapPin, Clock, Users, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LogisticsPage = () => {
  const [showAttendees, setShowAttendees] = useState(false)



  const handleGetDirections = (address) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapUrl, "_blank")
  }

  const handleCallVenue = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`)
  }

  const attendees = [
    "Jeremy Smart", "Chuck Elroy", "Bill Lester", "Helen Parker",
    "Doug Fissel", "Naina Chokar", "Adam Soares", "Kelley Gorbe",
    "Josh McNeil", "Michelle Bretschneider", "Timothy Llanos",
    "Jacqueline Shehata", "Nancy Ortiz", "Andy Hsieh", "Doug Wicks",
    "Jen Kammerer", "Jeff New"
  ]
  const logisticsItems = [
    {
      id: 1,
      venueName: "New Orleans Convention Center",
      address: "900 Convention Center Blvd, New Orleans, LA",
      time: "Time: local in location",
      phoneNumber: "+1-555-123-4567",
      boothNumber: "5325",
      privateExhibitHallMeetingSpaceNumber: "B1830"
    }
  ]

  return (
    <div className="p-4 space-y-4">
      {logisticsItems.map(item => (
        <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="font-semibold text-gray-900 mb-1">{item.venueName}</h3>
              </div>
              

              
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Address:</strong> {item.address}</p>
                <p><strong>Phone:</strong> {item.phoneNumber}</p>
                {item.boothNumber && <p><strong>Booth Number:</strong> {item.boothNumber}</p>}
                {item.privateExhibitHallMeetingSpaceNumber && <p><strong>Private Exhibit Hall Meeting Space Number:</strong> {item.privateExhibitHallMeetingSpaceNumber}</p>}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={() => handleGetDirections(item.address)}>
              Get Directions
            </Button>
            <Button variant="outline" size="sm" className="flex-1" onClick={() => handleCallVenue(item.phoneNumber)}>
              Call Venue
            </Button>
          </div>
        </div>
      ))}
      
      {/* Attendees Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => setShowAttendees(!showAttendees)}>
          <h3 className="font-semibold text-gray-900">Attendees</h3>
          <span className="text-sm text-gray-500">{showAttendees ? '<' : '>'}</span>
        </div>
        {showAttendees && (
          <div className="mt-3">
            <ul className="list-disc list-inside text-sm text-gray-700">
              {attendees.map((attendee, index) => (
                <li key={index}>{attendee}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default LogisticsPage
