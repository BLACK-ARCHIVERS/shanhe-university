'use client';
import Image from "next/image";

interface OptItem {
  title: string;
  children?: OptItem[];
  link?: string;
}

export const NavBar: React.FC = () => {
  const items: OptItem[] = [
    {
      title: '概况',
      link: ''
    },
    {
      title: '院系部门',
      link: ''
    },
    {
      title: '教育教学',
      children: []
    },
    {
      title: '科学研究',
      children: []
    },
    {
      title: '招生就业',
      children: []
    },
    {
      title: '合作交流',
      children: []
    },
    {
      title: '网络教学平台',
      link: ''
    },
  ]

  return (
    <div className="w-full fixed top-0 left-0 h-[70px] shadow-lg pr-[20px] pl-[20px] flex items-center justify-between">
      <div className="flex items-center">
        <Image width={64} height={64} src="/assets/images/logo.jpeg" alt=''></Image>
        <div className="text-black ml-2 font-mono font-bold">
          <div>山河大学</div>
          <div>ShanHe University</div>
        </div>
      </div>
      <div className="mr-[-8px]">
        {
          items.map((item, index) => {
            return (
              <span className="mr-[8px] ml-[8px]" key={index}>{item.title}</span>
            )
          })
        }
      </div>
    </div>
  )
}