import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  const footerPostCount = siteConfig('COMPANY_FOOTER_POST_COUNT', 4)
  const latestPosts = props?.latestPosts
    ? props?.latestPosts.slice(0, footerPostCount)
    : []
  const COMPANY_FOOTER_LINK_GROUP = siteConfig('COMPANY_FOOTER_LINK_GROUP', [])
  console.log(COMPANY_FOOTER_LINK_GROUP, 'COMPANY_FOOTER_LINK_GROUP')

  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      <footer
        className='wow fadeInUp relative z-10 bg-[#090E34] pt-10'
        data-wow-delay='.15s'>
        <div className='container py-8'>
          <div className='flex flex-wrap  justify-around'>
            {/* 中间三列菜单组 */}
            {COMPANY_FOOTER_LINK_GROUP?.map((item, index) => {
              return (
                <div key={index} className=' px-4 '>
                  <div className='mb-10 w-full'>
                    <h4 className='mb-9 text-lg font-semibold text-white'>
                      {item.TITLE}
                    </h4>
                    <ul>
                      {item?.LINK_GROUP?.map((l, i) => {
                        return (
                          <li key={i}>
                            <a
                              href={l.URL}
                              className='mb-3 inline-block text-base text-gray-7 hover:text-primary'>
                              {l.TITLE}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
            {/* 页脚右侧最新博文 */}
            <div className=' px-4 '>
              <div className='mb-10 w-full'>
                <h4 className='mb-9 text-lg font-semibold text-white'>
                  {siteConfig('COMPANY_FOOTER_BLOG_LATEST_TITLE')}
                </h4>
                {/* 展示两条最新博客文章 */}
                <div className='flex flex-col gap-8'>
                  {latestPosts?.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item?.href}
                        className='group flex items-center gap-[22px]'>
                        {item.pageCoverThumbnail && (
                          <div className='overflow-hidden rounded w-20 h-12'>
                            <img
                              src={item.pageCoverThumbnail}
                              alt={item.title}
                            />
                          </div>
                        )}
                        <span className='line-clamp-2 max-w-[180px] text-base text-gray-7 group-hover:text-white'>
                          {item.title}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息相关 */}

        <div className='border-t border-[#8890A4] border-opacity-40 py-4'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap justify-center'>
              <div className='my-1'>
                <p className='text-sm text-gray-500 flex justify-center gap-2'>
                  <span>Copyright © 2024 浩铭科技</span>
                  <a href='https://beian.miit.gov.cn/' target='blank'>
                    粤ICP备2023084687号
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer 背景 */}
        <div>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img src='/images/company/footer/shape-1.svg' alt='' />
          </span>

          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src='/images/company/footer/shape-3.svg' alt='' />
          </span>

          <span className='absolute right-0 top-0 z-[-1]'>
            <SVGFooterCircleBG />
          </span>
        </div>
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
