'use client'

import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        const element = document.querySelector(href!)
        
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}

export default SmoothScroll
