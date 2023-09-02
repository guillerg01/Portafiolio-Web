import Image from 'next/image'
import { Hero } from './Components/Hero'
import { Header } from '@/components/Header'
import { About } from './Components/About'
import { Experience } from './Components/Experience'
import { Skills } from './Components/Skills'
import { Proyects } from './Components/Proyects'
import { ContactMe } from './Components/ContactMe'

export default function Home() {
  return (

    <div className="bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-scroll z-0 text-white h-screen">


      <Header></Header>


      <section id='hero' className='snap-start'>
        <Hero></Hero>
      </section>


      <section id='about' className='snap-center'>
        <About></About>
      </section>


      <section id='experience' className='snap-center'>
        <Experience></Experience>
      </section>



      <section id='skills' className='snap-center'>
        <Skills></Skills>
      </section>


      <section id='proyects' className='snap-center'>
        <Proyects></Proyects>

      </section>



      <section id='contact' className='snap-center'>
        <ContactMe></ContactMe>

      </section>
      
    </div>

  )
}
