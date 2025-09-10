import { FileText, Download, ChevronRight } from 'lucide-react'

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "Docs13.pdf",
      type: "PDF"
    },
    {
      id: 2,
      title: "Document.pdf",
      type: "PDF"
    },
    {
      id: 3,
      title: "Docs.txt",
      type: "TXT"
    },
    {
      id: 4,
      title: "Document.pdf",
      type: "PDF"
    }
  ]

  const getFileIcon = (type) => {
    return <FileText className="w-5 h-5 text-gray-500" />
  }

  return (
    <div className="p-4">
      <div className="space-y-2">
        {resources.map(resource => (
          <div 
            key={resource.id} 
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getFileIcon(resource.type)}
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <p className="text-sm text-gray-500">{resource.type} Document</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResourcesPage

