import Container from "@/components/Container"
import OurServieses from "@/components/home/OurServieses"
import Table from "@/components/services/Table"
export default function Services() {
  return (
    <Container className={'flex-col'}>
      <OurServieses heading={'WHAT WE ARE OFFERING?'} para={'To improve clients experiences through constant innovation and understanding, with a focus on quality, time and cost so that when it comes to TS Nirman Group, clients come to expect nothing but the best from us.'}/>
      <Container className={'justify-start md:px-[100px] w-full'}>
        <Table/>
      </Container>
    </Container>
  )
}
