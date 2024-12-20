import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 响应式 折叠菜单
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false) // 控制菜单展开/收起状态

  let links = [
    {
      name: '首页',
      href: '/'
    }
  ]

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU', BLOG.CUSTOM_MENU)) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu) // 切换菜单状态
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => setShowMenu(false))
    return () => router.events.off('routeChangeStart', () => setShowMenu(false))
  }, [router.events])

  return (
    <div>
      {/* 移动端菜单切换按钮 */}
      <button
        type='button'
        id='navbarToggler'
        onClick={toggleMenu}
        className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
          showMenu ? 'navbarTogglerActive' : ''
        }`}>
        <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all' />
        <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all' />
        <span className='relative my-[6px] block h-[2px] w-[30px] bg-white duration-200 transition-all' />
      </button>

      <nav
        id='navbarCollapse'
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 ${
          showMenu ? '' : 'hidden'
        }`}>
        <ul className='blcok lg:flex 2xl:ml-20'>
          {links?.map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
