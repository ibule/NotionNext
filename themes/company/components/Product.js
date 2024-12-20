import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

export const Product = () => {
  // 如果产品展示区块被禁用，则不显示
  if (!siteConfig('COMPANY_PRODUCTS_ENABLE', null, CONFIG)) {
    return null
  }

  return (
    <section className='bg-white py-8'>
      <div className='container mx-auto px-4'>
        {/* 标题部分 */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>
            {siteConfig('COMPANY_PRODUCTS_TITLE', null, CONFIG)}
          </h2>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            {siteConfig('COMPANY_PRODUCTS_DESCRIPTION', null, CONFIG)}
          </p>
        </div>

        {/* 产品列表 */}
        <div className='space-y-10'>
          {siteConfig('COMPANY_PRODUCTS', [], CONFIG).map(product => (
            <div
              key={product.id}
              className='flex flex-col md:flex-row  items-center gap-8 p-4 border rounded-2xl  bg-[#fdf8ee]'>
              <div className='md:w-1/3 p-8'>
                <div className='text-content'>
                  <h3 className='text-2xl  font-bold mb-4'>{product.title}</h3>
                  <p className='text-gray-600'>{product.description}</p>
                </div>
              </div>
              <div className='md:w-2/3 p-4'>
                <div className='w-full h-full flex items-center justify-center'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='rounded-xl shadow-xl w-full h-auto max-h-[500px] object-contain bg-white'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
