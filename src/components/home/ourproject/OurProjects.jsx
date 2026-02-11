import Container from '@/components/Container'
import OurProjImage from './comp/OurProjImage'

export default function OurProjects({projects}) {

  const CivilConstruction = projects.filter(
    p => p.projectType === 'Civil Construction'
  ).slice(0,3)
  const Architectural = projects.filter(
    p => p.projectType === 'Architectural'
  ).slice(0,3)
  const Interior = projects.filter(
    p => p.projectType === 'Interior'
  ).slice(0,3)

  return (
    <Container className={'flex-col w-full mt-5'}>
      <h1 className='text-4xl font-semibold'>Our Projects</h1>
      <p className='text-lg text-text-mute text-center px-5'>
        To improve clients experiences through constant innovation...
      </p>

      {CivilConstruction.length > 0 &&
        <OurProjImage oneTypeProj={CivilConstruction} />}

      {Architectural.length > 0 &&
        <OurProjImage oneTypeProj={Architectural} />}

      {Interior.length > 0 &&
        <OurProjImage oneTypeProj={Interior} />}
    </Container>
  )
}
