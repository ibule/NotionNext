/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 服务类型展示
 * @returns
 */
export const Service = () => {
  if (!siteConfig('COMPANY_SERVICES_ENABLE', null, CONFIG)) {
    return null
  }

  return (
    <section className='py-8 dark:bg-dark'>
      <div className='container px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
            我们的服务
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {siteConfig('COMPANY_SERVICES_ENABLE', [], CONFIG).map(
            (service, index) => (
              <div
                key={service.id}
                className='p-8 rounded-lg transition-all duration-300 hover:shadow-lg'
                style={{
                  backgroundColor: service.bgColor || 'rgba(240, 249, 255, 0.8)'
                }}>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                  {service.description}
                </p>
                <div className='relative  w-full rounded-lg overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='object-cover w-full aspect-[16/11] rounded-lg border-8 border-white bg-[#7b916dbf]'
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
