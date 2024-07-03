import React from 'react'
import ServiceCard from './serviceCard'

export type DataCard = {
    id: number|string;
    url: string;
    title: string;
    text: string;
    color: string;
}
const dataCard: DataCard[] = [
    {id: 1, color: 'primary03', url: '/background/gray.png', title: 'Finance & Restructuring', 
    text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',},
    {id: 2, color: 'primary03', url: '/background/yellow.png', title: 'Our Approach', 
    text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',},
    {id: 3, color: 'primary05', url: '/background/download.png', title: 'Consultalk Result', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',}
];


export default function ServiceCards() {

  return (
    <div className='flex justify-center mt-[-60px]'>
        <div className='w-[1000px] flex justify-between'>
          {dataCard.map((el) => <ServiceCard color={el.color} url={el.url} text={el.text} title={el.title} key={el.id} />)}
        </div>
    </div>
  )
}
