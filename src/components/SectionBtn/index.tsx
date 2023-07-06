'use client';

import { ReactNode } from "react";
import Image from "next/image";

export interface SectBtnProp {
  icon: string;
  link?: string;
  bgColor?: string;
  children?: ReactNode | ReactNode[]
}

export const SectionBtn: React.FC<SectBtnProp> = ({
  icon,
  link,
  bgColor,
  children
}) => {
  return (
    <div className={`flex w-[200px] h-[80px] items-center p-[12px] bg-[${bgColor}]`}>
      <div className="bg-white rounded mr-[12px]">
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      {children}
    </div>
  )
}