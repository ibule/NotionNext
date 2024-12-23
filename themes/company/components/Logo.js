/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * 站点图标
 * @returns
 */
export const Logo = props => {
  const { white, NOTION_CONFIG } = props
  const router = useRouter()
  const logoWhite = siteConfig('COMPANY_LOGO_WHITE')
  const logoNormal = siteConfig('COMPANY_LOGO')
  const { isDarkMode } = useGlobal()
  const [logo, setLogo] = useState(logoWhite)
  const [logoTextColor, setLogoTextColor] = useState('text-white')

  useEffect(() => {
    // 滚动监听
    const throttleMs = 200
    const navBarScrollListener = throttle(() => {
      const scrollY = window.scrollY
      // 何时显示浅色或白底的logo
      const homePageNavBar = router.route === '/' && scrollY < 10 // 在首页并且视窗在页面顶部

      if (white || isDarkMode || homePageNavBar) {
        setLogo(logoWhite)
        setLogoTextColor('text-white')
      } else {
        setLogo(logoNormal)
        setLogoTextColor('text-dark')
      }
    }, throttleMs)

    navBarScrollListener()
    window.addEventListener('scroll', navBarScrollListener)
    return () => {
      window.removeEventListener('scroll', navBarScrollListener)
    }
  }, [isDarkMode, router])

  return (
    <div className='w-60 max-w-full px-4'>
      <div className='navbar-logo flex items-center w-full py-5 cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {logo && (
          <LazyImage
            priority
            onClick={() => router.push('/')}
            onKeyDown={e => e.key === 'Enter' && router.push('/')}
            src={logo}
            alt='logo'
            className='header-logo mr-1 h-8'
            tabIndex={0}
          />
        )}
        {/* logo文字 */}
        <span
          onClick={() => router.push('/')}
          onKeyDown={e => e.key === 'Enter' && router.push('/')}
          className={`py-1.5 whitespace-nowrap text-2xl font-semibold cursor-pointer ${logoTextColor} dark:text-white`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
