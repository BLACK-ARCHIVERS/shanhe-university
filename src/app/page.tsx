import Image from 'next/image';
import { SectBtnProp, SectionBtn } from '@/components/SectionBtn';

export default function Home() {

  const sections: SectBtnProp[] = [
    {
      icon: '/assets/svg/degree.svg',
      children: (
        <div className='font-[12px]'>
          <div>
            学生人数
          </div>
          <div>100</div>
        </div>
      ),
      bgColor: '#fa8c16'
    },
    {
      icon: '/assets/svg/employment.svg',
      children: (
        <div className='font-[12px]'>
          <div>
            就业率
          </div>
          <div>100%</div>
        </div>
      ),
      bgColor: '#597ef7'
    },
    {
      icon: '/assets/svg/teacher.svg',
      children: (
        <div className='font-[12px]'>
          <div>
            师资力量
          </div>
          <div>100</div>
        </div>
      ),
      bgColor: '#13c2c2'
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[70px]">
      <div className='w-full'>
        <div className='relative'>
          <Image src="/assets/images/home-bg.jpg" alt="" width={800} height={800} layout='responsive'></Image>
          <div className='absolute left-[50px] top-[35%] text-white text-[48px] font-sans'>
            <div>欢迎来到山河大学</div>
            <div className='font-[serif] font-bold'>Welcome to ShanHe University</div>
          </div>
        </div>
        <div className='flex justify-around'>
          {
            sections.map((sect, index) => {
              return (
                <SectionBtn
                  key={index}
                  {...sect}
                />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
