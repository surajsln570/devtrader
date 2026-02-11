import pic1 from '@/assets/pic1.jpg'
import pic2 from '@/assets/pic2.jpg'
import pic3 from '@/assets/pic3.jpg'
import pic4 from '@/assets/pic4.avif'
import pic5 from '@/assets/pic5.avif'
import modling3d from '@/assets/3dmodelling.jpg'
import Architectural from '@/assets/Architectural.jpg'
import civil from '@/assets/civil.jpg'
import cost from '@/assets/costEstimation.jpg'
import interior from '@/assets/interior.jpg'
import planning from '@/assets/planning.jpg'
import renovation from '@/assets/renovation.jpg'
import structural from '@/assets/structural.jpg'
import vaastu from '@/assets/vaastu.jpg'
import { getAllProject } from '@/fetch/project.api.js'


export   const projectImage = async () => await getAllProject();
    export const services = [
        {
            name: 'CIVIL CONSTRUCTION',
            img: civil
        },
        {
            name: 'ARCHITECTURAL',
            img: Architectural
        },
        {
            name: '3D MODELLING',
            img: modling3d
        },
        {
            name: 'COST ESTIMATION',
            img: cost
        },
        {
            name: 'STRUCTURAL ASSISTANCE',
            img: structural
        },
        {
            name: 'RENOVATION',
            img: renovation
        },
        {
            name: 'PLANNING',
            img: planning
        },
        {
            name: 'VAASTU CONSULTATION',
            img: vaastu
        },
        {
            name: 'Interior',
            img: interior
        },
    ]