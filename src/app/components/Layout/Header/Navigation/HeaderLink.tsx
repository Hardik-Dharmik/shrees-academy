'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const path = usePathname()

  useEffect(() => {
    // Check if the link is active
    if (item.href.startsWith('/#')) {
      // For hash links, check if we're on home page
      setIsActive(path === '/')
    } else {
      // For regular page links, check exact match or if path starts with the href
      setIsActive(path === item.href || path.startsWith(item.href + '/'))
    }
  }, [path, item.href])

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        className={`relative text-base flex items-center gap-1.5 font-semibold capitalize transition-all duration-300 group ${
          isActive 
            ? 'text-primary' 
            : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
        }`}>
        <span className='relative z-10'>{item.label}</span>
        {isActive && (
          <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full'></span>
        )}
        {!isActive && (
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300'></span>
        )}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            viewBox='0 0 24 24'
            className={`transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-2 w-64 bg-white dark:bg-gray-800 dark:text-white shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-sm`}
          data-aos='fade-up'
          data-aos-duration='300'>
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-5 py-2.5 transition-all duration-200 ${
                path === subItem.href
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary'
              }`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
