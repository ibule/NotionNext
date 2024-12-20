import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

export const ChoseUs = () => {
  // 如果选择我们展示区块被禁用，则不显示
  if (!siteConfig('COMPANY_CHOSE_US', null, CONFIG)) {
    return null
  }

  return (
    <section className=' py-8 bg-[#f4fafe]'>
      {/* 标题 */}
      <div className='container mx-auto px-4'>
        <div className='text-center max-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
            选择我们
          </h2>
        </div>
        {/* 列表 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8'>
          {siteConfig('COMPANY_CHOSE_US', [], CONFIG).map(item => (
            <div key={item.id}>
              <div className='flex items-center justify-center  gap-4 py-4'>
                <img
                  src={item.icon}
                  alt={item.title}
                  className=' bg-white w-8'
                />
                <h3 className='text-2xl  font-bold '>{item.title}</h3>
              </div>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
