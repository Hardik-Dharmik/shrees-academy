import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'

interface MobileHeaderLinkProps {
  item: HeaderItem
  onLinkClick: () => void
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmenuOpen(!submenuOpen)
  }

  const handleLinkClick = () => {
    onLinkClick()
  }

  return (
    <div className='relative w-full'>
      {item.submenu ? (
        <button
          onClick={handleToggle}
          className='flex items-center justify-between w-full py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 font-semibold focus:outline-none text-left hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group'>
          <span>{item.label}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className={`transition-transform duration-300 text-gray-400 group-hover:text-primary ${submenuOpen ? 'rotate-180' : ''}`}>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m7 10l5 5l5-5'
            />
          </svg>
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={handleLinkClick}
          className='flex items-center justify-between w-full py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 font-semibold focus:outline-none hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200'>
          <span>{item.label}</span>
        </Link>
      )}
      {submenuOpen && item.submenu && (
        <div className='mt-1 ml-4 pl-4 border-l-2 border-primary/30 dark:border-primary/50 bg-gradient-to-r from-primary/5 dark:from-primary/10 to-transparent rounded-r-lg overflow-hidden'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={handleLinkClick}
              className='block py-2.5 px-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 rounded-lg font-medium'>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink
