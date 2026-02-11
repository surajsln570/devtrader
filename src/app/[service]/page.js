import OurProjImage from '@/components/home/ourproject/comp/OurProjImage'
import PageHeading from '@/components/PageHeading'
import { getAllProject } from '@/fetch/project.api';
import Container from "@/components/Container";

export default async function Service({ params }) {
  const { service } = await params// 👈 important
  const projects = await getAllProject();

  const text = decodeURIComponent(service)

  const oneTypeProj = projects.filter(
    p => p.projectType === text
  )

  return (
    <div className=''>
      <PageHeading>{text}</PageHeading>

      {oneTypeProj.length > 0 ?
        <OurProjImage oneTypeProj={oneTypeProj} />
      :
        <Container className="text-2xl min-h-[30vh] text-red-700 items-center justify-center"> No projects exist</Container>
      }
        
    </div>
  )
}
