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
          className='flex items-center justify-between w-full py-3 px-4 rounded-xl text-gray-800 dark:text-gray-200 font-semibold focus:outline-none text-left hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 group'>
          <span>{item.label}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className={`transition-transform duration-300 text-gray-400 group-hover:text-black dark:group-hover:text-white ${submenuOpen ? 'rotate-180' : ''}`}>
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
          className='flex items-center justify-between w-full py-3 px-4 rounded-xl text-gray-800 dark:text-gray-200 font-semibold focus:outline-none hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200'>
          <span>{item.label}</span>
        </Link>
      )}
      {submenuOpen && item.submenu && (
        <div className='mt-2 ml-4 pl-4 border-l-2 border-black/15 dark:border-white/20 bg-[linear-gradient(90deg,rgba(0,0,0,0.06),transparent_70%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_70%)] rounded-r-xl overflow-hidden'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={handleLinkClick}
              className='block py-2.5 px-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 rounded-lg font-medium'>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink
