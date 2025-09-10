import { useState, useEffect } from 'react'
import { getCalendarOptions } from '../utils/nativeCalendar';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const CalendarOptions = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [calendarOptions, setCalendarOptions] = useState([])

  useEffect(() => {
    setCalendarOptions(getCalendarOptions())
  }, [])

  const handleSelect = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Add to Calendar
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {calendarOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.icon} {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default CalendarOptions

