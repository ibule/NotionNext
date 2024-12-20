import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { SVGEmail } from './svg/SVGEmail'
import { SVGLocation } from './svg/SVGLocation'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  const url = siteConfig('COMPANY_CONTACT_MSG_EXTERNAL_URL')
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            {/* 联系方式左侧文字 */}
            <div className='w-full px-4 lg:w-7/12 xl:w-6/12  flex justify-center'>
              <div className='ud-contact-content-wrapper '>
                <div className='ud-contact-title mb-12 lg:mb-[150px]'>
                  <span className='mb-6 block text-base font-medium text-dark dark:text-white'>
                    {siteConfig('COMPANY_CONTACT_TITLE')}
                  </span>
                  <h2 className='text-[35px] font-semibold leading-[1.14] text-dark dark:text-white'>
                    {siteConfig('COMPANY_CONTACT_TEXT')}
                  </h2>
                </div>
                <div className='mb-12 flex flex-col space-y-8 lg:mb-0'>
                  <div className='flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-primary'>
                      <SVGLocation />
                    </div>
                    <div>
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig(
                          'COMPANY_CONTACT_LOCATION_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig(
                          'COMPANY_CONTACT_LOCATION_TEXT',
                          null,
                          CONFIG
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-primary'>
                      <SVGEmail />
                    </div>
                    <div>
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig(
                          'COMPANY_CONTACT_EMAIL_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('COMPANY_CONTACT_EMAIL_TEXT')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {url && url !== '' && (
              <>
                {/* 联系方式右侧留言 */}
                <div className='w-full px-4 lg:w-5/12 xl:w-6/12'>
                  <div
                    className='wow fadeInUp rounded-lg bg-white shadow-testimonial dark:bg-dark-2 dark:shadow-none px-8  sm:px-10   lg:px-10  2xl:px-[20px]'
                    data-wow-delay='.2s'>
                    <iframe
                      title='联系表单'
                      src={siteConfig(
                        'COMPANY_CONTACT_MSG_EXTERNAL_URL',
                        null,
                        CONFIG
                      )}
                      style={{
                        overflow: 'hidden',
                        border: 'none',
                        width: '100%',
                        height: '450px',
                        padding: '0'
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
