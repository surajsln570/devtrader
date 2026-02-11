import Container from '@/components/Container'
import Image from 'next/image'
import { services } from '../image'

export default function OurServieses({heading, para}) {
    
    return (
        <Container className={'flex-col bg-background2 w-full overflow-hidden mt-5 gap-3'}>
            <h1 className='text-4xl font-semibold'>{heading}</h1>
            <p className='text-lg text-text-mute text-center px-5'>{para}</p>
           <div className='grid grid-cols-1 md:grid-cols-3 py-5 md:px-[100px] gap-6'>
             {services && services.map((service,i) => {
                return <div key={i} className='relative '>
                    <Image className='object-cover w-[90vw] md:w-[80vw]  h-[200px]' src={service.img} alt="" loading="eager" />
                    <h1 className='absolute w-[190px] md:w-[300px] hover:border-2 hover:border-yellow-400  top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center md:px-5 py-2 bg-black opacity-70 text-white text-2xl'>{service.name}</h1>
                </div>
            })}
           </div>
        </Container>
    )
}
