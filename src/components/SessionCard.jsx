import { Button } from '@/components/ui/button'

import { Calendar, Clock, User } from 'lucide-react'

const SessionCard = ({ title, date, time, speaker, employee, session }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      
      <div className="space-y-1 mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <User className="w-4 h-4 mr-2" />
          <span>Speaker: {speaker}</span>
        </div>
        {employee && (
          <div className="flex items-center text-sm text-gray-600">
            <User className="w-4 h-4 mr-2" />
            <span>Employee: {employee}</span>
          </div>
        )}
      </div>
      
      <div title="Add to Calendar" className="addeventatc" data-client="c8f5ab0d5e5445fba289fc183a813546">
        Add to Calendar
        <span className="start">{new Date(session.startDateTime).toLocaleString("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: true })}</span>
        <span className="end">{new Date(session.endDateTime).toLocaleString("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: true })}</span>
        <span className="timezone">{session.timezone || "America/Chicago"}</span>
        <span className="title">AHA 2025: {title}</span>
        <span className="description">Speaker: {speaker}\nEmployee: {employee}</span>
        <span className="location">{session.location}</span>
      </div>
    </div>
  )
}

export default SessionCard

