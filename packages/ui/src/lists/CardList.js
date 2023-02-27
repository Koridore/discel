const defaultItems = [
  {
    name: 'Leslie Alexander',
    description: 'Co-Founder / CEO',
    icon: '🚀',
    iconUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export const CardList = ({items = defaultItems}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            {item.icon ? <div>{item.icon}</div> : <img className="h-10 w-10 rounded-full" src={item.iconUrl} alt={item.name} />}
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="truncate text-sm text-gray-500">{item.description}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
