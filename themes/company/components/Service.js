/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Service = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='py-20 dark:bg-dark'>
        <div className='container px-4'>service</div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
