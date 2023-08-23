import Image from 'next/image'
import { Hero } from './Components/App'
import { Header } from '@/components/Header'

export default function Home() {
  return (
  
      <div className="bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-scroll z-0 text-white h-screen">
         <Header></Header>


         <section id='hero' className='snap-center'>
    <Hero></Hero>
    </section>
    </div>
    
  )
}
