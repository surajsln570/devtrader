export const dynamic = "force-dynamic";
import Container from "@/components/Container";
import OurProjects from "@/components/home/ourproject/OurProjects";
import OurServieses from "@/components/home/OurServieses";
import Slider from "@/components/home/Slider.jsx";
import Testimunial from "@/components/home/testimonial/Testimunial";
import { getAllProject } from "@/fetch/project.api";
import Link from "next/link";

export default async function Home() {
  const linkName = [
    'Architectural',
    'Civil construction',
    'Interior',
    'Renovation',
    'Structural assistance',
    '3D Modelling',
    'Cost estimation',
    'Planning',
    'Vaastu consultation'
  ]

  const projects = await getAllProject();
  console.log(projects)

  return (
    <Container className={'w-full flex-col '}>
      {/* slider + sidebar */}
      <Container className={'flex-col relative md:h-[75vh] w-full'}>
        <Slider projects={projects}/>
        <Container className={`hidden md:flex flex-col absolute right-10 top-1/2 -translate-y-1/2
            w-[260px] rounded-2xl bg-black/70  border border-white/10 shadow-xl
            p-4 `}>
          {linkName.map((name) => (
            <Link
              key={name}
              href="/services"
              className='
                  py-1-5 px-3 rounded-lg
                  text-gray-400 text-lg
                  hover:text-white hover:bg-white/10
                  transition-all duration-300
                '
            >
              {name}
            </Link>
          ))}
        </Container>
      </Container>
      {/* mobile services */}
      <Container className='md:hidden flex-col w-full gap-2 px-4'>
        {linkName.map((name) => (
          <Link
            key={name}
            href='/services'
            className='py-1.5 px-2 border-b w-full border-gray-300 text-xl text-text-mute hover:underline 
            transition-all duration-300  hover:text-text-link'
          >
            {name}
          </Link>
        ))}
      </Container>
      <OurProjects projects={projects} />
      <OurServieses heading={'Our Services'} para={'To improve clients experiences through constant innovation and understanding, with a focus on quality, time and cost so that when it comes to TS Nirman Group, clients come to expect nothing but the best from us.'} />
      <Testimunial />
      <Container className='flex-wrap gap-10 justify-center m-16'>
        <Container className='
            flex-col items-center
            bg-black/70 backdrop-blur-md
            border border-white/10
            rounded-2xl p-8 shadow-xl
          '>
          <h1 className='text-4xl font-bold text-white'>
            800,000+
          </h1>
          <p className='text-yellow-400 mt-2'>
            Total Square Feet Covered
          </p>
        </Container>
      </Container>
    </Container>
  );
}
