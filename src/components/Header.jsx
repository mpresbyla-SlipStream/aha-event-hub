import { ArrowLeft } from 'lucide-react'

const Header = ({ title, showBackButton = false, onBack }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
      {showBackButton && (
        <button 
          onClick={onBack}
          className="mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}
      <h1 className="text-lg font-semibold text-gray-900 flex-1 text-center">
        {title}
      </h1>
      {showBackButton && <div className="w-7" />} {/* Spacer for centering */}
    </header>
  )
}

export default Header

