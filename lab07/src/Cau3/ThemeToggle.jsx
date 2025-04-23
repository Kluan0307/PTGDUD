import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../slice/themeSlice'

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const isDark = theme === 'dark'

  return (
    <div className={`transition-all duration-500 ease-in-out ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex items-center justify-center`}>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md transition-colors duration-500">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isDark ? 'Chế độ Tối' : 'Chế độ Sáng'}
        </h1>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          onClick={() => dispatch(toggleTheme())}
        >
          Chuyển Theme ({theme})
        </button>
      </div>
    </div>
  )
}
